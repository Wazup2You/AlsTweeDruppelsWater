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
      enableZoom={true}
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
  const { nodes, materials } = useGLTF("/watermoleculen2.gltf");
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

  const texture = React.useMemo(
    () => new THREE.TextureLoader().load("waternormals.jpg"),
    []
  );
  texture.encoding = THREE.sRGBEncoding;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // texture and shape of the droplet
  return (
    <>
      <mesh
        ref={mesh}
        scale={[1.5, 1.5, 1.5]}
        castShadow
        geometry={nodes.Droplet.geometry}
        material={materials["Material.004"]}
        onClick={props.function}
      >
        <mesh
          castShadow
          receiveShadow
          position={[-0.12, -0.19, 0.2]}
          scale={0.06}
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.12, -0.19, 0.2]}
          scale={0.06}
          geometry={nodes.Sphere_1.geometry}
          material={nodes.Sphere_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 1.19, 0.2]}
          rotation={[0, 0, -0.9]}
          scale={0.06}
          geometry={nodes.Sphere016.geometry}
          material={nodes.Sphere016.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 1.19, 0.2]}
          rotation={[0, 0, -0.9]}
          scale={0.06}
          geometry={nodes.Sphere016_1.geometry}
          material={nodes.Sphere016_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.08, 0.2]}
          rotation={[0, 0, -2.28]}
          scale={0.06}
          geometry={nodes.Sphere017.geometry}
          material={nodes.Sphere017.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.08, 0.2]}
          rotation={[0, 0, -2.28]}
          scale={0.06}
          geometry={nodes.Sphere017_1.geometry}
          material={nodes.Sphere017_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[-0.14, 0.51, 0.2]}
          rotation={[0, 0, 1.27]}
          scale={0.06}
          geometry={nodes.Sphere024.geometry}
          material={nodes.Sphere024.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.14, 0.51, 0.2]}
          rotation={[0, 0, 1.27]}
          scale={0.06}
          geometry={nodes.Sphere024_1.geometry}
          material={nodes.Sphere024_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.41, -0.1, -0.49]}
          rotation={[1.74, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere026.geometry}
          material={nodes.Sphere026.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, -0.1, -0.49]}
          rotation={[1.74, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere026_1.geometry}
          material={nodes.Sphere026_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.38, -0.08]}
          rotation={[-1.91, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere027.geometry}
          material={nodes.Sphere027.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.38, -0.08]}
          rotation={[-1.91, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere027_1.geometry}
          material={nodes.Sphere027_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.19, 0.65]}
          rotation={[-1.17, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere029.geometry}
          material={nodes.Sphere029.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.19, 0.65]}
          rotation={[-1.17, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere029_1.geometry}
          material={nodes.Sphere029_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.14, -0.68, -0.49]}
          rotation={[3.1, 0, -2.73]}
          scale={0.06}
          geometry={nodes.Sphere032.geometry}
          material={nodes.Sphere032.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.14, -0.68, -0.49]}
          rotation={[3.1, 0, -2.73]}
          scale={0.06}
          geometry={nodes.Sphere032_1.geometry}
          material={nodes.Sphere032_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[0.12, 0.25, -0.49]}
          rotation={[-3.11, 0.01, 0.7]}
          scale={0.06}
          geometry={nodes.Sphere033.geometry}
          material={nodes.Sphere033.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.12, 0.25, -0.49]}
          rotation={[-3.11, 0.01, 0.7]}
          scale={0.06}
          geometry={nodes.Sphere033_1.geometry}
          material={nodes.Sphere033_1.material}
        />

        <mesh
          castShadow
          receiveShadow
          position={[-0.09, -0.24, -0.19]}
          rotation={[1.8, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere034.geometry}
          material={nodes.Sphere034.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, -0.24, -0.19]}
          rotation={[1.8, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere034_1.geometry}
          material={nodes.Sphere034_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 0.9, -0.07]}
          rotation={[Math.PI, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere035.geometry}
          material={nodes.Sphere035.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 0.9, -0.07]}
          rotation={[Math.PI, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere035_1.geometry}
          material={nodes.Sphere035_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, -0.53, 0.08]}
          rotation={[2.43, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere036.geometry}
          material={nodes.Sphere036.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, -0.53, 0.08]}
          rotation={[2.43, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere036_1.geometry}
          material={nodes.Sphere036_1.material}
        />

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
        <div className="absolute top-1/2 -left-1/2 bg-green-500 w-72 h-30 flex justify-center items-center text-center p-4">
          <p>
            In Nederland kun je beter kraanwater drinken. Het behoort namelijk
            tot de beste van de wereld. Continu wordt gecontroleerd of het aan
            alle wettelijke eisen voldoet. Mineraalwater hoeft niet te voldoen
            aan de eisen van het Nederlandse kraanwater. Zo kan mineraalwater
            bijvoorbeeld meer zouten bevatten dan ons kraanwater bevat.
          </p>
        </div>
      ) : null}
    </>
  );
};
export default WaterDrop;
useGLTF.preload("/watermoleculen2.gltf");
