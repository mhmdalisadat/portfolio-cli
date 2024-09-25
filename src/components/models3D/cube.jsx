"use client";

import { useEffect } from "react";
import * as THREE from "three";

const Cube = () => {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      let scene, camera, renderer, cube;

      const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
      };

      // Animation function to rotate the cube
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      // Initialize and start animation
      init();
      animate();

      window.addEventListener("resize", handleResize);

      // Cleanup function to remove event listeners and renderer
      return () => {
        window.removeEventListener("resize", handleResize);
        document.body.removeChild(renderer.domElement);
      };
    }
  }, []);

  return null;
};

export default Cube;
