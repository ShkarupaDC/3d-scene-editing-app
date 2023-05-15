import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { handleAPIError, API_URL } from "./api";

const TRANSLATE_KEY = "t";
const SCALE_KEY = "s";
const ROTATE_KEY = "r";

const arrayToMatrix = (array, columns) =>
  array.reduce(
    (rows, key, index) =>
      (index % columns == 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );

const arrayToSquareMatrix = (array) =>
  arrayToMatrix(array, Math.sqrt(array.length));

const threeMatrixToArray = (matrix) =>
  arrayToSquareMatrix(matrix.clone().transpose().elements);

class Viewer3d {
  #meshLoader;
  #renderer;
  _camera;
  _scene;
  _cameraControl;
  _mouseEvent;

  constructor(background = 0xd0d0d0) {
    this._camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000);
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(background);
    this.#renderer = new THREE.WebGLRenderer(); // { canvas }
    this.#meshLoader = new PLYLoader();

    this.#renderer.setSize(1000, 750);
    this._camera.position.set(2, 2, 2);
    this._camera.lookAt(0, 0, 0);

    const axes = new THREE.AxesHelper(1);
    this._scene.add(axes);
    this._cameraControl = new OrbitControls(this._camera, this.canvas); // TrackballControls does not work
    this._cameraControl.update();

    window.addEventListener("mousemove", this.#catchMouseEvent.bind(this));
    window.addEventListener("resize", this.#onWindowResize.bind(this));
  }

  get canvas() {
    return this.#renderer.domElement;
  }

  get cameraControl() {
    return this._cameraControl;
  }

  #catchMouseEvent(event) {
    this._mouseEvent = event;
  }

  // TODO: fix
  #onWindowResize(event) {
    if (
      this.canvas.width !== this.canvas.clientWidth ||
      this.canvas.height !== this.canvas.clientHeight
    ) {
      this.#renderer.setSize(
        this.canvas.clientWidth,
        this.canvas.clientHeight,
        false
      );
      this._camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      this._camera.updateProjectionMatrix();
    }
  }

  _disableCamera(event) {
    this._cameraControl.enabled = !event.value;
  }

  async _fetchMesh(experimentId) {
    let geometry;
    try {
      geometry = await this.#meshLoader.loadAsync(
        `${API_URL}/experiment/${experimentId}/mesh`
      );
    } catch (error) {
      if (error?.response) {
        await handleAPIError(error.response);
      }
      throw error;
    }
    geometry.computeVertexNormals();
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
  }

  render() {
    this.#renderer.render(this._scene, this._camera);
  }

  runLoop() {
    requestAnimationFrame(this.runLoop.bind(this));
    this._cameraControl.update();
    this.render();
  }
}

export class EditAABBViewer3d extends Viewer3d {
  #mesh;
  #aabb;
  #control;

  constructor(...args) {
    super(...args);
    this.#aabb = this.#getAABBWireframe();
    this._scene.add(this.#aabb);
    this.#control = new TransformControls(this._camera, this.canvas);
    this.#control.attach(this.#aabb);
    this._scene.add(this.#control);
    this.#hideAABB();

    this.#control.addEventListener(
      "dragging-changed", // dragging is a control property
      this._disableCamera.bind(this)
    );
    window.addEventListener("keydown", this.#onKeydown.bind(this));
  }

  #getAABBWireframe(size = 1, color = 0x000000) {
    const aabb = new THREE.BoxGeometry(size, size, size);
    const aabbEdges = new THREE.EdgesGeometry(aabb);
    const material = new THREE.LineBasicMaterial({ color });
    return new THREE.LineSegments(aabbEdges, material);
  }

  #onKeydown(event) {
    if (
      !this.#aabb.visible ||
      !this._mouseEvent ||
      this._mouseEvent.target !== this.canvas
    ) {
      return;
    }
    this.#setControlMode(event);
    this.render();
  }

  #setControlMode(event) {
    switch (event.key) {
      case TRANSLATE_KEY:
        this.#control.setMode("translate");
        break;
      case SCALE_KEY:
        this.#control.setMode("scale");
        break;
    }
  }

  #resetAABB() {
    this.#aabb.applyMatrix4(this.#aabb.matrixWorld.invert());
  }

  #makeAABBvisible(isVisible) {
    this.#aabb.visible = isVisible;
    this.#control.showX = this.#control.showY = this.#control.showZ = isVisible;
    this.#control.enabled = isVisible;
  }

  #showAABB() {
    this.#makeAABBvisible(true);
  }

  #hideAABB() {
    this.#makeAABBvisible(false);
  }

  async setMesh(experimentId, resetFirst = false) {
    if (resetFirst) {
      this.resetMesh();
    }
    this.#mesh = await super._fetchMesh(experimentId);
    this._scene.add(this.#mesh);
    this.#resetAABB();
    this.#showAABB();
  }

  resetMesh() {
    if (!this.#mesh) {
      return;
    }
    this._scene.remove(this.#mesh);
    this.#mesh = null;
    this.#hideAABB();
  }

  get aabbArray() {
    if (!this.#aabb || !this.#aabb.visible) {
      return null;
    }
    const aabb = new THREE.Box3();
    aabb.setFromObject(this.#aabb);
    return [aabb.min.toArray(), aabb.max.toArray()];
  }

  get hasMesh() {
    return this.#mesh ? true : false;
  }
}

export class ComposeViewer3d extends Viewer3d {
  #raycaster;
  #meshIdToControlId = new Map();

  constructor(...args) {
    super(...args);
    this.#raycaster = new THREE.Raycaster();
    window.addEventListener("keydown", this.#onKeydown.bind(this));
  }

  #onKeydown(event) {
    const meshes = Array.from(this.#meshes());
    if (
      !meshes.length ||
      !this._mouseEvent ||
      this._mouseEvent.target !== this.canvas
    ) {
      return;
    }
    const position = this.#getMousePosition(this._mouseEvent);
    this.#raycaster.setFromCamera(position, this._camera);
    const objects = this.#raycaster.intersectObjects(meshes);
    if (!objects.length) {
      return;
    }
    const control = this.#getControl(objects[0].object.id);
    this.#setControlMode(event, control);
  }

  #setControlMode(event, control) {
    switch (event.key) {
      case TRANSLATE_KEY:
        control.setMode("translate");
        break;
      case ROTATE_KEY:
        control.setMode("rotate");
        break;
      case SCALE_KEY:
        control.setMode("scale");
        break;
    }
  }

  #getMousePosition(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((event.clientY - rect.top) / rect.height) * -2 + 1,
    };
  }

  #getMesh(meshId) {
    return this._scene.getObjectById(meshId);
  }

  #getControl(meshId) {
    const controlId = this.#meshIdToControlId.get(meshId);
    return this._scene.getObjectById(controlId);
  }

  #connectMeshToControl(mesh, control) {
    this.#meshIdToControlId.set(mesh.id, control.id);
  }

  #removeMeshToControlConnection(mesh) {
    this.#meshIdToControlId.delete(mesh.id);
  }

  *#meshes() {
    for (const meshId of this.#meshIdToControlId.keys()) {
      yield this.#getMesh(meshId);
    }
  }

  async addMesh(experimentId) {
    const mesh = await super._fetchMesh(experimentId);
    this._scene.add(mesh);
    const control = new TransformControls(this._camera, this.canvas);
    control.attach(mesh);
    control.addEventListener(
      "dragging-changed",
      this._disableCamera.bind(this)
    );
    this._scene.add(control);
    this.#connectMeshToControl(mesh, control);
    return mesh.id;
  }

  removeMesh(meshId) {
    const mesh = this.#getMesh(meshId);
    this._scene.remove(mesh);
    const control = this.#getControl(meshId);
    this._scene.remove(control);
    this.#removeMeshToControlConnection(mesh);
  }

  getMeshTransformMatrix(meshId) {
    return threeMatrixToArray(this.#getMesh(meshId).matrixWorld);
  }

  get cameraExtrinsics() {
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationX(Math.PI);
    const cameraToWorld = new THREE.Matrix4();
    cameraToWorld.multiplyMatrices(this._camera.matrixWorld, rotationMatrix);
    return threeMatrixToArray(cameraToWorld);
  }

  get cameraFocalLength() {
    return this._camera.getFocalLength() * this._camera.filmGauge;
  }

  get imageSize() {
    return [
      this._camera.getFilmHeight() * this._camera.filmGauge,
      this._camera.getFilmWidth() * this._camera.filmGauge,
    ];
  }
}
