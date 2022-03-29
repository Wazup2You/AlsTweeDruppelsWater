import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF } from "@react-three/drei";
import videoUrl from "../../videos/bottle.mp4";
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
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      ref={controls}
      args={[camera, domElement]}
    />
  );
};

function SkyBox() {
  const { scene } = useThree();
  return null;
}

const Drop = () => {
  const { scene, gl } = useThree();
  const { nodes, materials } = useGLTF("/waterdroplet.gltf");
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

  const [videoTex] = useState(() => {
    const vid = document.createElement("video");
    vid.src = videoUrl;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    return vid;
  });

  const mesh = useRef();

  // const [active, setActive] = useState(false);

  // useFrame(({ clock }) => {
  //   // mesh.current.rotation.x = Math.sin(clock.getElapsedTime());
  // });

  const texture = React.useMemo(
    () => new THREE.TextureLoader().load("waternormals.jpg"),
    []
  );
  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  useEffect(() => void videoTex.play(), [videoTex]);
  return (
    <mesh
      scale={[1.5, 1.5, 1.5]}
      // ref={mesh}
      receiveShadow
      castShadow
      geometry={nodes.Sphere003.geometry}
      material={materials["Material.004"]}
    >
      <meshBasicMaterial toneMapped={true}>
        <videoTexture
          flipY={false}
          attach="map"
          args={[videoTex]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
};
const WaterDropVideo = () => {
  return (
    <Canvas>
      <ambientLight color={0xffffff} />
      <CameraControls />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Drop position={[0, 0, 0]} />
      <SkyBox />
    </Canvas>
  );
};
export default WaterDropVideo;
useGLTF.preload("/waterdroplet.gltf");
