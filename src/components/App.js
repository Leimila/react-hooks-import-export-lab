import React from "react";
import NavBar from "./NavBar"; // Import Navbar component
import Home from "./Home";     // Import Home component
import About from "./About";   // Import About component

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Home />    
      <About />   
    </div>
  );
}

export default App;
