import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Typewriter } from "react-simple-typewriter";
import * as THREE from "three";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Extend Three.js plane for text labels
// extend({ PlaneGeometry: THREE.PlaneGeometry });

// function TextLabel({ text }) {
//   const texture = useMemo(() => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");

//     canvas.width = 256;
//     canvas.height = 128;

//     context.fillStyle = "white"; // Text color
//     context.font = "40px Arial";
//     context.textAlign = "center";
//     context.fillText(text, canvas.width / 2, canvas.height / 2);

//     const textTexture = new THREE.CanvasTexture(canvas);
//     return textTexture;
//   }, [text]);

//   return (
//     <mesh position={[0, 0.6, 0.6]}> {/* Text is positioned slightly above the planet */}
//       <planeGeometry args={[1, 0.5]} />
//       <meshBasicMaterial map={texture} transparent />
//     </mesh>
//   );
// }

// function Planet({ position, speed, size, color, name, onPlanetClick }) {
//   const groupRef = useRef();

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime() * speed;
//     groupRef.current.position.x = position[0] * Math.cos(elapsed);
//     groupRef.current.position.z = position[0] * Math.sin(elapsed);
//   });

//   const handlePlanetClick = () => {
//     if (name === "Earth") {
//       // toast(`Earth!`);
//       onPlanetClick();
//     } else {
//       toast(`lmaooo don't kid yourself 😆`); // Show toast for Mercury and Venus
//     }
//   };

//   return (
//     <group ref={groupRef} position={position}>
//       {/* Planet Sphere */}
//       <mesh onPointerDown={handlePlanetClick}>
//         <sphereGeometry args={[size, 32, 32]} />
//         <meshStandardMaterial color={color} />
//       </mesh>

//       {/* Text Label (Inside the same group, so it moves with the planet) */}
//       <TextLabel text={name} />
//     </group>
//   );
// }


// export default function Earth({onEarthClick}) {

//   return (
//     <div className="canvas-container">
//       {/* Sliding Text */}
//       <div className="overlay-text">
//               <h1>
//                 <Typewriter
//                   words={["Where are we?"]}
//                   loop={1} // Run once
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   cursor
//                 />
//               </h1>
//       </div>
//        {/* 3D Scene */}
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />

//         {/* Three orbiting planets */}
//         <Planet position={[2, 0, 0]} speed={0.5} size={0.5} color="grey" name="Mercury"/>
//         <Planet position={[3, 0, 0]} speed={0.3} size={0.6} color="orange" name="Venus"/>
//         <Planet position={[4, 0, 0]} speed={0.2} size={0.7} color="blue" name="Earth" onPlanetClick={onEarthClick} />
//       </Canvas>
//       <ToastContainer />
//     </div>
//   );
// }

// ---------AAAAAAAAAAA-------------

// Function to create a circular orbit path using BufferGeometry
// function OrbitPath({ radius, tiltX = 0, tiltY = 0 }) {
//   const lineRef = useRef();

//   // Generate circle points
//   const points = useMemo(() => {
//     const curve = new THREE.EllipseCurve(
//       0, 0, // Center X, Center Y
//       radius, radius, // X Radius, Y Radius
//       0, 2 * Math.PI, // Start and End Angle
//       false, // Clockwise
//       0 // Rotation
//     );

//     const points = curve.getPoints(100).map((p) => new THREE.Vector3(p.x, 0, p.y));
//     return new THREE.BufferGeometry().setFromPoints(points);
//   }, [radius]);

//   return (
//     <line ref={lineRef} rotation={[tiltX, tiltY, 0]}>
//       <bufferGeometry attach="geometry" {...points} />
//       <lineBasicMaterial attach="material" color="white" linewidth={1} />
//     </line>
//   );
// }

// // Function to create a planet that orbits around the center
// function Planet({ position, speed, size, color, name, onPlanetClick }) {
//   const groupRef = useRef();

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime() * speed;
//     groupRef.current.position.x = position[0] * Math.cos(elapsed);
//     groupRef.current.position.z = position[0] * Math.sin(elapsed);
//   });

//   const handlePlanetClick = () => {
//     if (name === "Earth") {
//       onPlanetClick();
//     } else {
//       toast(`lmaooo don't kid yourself 😆`);
//     }
//   };

//   return (
//     <group ref={groupRef} position={position}>
//       {/* Planet Sphere */}
//       <mesh onPointerDown={handlePlanetClick}>
//         <sphereGeometry args={[size, 32, 32]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     </group>
//   );
// }

// // Main Earth Component
// export default function Earth({ onEarthClick }) {
//   return (
//     <div className="canvas-container">
//       {/* Sliding Text */}
//       <div className="overlay-text">
//         <h1>
//           <Typewriter
//             words={["Where are we?"]}
//             loop={1}
//             typeSpeed={100}
//             deleteSpeed={50}
//             cursor
//           />
//         </h1>
//       </div>

//       {/* 3D Scene */}
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />

//         {/* Orbits using BufferGeometry */}
//         <OrbitPath radius={2} />
//         <OrbitPath radius={3} tiltX={0.1} />
//         <OrbitPath radius={4} tiltX={0.1}/>

//         {/* Planets */}
//         <Planet position={[2, 0, 0]} speed={0.5} size={0.5} color="grey" name="Mercury" />
//         <Planet position={[3, 0, 0]} speed={0.3} size={0.6} color="orange" name="Venus" />
//         <Planet position={[4, 0, 0]} speed={0.2} size={0.7} color="blue" name="Earth" onPlanetClick={onEarthClick} />
//       </Canvas>
//       <ToastContainer />
//     </div>
//   );
// }

// ---------BBBBBBBBBB-------------

// Function to create a circular orbit path using BufferGeometry
function OrbitPath({ radius, tiltX = 0, tiltY = 0 }) {
  const lineRef = useRef();

  // Generate circle points
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0, // Center X, Center Y
      radius, radius, // X Radius, Y Radius
      0, 2 * Math.PI, // Start and End Angle
      false, // Clockwise
      0 // Rotation
    );

    const points = curve.getPoints(100).map((p) => new THREE.Vector3(p.x, 0, p.y));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  return (
    <line ref={lineRef} rotation={[tiltX, tiltY, 0]}>
      <bufferGeometry attach="geometry" {...points} />
      <lineBasicMaterial attach="material" color="white" linewidth={1} />
    </line>
  );
}

// Function to create a planet that orbits around the center
function Planet({ position, speed, size, color, name, onPlanetClick }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    groupRef.current.position.x = position[0] * Math.cos(elapsed);
    groupRef.current.position.z = position[0] * Math.sin(elapsed);
  });

  const handlePlanetClick = () => {
    if (name === "Earth") {
      onPlanetClick();
    } else {
      toast(`lmaooo don't kid yourself 😆`);
    }
  };

  // Function to create a text label for the planet
  const TextLabel = ({ text }) => {
    const texture = useMemo(() => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = 256;
      canvas.height = 128;

      context.fillStyle = "white"; // Text color
      context.font = "40px Arial";
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const textTexture = new THREE.CanvasTexture(canvas);
      return textTexture;
    }, [text]);

    return (
      <mesh position={[0, 0.6, 0.6]}> {/* Text is positioned slightly above the planet */}
        <planeGeometry args={[1, 0.5]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    );
  };

  return (
    <group ref={groupRef} position={position}>
      {/* Planet Sphere */}
      <mesh onPointerDown={handlePlanetClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Text Label (Inside the same group, so it moves with the planet) */}
      <TextLabel text={name} />
    </group>
  );
}

// Main Earth Component
export default function Earth({ onEarthClick }) {
  return (
    <div className="canvas-container">
      {/* Sliding Text */}
      <div className="overlay-text">
        <h1>
          <Typewriter
            words={["Where are we?"]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            cursor
          />
        </h1>
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Orbits using BufferGeometry */}
        <OrbitPath radius={2} tiltX={0.1}/>
        <OrbitPath radius={3} tiltX={0.1} />
        <OrbitPath radius={4} tiltX={0.1} />
        <OrbitPath radius={5} tiltX={0.1} />

        {/* Planets */}
        <Planet position={[2, 0, 0]} speed={0.5} size={0.5} color="grey" name="Mercury" />
        <Planet position={[3, 0, 0]} speed={0.3} size={0.6} color="orange" name="Venus" />
        <Planet position={[4, 0, 0]} speed={0.2} size={0.7} color="blue" name="Earth" onPlanetClick={onEarthClick} />
        <Planet position={[5, 0, 0]} speed={0.1} size={0.8} color="red" name="Mars" />
      </Canvas>
      <ToastContainer />
    </div>
  );
}