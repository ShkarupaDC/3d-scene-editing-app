import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

const Scene = () => {
  const loader = new PLYLoader();

  // creating scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);

  // creating camera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 256);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  // creating renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(512, 512);

  // creating Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  loader.load(
    "/meshes/lego_hybrid_5.ply",
    function (geometry) {
      console.log(geometry);
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      mesh.rotateX(-Math.PI / 2);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );

  // callback update dom and return it
  const getThreeDom = () => {
    requestAnimationFrame(getThreeDom);
    renderer.render(scene, camera);

    return renderer.domElement;
  };

  return <div>{getThreeDom()}</div>;
};

export default Scene;
