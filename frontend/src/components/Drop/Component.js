import React, { useRef, useState, useMemo } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "react-three-fiber";
import * as THREE from "three";
// import goal from "../image/goal.jpg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

function SkyBox() {
  const { scene } = useThree();
  return null;
}

const Drop = () => {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBAFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(-5, 100, -2.5);
  scene.add(cubeCamera);
  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  const mesh = useRef();

  // const [active, setActive] = useState(false);

  // useFrame(({clock})=>{
  //     mesh.current.rotation.x = Math.sin(clock.getElapsedTime());
  // })

  // const texture = useMemo(() => new THREE.TextureLoader().load(goal), []);
  // texture.encoding = THREE.sRGBEncoding;
  // texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <mesh
      ref={mesh}
      scale={[1.5, 1.5, 1.5]}
      castShadow
      // onClick={(e) => setActive(!active)}
    >
      <sphereGeometry args={[2, 128, 10]} attach="geometry" />
      <meshPhysicalMaterial
        envMap={cubeCamera.renderTarget.texture}
        attach="material"
        transparent
        envMapIntensity={1}
        color={0xc3e4f9}
        side={THREE.DoubleSide}
        roughness={0}
        reflectivity={0.9}
        metalness={0.35}
        transmission={1}
      ></meshPhysicalMaterial>
    </mesh>
  );
};

export const WaterDrop = () => {
  return (
    <Canvas>
      <ambientLight color={0xffffff} />
      <CameraControls />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Drop position={[-6, 0, 0]} />
      <SkyBox />
    </Canvas>
  );
};