// import logo from './logo.svg';
// import './App.css';
import "./styles.css";
import Background from './file';
import React, { useState } from "react";
import Earth from "./earth";

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

  const [earthPage, setEarthPage] = useState(false);

  const handleThumbsUpClick = () => {
    setEarthPage(true); // Show the new page when the thumbs-up button is clicked
  };

  return (
    <div>
      {!earthPage ? (
        <Background onThumbsUpClick={handleThumbsUpClick} />
      ) : (
        <Earth />
      )}
    </div>
  );
}

// export default App;
