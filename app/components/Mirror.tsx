import {
  MeshReflectorMaterial,
  Reflector,
} from "@react-three/drei";
import { MeshProps } from '@react-three/fiber';

export default function Mirror(props: MeshProps) {
  return (
    <mesh {...props}>
      <planeGeometry args={[10, 5]} />
      <MeshReflectorMaterial
        color="#3A3A3A"
        resolution={1024}
        mirror={1}
        mixBlur={0} // Adjust for a softer reflection
        mixStrength={1} // Adjust reflection strength
        metalness={10} // Increase metalness for stronger reflections
        roughness={0} // Lower roughness for clearer reflections
        distortion={1} // Amount of distortion based on the distortionMap texture
        displacementBias={0} // Bias for the displacement map
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
      />
    </mesh>
  );
}
