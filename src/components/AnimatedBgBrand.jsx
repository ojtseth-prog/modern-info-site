import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A central geometric gem/diamond representing the core "Brand Identity"
const BrandGem = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
      // Gentle pulsing
      const scale = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Outer wireframe shell */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.3} />
      </mesh>
      {/* Inner solid core */}
      <mesh>
        <octahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
};

// Orbiting geometric shards/pieces coming together to form the identity
const OrbitingShards = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * -0.15;
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 4;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle * 2), Math.sin(angle) * radius]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <tetrahedronGeometry args={[0.5, 0]} />
            <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
};

// Particles converging on the center
const ConvergingParticles = () => {
  const pointsRef = useRef();
  const count = 300;

  const offsets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 10;
      arr.push({ angle, height, speed: 0.5 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2 });
    }
    return arr;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const o = offsets[i];
      // Particles spiral inwards and upwards/downwards towards center
      const cycle = ((time * o.speed + o.phase) % 5) / 5; // 0 to 1
      const radius = 8 * (1 - cycle); // Starts at 8, converges to 0
      
      posArray[i * 3] = Math.cos(o.angle + cycle * Math.PI * 2) * radius;
      posArray[i * 3 + 1] = o.height * (1 - cycle); // Pulls towards Y=0
      posArray[i * 3 + 2] = Math.sin(o.angle + cycle * Math.PI * 2) * radius;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#d4af37" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
};

const AnimatedBgBrand = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <BrandGem />
        <OrbitingShards />
        <ConvergingParticles />
      </Canvas>
    </div>
  );
};

export default AnimatedBgBrand;
