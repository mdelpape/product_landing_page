"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SoftShadows, Environment } from "@react-three/drei";

import Mirror from "./components/Mirror";

import SodaDispenser from "./components/SodaDispenser";
import NikeShow from "./components/NikeShow";

export default function Home() {
  const shadowConfig = {
    size: { value: 35, min: 0, max: 100 },
    focus: { value: 0, min: 0, max: 2 },
    samples: { value: 10, min: 1, max: 20, step: 1 },
  };

  return (
    <main className="flex flex-col bg-white">
      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 1, 5], far: 50 }}
        shadows
      >
        <Environment preset="night" />
        {/* <Mirror rotation={[0, 0, 0]} position={[0, 2.5, -8]}/> */}
        <SoftShadows
          size={shadowConfig.size.value}
          focus={shadowConfig.focus.value}
          samples={shadowConfig.samples.value}
        />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
          enablePan={false}
          maxDistance={20}
          minDistance={4}
        />
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[5, 2, 5]}
          intensity={5}
          shadow-mapSize={1024}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </directionalLight>
        {/* Nike Shoe */}
        {/* <NikeShow
          position={[0, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={5}
        /> */}
        <SodaDispenser
        position={[0, 0, 0]}
        rotation={[0, .5, 0]}
        scale={2}
        />
        <mesh
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.5} />{" "}
          {/* Adjust opacity to control visibility of shadows */}
        </mesh>
        <pointLight position={[10, 10, 5]} intensity={20} />
      </Canvas>
    </main>
  );
}
