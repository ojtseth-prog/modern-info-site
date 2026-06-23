import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Wine glass shape via LatheGeometry
const WineGlass = ({ position, rotation, rotSpeed }) => {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.8, 0));
    points.push(new THREE.Vector2(0.85, 0.05));
    points.push(new THREE.Vector2(0.8, 0.1));
    points.push(new THREE.Vector2(0.12, 0.25));
    points.push(new THREE.Vector2(0.1, 0.35));
    points.push(new THREE.Vector2(0.1, 1.6));
    points.push(new THREE.Vector2(0.12, 1.7));
    points.push(new THREE.Vector2(0.5, 2.0));
    points.push(new THREE.Vector2(0.75, 2.3));
    points.push(new THREE.Vector2(0.85, 2.6));
    points.push(new THREE.Vector2(0.88, 2.9));
    points.push(new THREE.Vector2(0.85, 3.2));
    points.push(new THREE.Vector2(0.78, 3.4));
    points.push(new THREE.Vector2(0.7, 3.55));
    points.push(new THREE.Vector2(0.65, 3.65));
    points.push(new THREE.Vector2(0.66, 3.7));
    points.push(new THREE.Vector2(0.65, 3.72));
    return new THREE.LatheGeometry(points, 48);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + time * rotSpeed;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} rotation={rotation}>
      <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.18} side={THREE.DoubleSide} />
    </mesh>
  );
};

// Wine spill that revolves around a glass in a big swooping loop
// Based on the user's sketch: wine flows out of the rim, makes a large
// sweeping arc around the glass, and loops back continuously
const RevolvingSpill = ({ glassX, glassY, direction, color, count, loopRadius, speed }) => {
  const pointsRef = useRef();

  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colorsArr = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const c = new THREE.Color(color);
    for (let i = 0; i < count; i++) {
      // Greater variation for higher contrast
      const variation = 0.5 + Math.random() * 0.9;
      cols[i * 3] = c.r * variation;
      cols[i * 3 + 1] = c.g * variation;
      cols[i * 3 + 2] = c.b * variation;
    }
    return cols;
  }, [count, color]);

  // Random thickness offsets per particle for ribbon width
  const offsets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        xOff: (Math.random() - 0.5) * 1.0,
        yOff: (Math.random() - 0.5) * 0.7,
        zOff: (Math.random() - 0.5) * 1.0,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Each particle is at a different position along the loop
      const t = ((i / count) + time * speed) % 1;
      const angle = t * Math.PI * 2 * direction;

      // The swooping loop path:
      // - Horizontally: large circle around the glass center
      // - Vertically: rises up from the rim, swoops down below, comes back up
      const px = glassX + Math.cos(angle) * loopRadius;
      const py = glassY + 2.2 + Math.sin(angle) * 2.0 + Math.sin(angle * 2) * 0.8;
      const pz = Math.sin(angle) * (loopRadius * 0.6);

      posArray[i * 3] = px + offsets[i].xOff;
      posArray[i * 3 + 1] = py + offsets[i].yOff;
      posArray[i * 3 + 2] = pz + offsets[i].zOff;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colorsArr} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Connecting spill stream between the two glasses
const ConnectingSpill = () => {
  const pointsRef = useRef();
  const count = 250;

  const positions = useMemo(() => new Float32Array(count * 3), []);
  const offsets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        xOff: (Math.random() - 0.5) * 0.6,
        yOff: (Math.random() - 0.5) * 0.5,
        zOff: (Math.random() - 0.5) * 0.7,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const t = ((i / count) + time * 0.15) % 1;
      // Smooth arc from left glass to right glass
      const x = -1.8 + t * 3.6;
      const y = 1.0 + Math.sin(t * Math.PI) * 2.8;
      const z = Math.sin(t * Math.PI * 2) * 0.5;

      posArray[i * 3] = x + offsets[i].xOff;
      posArray[i * 3 + 1] = y + offsets[i].yOff + Math.sin(time + i * 0.1) * 0.05;
      posArray[i * 3 + 2] = z + offsets[i].zOff;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#c41818"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Bubble particles rising from the glasses
const BubbleParticles = () => {
  const pointsRef = useRef();
  const particleCount = 250;

  const initialPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const glassX = Math.random() > 0.5 ? 1.8 : -1.8;
      pos[i * 3] = glassX + (Math.random() - 0.5) * 1.2;
      pos[i * 3 + 1] = -1 + Math.random() * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }
    return pos;
  }, []);

  const positions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += 0.01;
      posArray[i * 3] += Math.sin(time * 1.5 + i * 0.6) * 0.002;
      posArray[i * 3 + 2] += Math.cos(time * 1.2 + i * 0.4) * 0.002;
      if (posArray[i * 3 + 1] > 6) {
        const glassX = Math.random() > 0.5 ? 1.8 : -1.8;
        posArray[i * 3] = glassX + (Math.random() - 0.5) * 0.8;
        posArray[i * 3 + 1] = -1 + Math.random();
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#d4af37"
        transparent
        opacity={0.55}
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
  const particleCount = 300;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      color.setHSL(0.12 + Math.random() * 0.06, 0.85, 0.5 + Math.random() * 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.3} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
};

// Side particles — fill the dead space on the far left and far right
// Floating wine-themed particles (mix of gold shimmer and deep red droplets)
const SideParticles = () => {
  const pointsRef = useRef();
  const particleCount = 300;

  const initialPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Place on far left or far right sides
      const side = Math.random() > 0.5 ? 1 : -1;
      pos[i * 3] = side * (5 + Math.random() * 8);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const positions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);
  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      // Mix of gold and wine red
      if (Math.random() > 0.4) {
        color.setHSL(0.12, 0.85, 0.5 + Math.random() * 0.4);
      } else {
        color.setHSL(0.0, 0.9, 0.2 + Math.random() * 0.2);
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
      // Gentle floating drift
      posArray[i * 3 + 1] += Math.sin(time * 0.3 + i * 0.2) * 0.003;
      posArray[i * 3] += Math.cos(time * 0.2 + i * 0.1) * 0.002;
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
        size={0.08}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const AnimatedBgHero = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
        {/* Two wine glasses */}
        <WineGlass position={[-1.8, -1.5, 0]} rotation={[0, 0, 0.12]} rotSpeed={0.06} />
        <WineGlass position={[1.8, -1.5, 0]} rotation={[0, 0.5, -0.12]} rotSpeed={-0.06} />

        {/* Left glass: wine spill revolving — wider loops and more spread */}
        <RevolvingSpill glassX={-1.8} glassY={-1.5} direction={1} color="#6B0000" count={600} loopRadius={3.2} speed={0.07} />
        <RevolvingSpill glassX={-1.8} glassY={-1.5} direction={1} color="#900000" count={350} loopRadius={2.5} speed={0.09} />
        <RevolvingSpill glassX={-1.8} glassY={-1.5} direction={1} color="#d41010" count={200} loopRadius={1.8} speed={0.11} />

        {/* Right glass: wine spill revolving — wider loops and more spread */}
        <RevolvingSpill glassX={1.8} glassY={-1.5} direction={-1} color="#6B0000" count={600} loopRadius={3.2} speed={0.07} />
        <RevolvingSpill glassX={1.8} glassY={-1.5} direction={-1} color="#900000" count={350} loopRadius={2.5} speed={0.09} />
        <RevolvingSpill glassX={1.8} glassY={-1.5} direction={-1} color="#d41010" count={200} loopRadius={1.8} speed={0.11} />

        {/* Connecting spill stream between glasses */}
        <ConnectingSpill />

        {/* Side particles to fill dead space */}
        <SideParticles />

        {/* Bubble particles */}
        <BubbleParticles />

        {/* Ambient dust */}
        <AmbientDust />
      </Canvas>
    </div>
  );
};

export default AnimatedBgHero;
