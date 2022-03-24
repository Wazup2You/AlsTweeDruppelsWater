import * as THREE from "three";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = -2.5;
  camera.position.x = -5;
  const ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerwidth, window.innerHeight);
  document.body.appendChild(renderer.domElement); 
  let toolazyToHandleLoadingProperly = 0;
  const loadingLol = () => toolazyToHandleLoadingProperly++;
  const ENV_URL = "../image/goal.jpg";
  const reflectionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
  const refractionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
//   reflectionCube.mapping = THREE.EquirectanglarReflectionMapping;
//   refractionCube.mapping = THREE.EquirectanglarReflectionMapping;
  scene.background = reflectionCube;
  scene.environment = reflectionCube;

  const geometry = new THREE.SphereGeometry(2, 128, 128);
  const base = geometry?.attributes?.position?.array.slice();
  const refractionMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc3e4f9,
    envMap: refractionCube,
    metalness: 1,
    reflectivity: 0,
    refractionRatio: -1,
    roughness: 0,
    side: THREE.DoubleSide
  });

  const reflectionMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc3e4f9,
    envMap: reflectionCube,
    envMapIntensity: 1,
    metalness: 0.35,
    reflectivity: 0.9,
    roughness: 0,
    side: THREE.DoubleSide,
    transmission: 1,
    transparent: true
  });

  const refractionSphere = new THREE.Mesh(geometry, refractionMaterial);
  const reflectionSphere = new THREE.Mesh(geometry, reflectionMaterial);
  const sphere = new THREE.Object3D();
  sphere.add(refractionSphere);
  sphere.add(reflectionSphere);
  scene.add(sphere);
  sphere.lookAt(camera.position);
  camera.lookAt(sphere.position);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const animate = function (dt) {
    requestAnimationFrame(animate);
    controls.update();
    if (toolazyToHandleLoadingProperly !== 2) return;

    geometry.attributes.position.array.forEach((val, i, arr) => {
      const place = i % 3;

      if (place === 0) {
        arr[i] = base[i] + Math.sin(base[i + 1] * 3 * dt * 0.002) * 0.1;
      }
      if (place === 1) {
        arr[i] = base[i] + Math.cos(base[i - 1] * 5 * dt * 0.003) * 0.08;
      }
      if (place === 2) {
        arr[i] = base[i] + Math.sin(base[i + 2] * 25 * dt * 0.01) * 0.03;
      }
    });
    geometry.computeVertexNormals();
    geometry.normalizeNormals();
    geometry.attributes.position.needsUpdate = true;

    const { innerwidth: w, innerHeight: h } = window;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };

//   requestAnimationFrame(animate);
animate();