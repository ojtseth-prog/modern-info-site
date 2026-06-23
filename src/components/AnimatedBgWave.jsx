import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveMesh = () => {
  const meshRef = useRef();
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(30, 30, 80, 80);
    return geo;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave1 = Math.sin(x * 0.3 + time * 0.6) * 0.8;
        const wave2 = Math.sin(y * 0.4 + time * 0.4) * 0.6;
        const wave3 = Math.cos((x + y) * 0.2 + time * 0.3) * 0.4;
        positions.setZ(i, wave1 + wave2 + wave3);
      }
      positions.needsUpdate = true;
      meshRef.current.rotation.x = -Math.PI / 3;
      meshRef.current.rotation.z = time * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -2, 0]}>
      <meshBasicMaterial
        color="#d4af37"
        wireframe
        transparent
        opacity={0.12}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const AnimatedBgWave = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 6, 10], fov: 55 }}>
        <WaveMesh />
      </Canvas>
    </div>
  );
};

export default AnimatedBgWave;
