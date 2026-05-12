'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Greynab G — extruded 3D version of the brand logo
// (ring with magnifier handle + accent dot)
// Brief §7: ~4000 tris, brushed-metallic green, Fresnel,
// bevel ~5% of stroke width. Slow Z-axis idle rotation,
// hover-attract tilt up to 15° toward cursor.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function GMesh() {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Spring physics state for lag-bounce-swing
  const spring = useRef({
    rx: 0, ry: 0, vrx: 0, vry: 0,
    px: 0, py: 0, vx: 0, vy: 0,
  });

  // Build the ring geometry (extruded shape with hole)
  const ringGeometry = useMemo(() => {
    const ringShape = new THREE.Shape();
    ringShape.absarc(0, 0, 1.3, 0, Math.PI * 2, false);
    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.85, 0, Math.PI * 2, true);
    ringShape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(ringShape, {
      depth: 0.45,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.06,
      bevelSegments: 6,
      curveSegments: 64,
    });
    geo.center();
    return geo;
  }, []);

  // The stem (magnifier handle) — a rounded pill
  const stemGeometry = useMemo(() => {
    const sw = 1.3, sh = 0.32, r = 0.16;
    const stemShape = new THREE.Shape();
    stemShape.moveTo(-sw / 2 + r, -sh / 2);
    stemShape.lineTo(sw / 2 - r, -sh / 2);
    stemShape.absarc(sw / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
    stemShape.lineTo(-sw / 2 + r, sh / 2);
    stemShape.absarc(-sw / 2 + r, 0, r, Math.PI / 2, -Math.PI / 2, false);
    const geo = new THREE.ExtrudeGeometry(stemShape, {
      depth: 0.45,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.06,
      bevelSegments: 6,
      curveSegments: 32,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Spring physics — mouse-influenced rotation with lag
    const targetRx = mouse.y * 0.35 + Math.sin(t * 0.5) * 0.04;
    const targetRy = mouse.x * 0.5 + t * 0.12;

    spring.current.vrx = (spring.current.vrx + (targetRx - spring.current.rx) * 0.06) * 0.85;
    spring.current.vry = (spring.current.vry + (targetRy - spring.current.ry) * 0.06) * 0.85;
    spring.current.rx += spring.current.vrx;
    spring.current.ry += spring.current.vry;

    group.current.rotation.x = spring.current.rx;
    group.current.rotation.y = spring.current.ry;
    group.current.rotation.z = Math.sin(t * 0.4) * 0.04;

    // Subtle bob
    group.current.position.y = Math.sin(t * 0.7) * 0.15;
  });

  return (
    <group ref={group} scale={[1, 1, 1]}>
      {/* The ring */}
      <mesh geometry={ringGeometry}>
        <meshPhysicalMaterial
          color="#00B04C"
          metalness={0.35}
          roughness={0.22}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          emissive="#00B04C"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* The stem (magnifier handle) */}
      <mesh geometry={stemGeometry} position={[1.6, 0, 0]}>
        <meshPhysicalMaterial
          color="#00B04C"
          metalness={0.35}
          roughness={0.22}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          emissive="#00B04C"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* The accent dot — the glow */}
      <mesh position={[2.45, 0, 0]}>
        <sphereGeometry args={[0.32, 64, 64]} />
        <meshPhysicalMaterial
          color="#00FF6F"
          metalness={0.1}
          roughness={0.15}
          clearcoat={1.0}
          emissive="#00FF6F"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Soft halo ring around the dot */}
      <mesh position={[2.45, 0, 0.05]}>
        <ringGeometry args={[0.38, 0.6, 64]} />
        <meshBasicMaterial color="#00FF6F" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

interface Props {
  className?: string;
}

export default function GCharacter({ className = '' }: Props) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00FF6F" />
        <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#ffffff" />
        <directionalLight position={[0, 0, -8]} intensity={1.2} color="#00B04C" />
        <GMesh />
      </Canvas>
    </div>
  );
}
