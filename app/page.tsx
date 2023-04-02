'use client';

import HomeCSS from '@/styles/Home.module.css';
import { Canvas } from '@react-three/fiber';

import LightBulb from '../components/threed/LightBulb';
import Floor from '../components/threed/Floor';
import Box from '../components/threed/Box';
import OrbitControls from '../components/threed/OrbitControls';
import Draggable from '../components/threed/Draggable';

import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <div className={HomeCSS.scene}>
        <Canvas
          shadows
          className={HomeCSS.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color={'white'} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />

          <Draggable>
            <Suspense fallback={null}>
              <Box rotateX={3} rotateY={0.2} size={100} />
            </Suspense>
          </Draggable>

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
