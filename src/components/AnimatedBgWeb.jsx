import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating wireframe UI panels representing Web Design structures/layouts
const FloatingPlanes = () => {
  const groupRef = useRef();

  const planes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5
        ],
        size: [1 + Math.random() * 2, 1 + Math.random() * 1.5],
        speed: 0.2 + Math.random() * 0.3,
        rotationOffset: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(time * planes[i].speed + i) * 0.005;
        child.rotation.x = planes[i].rotationOffset[0] + Math.sin(time * 0.2) * 0.1;
        child.rotation.y = planes[i].rotationOffset[1] + Math.cos(time * 0.2) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {planes.map((p, i) => (
        <mesh key={i} position={p.position} rotation={p.rotationOffset}>
          <planeGeometry args={p.size} />
          <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

// A glowing geometric grid representing the underlying code/structure
const CodeGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (time * 1.5) % 2; // Flowing forward
    }
  });

  return (
    <group rotation={[Math.PI / 2.5, 0, 0]} position={[0, -3, -5]}>
      <gridHelper args={[30, 30, '#d4af37', '#d4af37']} ref={gridRef}>
        <meshBasicMaterial transparent opacity={0.15} />
      </gridHelper>
    </group>
  );
};

// Floating digital particles connecting the UI elements
const NetworkParticles = () => {
  const pointsRef = useRef();
  const count = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Particles lock into grid movements
      posArray[i * 3 + 1] += Math.sin(time * 2 + i) * 0.005;
      if (i % 3 === 0) {
        posArray[i * 3] += 0.01; // Data flowing right
      } else {
        posArray[i * 3 + 2] += 0.01; // Data flowing forward
      }

      // Wrapping logic
      if (posArray[i * 3] > 7.5) posArray[i * 3] = -7.5;
      if (posArray[i * 3 + 2] > 5) posArray[i * 3 + 2] = -5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#d4af37" transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
};

const AnimatedBgWeb = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <CodeGrid />
        <FloatingPlanes />
        <NetworkParticles />
      </Canvas>
    </div>
  );
};

export default AnimatedBgWeb;
