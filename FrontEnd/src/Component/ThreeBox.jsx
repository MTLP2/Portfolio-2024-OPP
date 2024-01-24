import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBox() {
  // Créer une référence pour attacher le canvas
  const canvasRef = useRef();

  useEffect(() => {
    // Scène
    const scene = new THREE.Scene();

    // Géométrie
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Tailles
    const sizes = {
      width: 800,
      height: 600
    };

    // Caméra
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    });
    renderer.setSize(sizes.width, sizes.height);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      // Mise à jour des objets
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      // Rendu
      renderer.render(scene, camera);
    };

    animate();

    // Nettoyage lors du démontage du composant
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className='webgl'></canvas>
  );
}
