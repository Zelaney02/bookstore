import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial, TextureLoader } from 'three';
import { useRouter } from 'next/navigation';

function Box(props) {
  const router = useRouter();
  const mesh = useRef();
  const [stopSpinning, setStopSpinning] = useState(false);

  useFrame(() => {
    if (!stopSpinning)
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const texture = useLoader(TextureLoader, '/author1.jpg');
  const texture2 = useLoader(TextureLoader, '/author2.jpg');
  const texture3 = useLoader(TextureLoader, '/author3.jpg');
  const texture4 = useLoader(TextureLoader, '/author4.jpg');
  const texture5 = useLoader(TextureLoader, '/author5.jpg');
  const texture6 = useLoader(TextureLoader, '/author6.jpg');

  const onClickHandler = (event) => {
    if (event.face.materialIndex >= 0)
      router.replace('/products/' + (event.face.materialIndex + 1));
  };

  return (
    <mesh
      onClick={(event) => onClickHandler(event)}
      onPointerOver={() => setStopSpinning(true)}
      onPointerLeave={() => setStopSpinning(false)}
      {...props}
      recieveShadow
      castShadow
      ref={mesh}
    >
      <boxGeometry attach="geometry" args={[8, 8, 8]} />
      <meshBasicMaterial
        userData="author1"
        map={texture}
        attach="material-0"
        color={'white'}
      />
      <meshBasicMaterial
        userData="author2"
        map={texture2}
        attach="material-1"
        color={'white'}
      />
      <meshBasicMaterial
        userData="author3"
        map={texture3}
        attach="material-2"
        color={'white'}
      />
      <meshBasicMaterial
        userData="author4"
        map={texture4}
        attach="material-3"
        color={'white'}
      />
      <meshBasicMaterial
        userData="author5"
        map={texture5}
        attach="material-4"
        color={'white'}
      />
      <meshBasicMaterial
        userData="author6"
        map={texture6}
        attach="material-5"
        color={'white'}
      />
    </mesh>
  );
}

export default Box;
