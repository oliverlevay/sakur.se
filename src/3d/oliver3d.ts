import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Vector3 } from 'three';

let animating = true;

export const stopAnimating = () => {
  animating = false;
};

export const startAnimating = (canvas: Element) => {
  animating = true;
  const isDesktop = window.innerWidth > 768;
  let mixer = new THREE.AnimationMixer(new THREE.Object3D());
  const clock = new THREE.Clock();
  const scene = new THREE.Scene();

  const loader = new GLTFLoader();

  let characterLoaded = false;

  const camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    0.1,
    20000
  );

  const cameraDefaults = new Vector3(
    isDesktop ? -0.2 : 0,
    isDesktop ? 0.96 : 0.9,
    2
  );
  if (!characterLoaded) {
    window.scrollTo({ top: 0 });
    camera.position.set(cameraDefaults.x, cameraDefaults.y, cameraDefaults.z);
    camera.rotation.set(0, 0, 0);
  }

  let oliver: THREE.Group;
  let office;

  let newScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    //pivot.rotateY(0.01);
    const oldScroll = newScroll;
    newScroll = window.scrollY;
    const scrollDelta = oldScroll - newScroll;
    if (scrollY < 810) {
      pivot.rotation.set(0, 0, 0);
      camera.position.lerp(
        new Vector3(cameraDefaults.x, cameraDefaults.y, cameraDefaults.z),
        0.1
      );
    }
    if (scrollY > 810 && scrollY < 2130) {
      //camera.translateZ(scrollDelta * 0.016);
      camera.position.lerp(new Vector3(isDesktop ? -0.05 : 0.1, 1, 0.8), 0.1);
      camera.rotation.set(0, 0, 0);
      pivot.rotation.set(0, 0, 0);
    } else if (scrollY > 2130 && scrollY < 2530) {
      camera.position.lerp(new Vector3(isDesktop ? -0.1 : -0.05, 1, 0.8), 0.1);
      pivot.rotateY(scrollDelta * 0.005);
    } else if (scrollY > 2530 && scrollY < 4000) {
      //pivot.rotation.set(3.14, -1.1465, 3.14);
      pivot.position.lerp(new Vector3(0, 0, 0), 0.1);
    }
  });

  const renderer = new THREE.WebGL1Renderer({
    alpha: true,
    canvas,
  });

  /* window.onresize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }; */
  //const controls = new OrbitControls(camera, renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(0, 0, 1);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  scene.background = null;

  const pivot = new THREE.Group();
  scene.add(pivot);

  const officePositions = { x: 0, y: 0.77, z: 0 };
  loader.load(
    'models/animated/oliver typing.glb',
    function (gltf) {
      oliver = gltf.scene;
      oliver.traverse(function (object) {
        // @ts-ignore
        if (object.isMesh) {
          object.frustumCulled = false;
          // object.castShadow = true;
        }
      });
      oliver.rotateY(-0.8);
      oliver.position.set(
        officePositions.x + 0.14,
        officePositions.y - 0.045,
        officePositions.z - 0.13
      );
      mixer = new THREE.AnimationMixer(oliver);
      const animations = gltf.animations;
      const typingAction = mixer.clipAction(animations[0]);
      pivot.add(oliver);
      typingAction.play();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  loader.load(
    'models/office/scene.gltf',
    function (gltf) {
      office = gltf.scene;
      office.scale.set(0.003, 0.003, 0.003);
      office.rotateY(1);
      office.position.set(
        officePositions.x,
        officePositions.y,
        officePositions.z
      );
      //model.rotateY(-0.5);
      pivot.add(office);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  function animate() {
    if (animating) {
      requestAnimationFrame(animate);
      if (oliver) {
        renderer.render(scene, camera);
        mixer.update(clock.getDelta());
      }
    }
  }
  animate();
};
