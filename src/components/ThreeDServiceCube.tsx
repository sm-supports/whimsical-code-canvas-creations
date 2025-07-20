import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

interface ThreeDServiceCubeProps {
  color?: string;
  label?: string;
}

export default function ThreeDServiceCube({ color = '#40E0D0', label }: ThreeDServiceCubeProps) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas style={{ background: 'transparent' }} camera={{ position: [2, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
      {label && (
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.85)',
          padding: '8px 20px',
          borderRadius: 12,
          fontWeight: 600,
          fontSize: 18,
          color: '#222',
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
        }}>
          {label}
        </div>
      )}
    </div>
  );
} 