import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Typewriter } from "react-simple-typewriter";
import * as THREE from "three";

// Component for a rotating planet
// function Planet({ position, speed, size, color }) {
//   const planetRef = useRef();

//   useFrame(({ clock }) => {
//     planetRef.current.position.x =
//       position[0] * Math.cos(clock.getElapsedTime() * speed);
//     planetRef.current.position.z =
//       position[0] * Math.sin(clock.getElapsedTime() * speed);
//   });

//   return (
//     <mesh ref={planetRef} position={position}>
//       <sphereGeometry args={[size, 32, 32]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// Extend Three.js plane for text labels
extend({ PlaneGeometry: THREE.PlaneGeometry });

function TextLabel({ text }) {
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
}

function Planet({ position, speed, size, color, name }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    groupRef.current.position.x = position[0] * Math.cos(elapsed);
    groupRef.current.position.z = position[0] * Math.sin(elapsed);
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Planet Sphere */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Text Label (Inside the same group, so it moves with the planet) */}
      <TextLabel text={name} />
    </group>
  );
}


export default function Earth() {
  return (
    <div className="canvas-container">
      {/* Sliding Text */}
      <div className="overlay-text">
              <h1>
                <Typewriter
                  words={["Where are we?"]}
                  loop={1} // Run once
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

        {/* Three orbiting planets */}
        <Planet position={[2, 0, 0]} speed={0.5} size={0.5} color="grey" name="Mercury"/>
        <Planet position={[3, 0, 0]} speed={0.3} size={0.6} color="orange" name="Venus"/>
        <Planet position={[4, 0, 0]} speed={0.2} size={0.7} color="blue" name="Earth"/>
      </Canvas>
    </div>
  );
}
