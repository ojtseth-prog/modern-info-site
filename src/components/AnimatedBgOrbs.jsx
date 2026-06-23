import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingOrb = ({ position, scale, speed, offset }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(time * speed + offset) * 1.5;
      meshRef.current.position.y = position[1] + Math.cos(time * speed * 0.7 + offset) * 1.2;
      meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.5 + offset) * 0.8;
      meshRef.current.scale.setScalar(scale + Math.sin(time * speed * 1.5 + offset) * 0.15);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#d4af37"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const pointsRef = useRef();
  
  const particleCount = 400;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      color.setHSL(0.12 + Math.random() * 0.08, 0.8, 0.5 + Math.random() * 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const AnimatedBgOrbs = () => {
  const orbs = useMemo(() => [
    { position: [-4, 2, -3], scale: 1.2, speed: 0.3, offset: 0 },
    { position: [5, -1, -2], scale: 0.9, speed: 0.4, offset: 2 },
    { position: [0, 3, -4], scale: 1.5, speed: 0.25, offset: 4 },
    { position: [-3, -2, -1], scale: 0.7, speed: 0.35, offset: 1 },
    { position: [4, 1, -5], scale: 1.1, speed: 0.28, offset: 3 },
  ], []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.85, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField />
        {orbs.map((orb, i) => (
          <FloatingOrb key={i} {...orb} />
        ))}
      </Canvas>
    </div>
  );
};

export default AnimatedBgOrbs;
