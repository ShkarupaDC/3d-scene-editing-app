import * as THREE from "three";

export const getFilesUrls = (files) => {
  if (files) {
    return Object.values(files).map((file) => URL.createObjectURL(file));
  }
  return [];
};

export const validateEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export const validateGoogleDiskLink = (value) =>
  value.match("https://drive.google.com/drive/folders/*");

export const addMesh = (loader, scene, hash) => {
  loader.load(
    `/meshes/${hash}`,
    (geometry) => {
      geometry.computeVertexNormals();
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = hash;
      scene.add(mesh);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getBoxCenter = (min, max) => {
  return new THREE.Vector3(
    (min.x + max.x) / 2,
    (min.y + max.y) / 2,
    (min.z + max.z) / 2
  );
};

export const getBoxSize = (min, max) => {
  return new THREE.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);
};
