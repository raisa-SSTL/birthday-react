// import logo from './logo.svg';
// import './App.css';
import "./styles.css";
import Background from './file';
import React, { useState } from "react";
import Earth from "./earth";
import Chat from "./chat";
import Hbd from "./hbd";

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edited <code>src/App.js</code> and saveed to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Background/>;
//     </div>
//   );
// }

export default function App() {

  const [page, setPage] = useState("home");

  const handleThumbsUpClick = () => {
    setPage("earth"); 
  };

  const handleEarthClick = () => {
    setPage("chat");
  };

  const handleNextClick = () => {
    setPage("hbd");
  };

  return (
    <div>
      {page === "home" && <Background onThumbsUpClick={handleThumbsUpClick} />}
      {page === "earth" && <Earth onEarthClick={handleEarthClick} />}
      {page === "chat" && <Chat onNextClick={handleNextClick} />}
      {page === "hbd" && <Hbd />}
    </div>
  );
}

// export default App;
