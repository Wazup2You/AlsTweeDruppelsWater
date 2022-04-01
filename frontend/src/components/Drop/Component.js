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
  const { nodes, materials } = useGLTF("/Watermoleculen.gltf");
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
      geometry={nodes.Sphere003.geometry}
      material={materials["Material.004"]}

      // onClick={(e) => setActive(!active)}
    >

       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[0.23, 0.43, -0.18]}
      />
            <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[0.13, 1.33, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[0.11, 0.71, -0.35]}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={nodes.Sphere005.material}
        position={[0.5, 0.03, 0.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[0.24, 0.08, -0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[0.28, 0.03, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={nodes.Sphere008.material}
        position={[-0.32, 0.03, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={nodes.Sphere009.material}
        position={[-0.23, 0.77, 0.1]}
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
useGLTF.preload("/Watermoleculen.gltf");
