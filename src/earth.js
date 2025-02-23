import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Typewriter } from "react-simple-typewriter";

// Component for a rotating planet
function Planet({ position, speed, size, color }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    planetRef.current.position.x =
      position[0] * Math.cos(clock.getElapsedTime() * speed);
    planetRef.current.position.z =
      position[0] * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={planetRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
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
        <Planet position={[2, 0, 0]} speed={0.5} size={0.5} color="grey" />
        <Planet position={[3, 0, 0]} speed={0.3} size={0.6} color="orange" />
        <Planet position={[4, 0, 0]} speed={0.2} size={0.7} color="blue" />
      </Canvas>
    </div>
  );
}
