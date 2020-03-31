import React from 'react';
import '../styles/App.css';
import About from './About';
import Projects from './Projects'
import Contact from './Contact'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;