import React from 'react';
import logo from '../figures/MLshape.png';

function NavBarLink(props){
    return (
      <li key={props.value} className="nav-item" >
        <a href={props.href} className="nav-link">
          {props.value}
        </a>
      </li>
    );
  }
  
  function NavBarIcon(props){
    return (
      <a href={props.href} className="navbar-brand">
        <img src={props.src} className="navbar-logo" height="30" alt="logo" />
      </a>
    );
  }
  
  function MyNavBar(){
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <NavBarIcon href="/" src={logo} />
        <ul className="navbar-nav">
          <NavBarLink href="#about" value="About" />
          <NavBarLink href="#projects" value="Projects" />
          <NavBarLink href="#contact" value="Contact" />
        </ul>
      </nav>
    );
  }

  export default MyNavBar;