import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF } from "@react-three/drei";

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

const Drop = (props) => {
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

  const mesh = useRef();

  // useFrame(({ clock }) => {
  //   // mesh.current.rotation.x = Math.sin(clock.getElapsedTime());
  // });

  const texture = React.useMemo(
    () => new THREE.TextureLoader().load("waternormals.jpg"),
    []
  );
  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <>
      <mesh
        ref={mesh}
        scale={[1.5, 1.5, 1.5]}
        castShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Material.004"]}
        onClick={props.function}
      >
        {/* <sphereGeometry args={[2, 128, 10]} attach="geometry" /> */}
        <meshPhysicalMaterial
          envMap={texture}
          side={THREE.DoubleSide}
          roughness={0}
          reflectivity={0}
          color={0xc3e4f9}
          metalness={1}
          refractionRatio={-1}
        ></meshPhysicalMaterial>

        <meshPhysicalMaterial
          envMap={texture}
          transparent
          envMapIntensity={0.3}
          side={THREE.DoubleSide}
          roughness={0}
          reflectivity={0.9}
          metalness={0.35}
          transmission={1}
        ></meshPhysicalMaterial>
      </mesh>
    </>
  );
};

const WaterDrop = () => {
  const [popUp, showPopUp] = useState(false);
  console.log(popUp);
  return (
    <>
      <Canvas>
        <ambientLight color={0xffffff} />
        <CameraControls />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Drop position={[0, 0, 0]} function={() => showPopUp(!popUp)} />
        <SkyBox />
      </Canvas>
      {popUp ? (
        <div className="absolute top-1/3 -left-1/2 bg-red-500 w-72 h-30 flex justify-center items-center text-center p-4">
          <p>
            Wetenschappers van de State University van New York ontdekten dat
            93% van het flessenwater in de wereld microplastics bevat die je
            tijdens het drinken inneemt.
          </p>
        </div>
      ) : null}
    </>
  );
};
export default WaterDrop;
useGLTF.preload("/waterdroplet.gltf");
