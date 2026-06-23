import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// The core wireframe globe representing global digital reach
const WireframeGlobe = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.15;
    }
  });

  return (
    <group>
      {/* Outer wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 3]} />
        <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.15} />
      </mesh>
      {/* Inner glowing core */}
      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
};

// Data rings representing networks/connectivity
const DataRing = ({ radius, tube, speed, rotationX, rotationZ, opacity }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * speed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[rotationX, 0, rotationZ]}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshBasicMaterial color="#d4af37" wireframe transparent opacity={opacity} />
    </mesh>
  );
};

// 3 Orbiting nodes representing the 3 core services
const OrbitingNodes = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        const radius = 3.8;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle * 3) * 1.0, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#d4af37" transparent opacity={0.9} blending={THREE.AdditiveBlending} />
          </mesh>
        );
      })}
    </group>
  );
};

// Digital data stream particles orbiting the globe
const DataStream = () => {
  const pointsRef = useRef();
  const particleCount = 600;

  const initialPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Cylinder distribution around the globe
      const radius = 2.8 + Math.random() * 2.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6; // Y spread
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const positions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);
  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      // Mix of bright gold and deep crimson for brand consistency
      if (Math.random() > 0.3) {
        color.setHSL(0.12, 0.85, 0.4 + Math.random() * 0.4);
      } else {
        color.setHSL(0.0, 0.9, 0.2 + Math.random() * 0.3);
      }
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      // Particles orbit around Y axis and float upwards
      posArray[i * 3 + 1] += 0.005 + (i % 5) * 0.002;
      
      const currentX = posArray[i * 3];
      const currentZ = posArray[i * 3 + 2];
      const angle = Math.atan2(currentZ, currentX) + 0.005;
      const radius = Math.sqrt(currentX * currentX + currentZ * currentZ);
      
      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;

      // Wrap around Y
      if (posArray[i * 3 + 1] > 3) {
        posArray[i * 3 + 1] = -3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Ambient floating dust
const AmbientDust = () => {
  const pointsRef = useRef();
  const particleCount = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#d4af37" transparent opacity={0.3} sizeAttenuation depthWrite={false} />
    </points>
  );
};

const AnimatedBgServices = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Core Globe */}
        <WireframeGlobe />
        
        {/* Orbiting Network Rings */}
        <DataRing radius={3.2} tube={0.02} speed={0.12} rotationX={Math.PI / 3} rotationZ={Math.PI / 6} opacity={0.25} />
        <DataRing radius={3.8} tube={0.015} speed={-0.08} rotationX={-Math.PI / 4} rotationZ={-Math.PI / 8} opacity={0.2} />
        <DataRing radius={4.5} tube={0.01} speed={0.05} rotationX={Math.PI / 2} rotationZ={0} opacity={0.15} />
        
        {/* Glowing Service Nodes */}
        <OrbitingNodes />
        
        {/* Flowing Data Stream Particles */}
        <DataStream />
        
        {/* Ambient background dust */}
        <AmbientDust />
      </Canvas>
    </div>
  );
};

export default AnimatedBgServices;
