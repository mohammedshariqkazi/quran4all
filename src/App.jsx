import React from 'react';
import './App.css';
import './styles/styles.css';
import Script from './scripts/script.jsx';
import logo from '/Read_Quran.svg'; // Import the SVG logo

function App() {
  return (
    <div className="container">
      <div className="top-header">
      
        <img src={logo} alt="Read Quran Logo" className="logo" /> {/* Use the imported SVG logo */}
        <div className="chapter-selector" id="chapter-selector">
          <Script />
        </div>
      </div>
       </div>
  );
}

export default App;
