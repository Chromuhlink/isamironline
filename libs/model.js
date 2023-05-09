import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTF(scene, glbpath, options = { receiveShadow: true, castShadow: true }) {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbpath,
      (gltf) => {
        console.log("Model loaded successfully:", gltf);

        const obj = gltf.scene;
        obj.name = 'floppy';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      (error) => {
        console.log(error);
        reject(error);
      }
    );
  });
}
