'use client'

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import * as THREE from 'three';
import { MeshProps } from "@react-three/fiber";


export default function SodaDispenser(props: MeshProps) {
    const { scene } = useGLTF('/models/generic_soda_dispenser/scene.gltf')
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