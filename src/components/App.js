import React from 'react';
import logo from '../figures/MLshape.png';
import '../styles/App.css';
import About from './About';
import Projects from './Projects'
import Contact from './Contact'
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch 
} from "react-router-dom";

function NavBarLink(props){
  return (
    <li key={props.value} className="nav-item" >
      <NavLink to={props.href} className="nav-link">
        {props.value}
      </NavLink>
    </li>
  );
}

function NavBarIcon(props){
  return (
    <NavLink to={props.href} className="navbar-brand">
      <img src={props.src} className="navbar-logo" height="30" alt="logo" />
    </NavLink>
  );
}

function NavBar(){
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <NavBarIcon href="/" src={logo} />
      <ul className="navbar-nav">
        <NavBarLink href="/about" value="About" />
        <NavBarLink href="/projects" value="Projects" />
        <NavBarLink href="/contact" value="Contact" />
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;