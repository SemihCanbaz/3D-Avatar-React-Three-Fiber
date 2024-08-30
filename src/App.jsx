import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./App.css";
import logo from "./assets/logo.jpg";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animateLogo, setAnimateLogo] = useState(false);

  const handleStart = () => {
    setAnimateLogo(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 3000); // Animasyon süresine eşit süre (3s)
  };

  return (
    <>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <img
              src={logo}
              alt="Logo"
              className={`logo ${animateLogo ? "animate" : ""}`}
            />
            <h1 className="fade-in">WELCOME</h1>
            <p className="fade-in">
              This version highlights the project's purpose and provides a more
              engaging call to action. It emphasizes the immersive experience
              and the technologies used, making it appealing to modern web
              developers and users interested in interactive projects.
            </p>
            <button className="start-button fade-in" onClick={handleStart}>
              Let's Get Started
            </button>
          </div>
          <footer className="footer fade-in">
            <p>© 2024 Semih Canbaz / Software Developer</p>
          </footer>
        </div>
      )}
      {!showOverlay && (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      )}
    </>
  );
}

export default App;
