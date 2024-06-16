"use client";

import { useEffect } from 'react';
import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import * as THREE from "three";

export default function NikeShow(props: MeshProps) {
  const { scene } = useGLTF("/models/nike_air_zoom_pegasus_36/scene.gltf");

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) {
        object.castShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive object={scene} {...props} />
  );
}