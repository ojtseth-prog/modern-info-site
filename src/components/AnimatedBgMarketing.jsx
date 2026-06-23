import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Concentric rings representing "Audience Targeting" and precision
const TargetRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 2.5 + Math.sin(time * 0.2) * 0.1;
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      
      // Rotate inner rings faster
      groupRef.current.children.forEach((child, index) => {
        child.rotation.z = time * (0.05 + index * 0.02);
      });
    }
  });

  const rings = [
    { radius: 1, tube: 0.02, opacity: 0.8 },
    { radius: 2.5, tube: 0.015, opacity: 0.5 },
    { radius: 4, tube: 0.01, opacity: 0.3 },
    { radius: 5.5, tube: 0.005, opacity: 0.15 },
  ];

  return (
    <group ref={groupRef} position={[0, -1, -2]}>
      {rings.map((ring, i) => (
        <mesh key={i}>
          <torusGeometry args={[ring.radius, ring.tube, 16, 100]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={ring.opacity} wireframe />
        </mesh>
      ))}
      
      {/* Center target dot */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.9} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

// A smooth glowing line representing an upward growth trend
const GrowthTrendLine = () => {
  const lineRef = useRef();
  
  // Create an S-curve or upward bezier curve
  const curve = useMemo(() => {
    return new THREE.CubicBezierCurve3(
      new THREE.Vector3(-4, -2, 0),
      new THREE.Vector3(-1, -2, -2),
      new THREE.Vector3(1, 2, 2),
      new THREE.Vector3(4, 3, 0)
    );
  }, []);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, 0.03, 8, false);
  }, [curve]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (lineRef.current) {
      // Gentle floating
      lineRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={lineRef} geometry={geometry}>
      <meshBasicMaterial color="#d4af37" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </mesh>
  );
};

// Particles that travel along the growth line
const TrendParticles = () => {
  const pointsRef = useRef();
  const particleCount = 60;
  
  const curve = useMemo(() => {
    return new THREE.CubicBezierCurve3(
      new THREE.Vector3(-4, -2, 0),
      new THREE.Vector3(-1, -2, -2),
      new THREE.Vector3(1, 2, 2),
      new THREE.Vector3(4, 3, 0)
    );
  }, []);

  const offsets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < particleCount; i++) {
      arr.push({
        progress: Math.random(),
        speed: 0.1 + Math.random() * 0.2,
        spreadX: (Math.random() - 0.5) * 0.4,
        spreadY: (Math.random() - 0.5) * 0.4,
        spreadZ: (Math.random() - 0.5) * 0.4,
      });
    }
    return arr;
  }, [particleCount]);

  const positions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      const p = offsets[i];
      // Calculate current progress along the curve (loops 0 to 1)
      const currentProgress = (p.progress + time * p.speed) % 1;
      
      // Get point on curve
      const point = curve.getPoint(currentProgress);
      
      posArray[i * 3] = point.x + p.spreadX;
      posArray[i * 3 + 1] = point.y + p.spreadY + Math.sin(time * 0.5) * 0.2; // Match the line's bobbing
      posArray[i * 3 + 2] = point.z + p.spreadZ;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
};

// Ambient connecting network dots (Marketing data)
const NetworkDots = () => {
  const pointsRef = useRef();
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.position.y = Math.sin(time * 0.1) * 0.5;
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

const AnimatedBgMarketing = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Precision Audience Targeting */}
        <TargetRings />
        
        {/* Upward Growth Trend */}
        <GrowthTrendLine />
        <TrendParticles />
        
        {/* Ambient Data Network */}
        <NetworkDots />
      </Canvas>
    </div>
  );
};

export default AnimatedBgMarketing;
