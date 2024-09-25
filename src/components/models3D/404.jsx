// "use client";

// import { useEffect } from "react";
// import * as THREE from "three";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// const NotFoundModel = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       let scene, camera, renderer, textMesh, font;
//       let mouseX = 0,
//         mouseY = 0;
//       const windowHalfX = window.innerWidth / 2;
//       const windowHalfY = window.innerHeight / 2;

//       const init = () => {
//         scene = new THREE.Scene();
//         camera = new THREE.PerspectiveCamera(
//           75,
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000
//         );

//         renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         // Load a font and create the "404" text geometry
//         const loader = new FontLoader();
//         loader.load("/path-to-your-font.json", (loadedFont) => {
//           font = loadedFont;

//           const textGeometry = new TextGeometry("404", {
//             font: font,
//             size: 1,
//             height: 0.2,
//             curveSegments: 12,
//           });

//           const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//           textMesh = new THREE.Mesh(textGeometry, material);
//           scene.add(textMesh);

//           textMesh.position.set(-1.5, 0, 0);
//           camera.position.z = 5;
//         });
//       };

//       const animate = () => {
//         requestAnimationFrame(animate);

//         if (textMesh) {
//           textMesh.rotation.x += 0.01;
//           textMesh.rotation.y += 0.01;

//           // Apply the mouse rotation effect
//           textMesh.rotation.x += (mouseY / window.innerHeight) * 2;
//           textMesh.rotation.y += (mouseX / window.innerWidth) * 2;
//         }

//         renderer.render(scene, camera);
//       };

//       // Handle mouse movement to rotate the 3D "404" text
//       const onMouseMove = (event) => {
//         mouseX = event.clientX - windowHalfX;
//         mouseY = event.clientY - windowHalfY;
//       };

//       const handleResize = () => {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//       };

//       init();
//       animate();

//       window.addEventListener("resize", handleResize);
//       window.addEventListener("mousemove", onMouseMove);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//         window.removeEventListener("mousemove", onMouseMove);
//         document.body.removeChild(renderer.domElement);
//       };
//     }
//   }, []);

//   return null;
// };

// export default NotFoundModel;
