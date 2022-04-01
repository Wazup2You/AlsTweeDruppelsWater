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
  const { nodes, materials } = useGLTF("/plasticmoleculen.gltf");
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
          position={[-0.12, -0.19, 0.2]} scale={0.06}
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[-0.12, -0.19, 0.2]} scale={0.06}
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
          position={[0.41, 0.08, 0.2]} rotation={[0, 0, -2.28]} scale={0.06}
          geometry={nodes.Sphere017.geometry}
          material={nodes.Sphere017.material}
        />
        <mesh
          castShadow
          receiveShadow
          position={[0.41, 0.08, 0.2]} rotation={[0, 0, -2.28]} scale={0.06}
          geometry={nodes.Sphere017_1.geometry}
          material={nodes.Sphere017_1.material}
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
<mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-0.49, -0.12, 0.2]}
        rotation={[1.47, 0.96, 0.08]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-0.34, 0.18, 0.2]}
        rotation={[1.51, 0, 0]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0.22, -0.41, 0.2]}
        rotation={[1.43, 1.15, 0.13]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[0.21, 0.6, 0.2]}
        rotation={[1.45, 1.1, 0.11]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[-0.42, -0.45, 0.2]}
        rotation={[1.49, 0.83, 0.06]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[-0.51, 0.42, 0.2]}
        rotation={[1.41, -1.21, -0.15]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[-0.09, 0.03, 0.2]}
        rotation={[1.51, 0, 0]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[0.12, 0.96, 0.2]}
        rotation={[1.51, 0.53, 0.03]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={nodes.Plane008.material}
        position={[0.21, 0.02, -0.11]}
        rotation={[0.54, -0.52, 1.83]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[0.21, 0.67, -0.3]}
        rotation={[0.08, -0.52, 1.83]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={nodes.Plane010.material}
        position={[0.21, 1.24, -0.06]}
        rotation={[1.77, -0.52, 1.83]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={nodes.Plane011.material}
        position={[0.21, -0.22, 0.51]}
        rotation={[0.96, -0.52, 1.83]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={nodes.Plane012.material}
        position={[-0.51, 0.03, -0.77]}
        rotation={[0.46, -0.68, -1.25]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={nodes.Plane013.material}
        position={[-0.51, 0.71, -0.03]}
        rotation={[-0.02, -0.68, -1.25]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={nodes.Plane014.material}
        position={[-0.51, 0.57, -0.48]}
        rotation={[0.97, -0.68, -1.25]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
        position={[-0.51, -0.43, -0.13]}
        rotation={[1.02, -0.68, -1.25]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={nodes.Plane016.material}
        position={[-0.3, -0.4, -0.3]}
        rotation={[-2.52, -0.83, -0.53]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={nodes.Plane017.material}
        position={[-0.66, 0.19, -0.48]}
        rotation={[1.45, 0.05, 2.83]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={nodes.Plane018.material}
        position={[-0.39, 0.88, -0.3]}
        rotation={[-2.23, -0.46, -0.06]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={nodes.Plane019.material}
        position={[-0.07, 0.37, -0.3]}
        rotation={[3.02, -0.98, -1.46]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={nodes.Plane020.material}
        position={[-0.25, -0.07, -0.3]}
        rotation={[-2.26, -0.52, -0.12]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={nodes.Plane021.material}
        position={[0.24, 0.45, -0.48]}
        rotation={[1.39, 0.86, 2.96]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={nodes.Plane022.material}
        position={[0.07, 0.84, -0.48]}
        rotation={[0.01, 1.45, -1.9]}
        scale={[0.19, 0.19, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={nodes.Plane023.material}
        position={[0.21, -0.21, -0.48]}
        rotation={[-1.22, 1.22, -0.65]}
        scale={[0.19, 0.19, 0.19]}
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
useGLTF.preload("/plasticmoleculen.gltf");
