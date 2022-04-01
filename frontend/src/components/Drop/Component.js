import React, { useRef } from "react";
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

const Drop = () => {
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
  return (
    <mesh
      ref={mesh}
      scale={[1.5, 1.5, 1.5]}
      castShadow
      geometry={nodes.Droplet.geometry}
      material={materials["Material.004"]}

      // onClick={(e) => setActive(!active)}
    >
        <mesh
          castShadow
          receiveShadow
          scale={0.06}
          position={[-0.12, -0.19, 0.2]}
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
        />
        <mesh
          castShadow
          receiveShadow
          scale={0.06}
          position={[-0.12, -0.19, 0.2]}
          geometry={nodes.Sphere_1.geometry}
          material={nodes.Sphere_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 1.19, 0.2]} rotation={[0, 0, -0.9]} scale={0.06}
          geometry={nodes.Sphere016.geometry}
          material={nodes.Sphere016.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 1.19, 0.2]} rotation={[0, 0, -0.9]} scale={0.06}
          geometry={nodes.Sphere016_1.geometry}
          material={nodes.Sphere016_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.14, 0.51, 0.2]} rotation={[0, 0, 1.27]} scale={0.06}
          geometry={nodes.Sphere024.geometry}
          material={nodes.Sphere024.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.14, 0.51, 0.2]} rotation={[0, 0, 1.27]} scale={0.06}
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
          position={[0.41, 1.04, -0.14]}
          rotation={[3.14, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere028.geometry}
          material={nodes.Sphere028.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, 1.04, -0.14]}
          rotation={[3.14, -1.56, 0.86]}
          scale={0.06}
          geometry={nodes.Sphere028_1.geometry}
          material={nodes.Sphere028_1.material}
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
          position={[-0.35, 0.06, -0.49]}
          rotation={[3.11, -0.03, -2.07]}
          scale={0.06}
          geometry={nodes.Sphere030.geometry}
          material={nodes.Sphere030.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.35, 0.06, -0.49]}
          rotation={[3.11, -0.03, -2.07]}
          scale={0.06}
          geometry={nodes.Sphere030_1.geometry}
          material={nodes.Sphere030_1.material}
        />

<mesh
          castShadow
          receiveShadow
          position={[0.14, 0.68, -0.49]}
          rotation={[3.13, 0.04, 2.26]}
          scale={0.06}
          geometry={nodes.Sphere031.geometry}
          material={nodes.Sphere031.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.14, 0.68, -0.49]}
          rotation={[3.13, 0.04, 2.26]}
          scale={0.06}
          geometry={nodes.Sphere031_1.geometry}
          material={nodes.Sphere031_1.material}
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
                <mesh
          castShadow
          receiveShadow
          position={[-0.09, 0.02, 0.64]}
          rotation={[-2.01, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere037.geometry}
          material={nodes.Sphere037.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.09, 0.02, 0.64]}
          rotation={[-2.01, -1.01, 2.25]}
          scale={0.06}
          geometry={nodes.Sphere037_1.geometry}
          material={nodes.Sphere037_1.material}
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
  );
};

const WaterDrop = () => {
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
export default WaterDrop;
useGLTF.preload("/watermoleculen2.gltf");
