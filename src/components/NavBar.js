import React, { Component } from "react";
import logo from '../figures/MLshape.png';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

scrollToTop = () => {
    scroll.scrollToTop();
};

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top" id="navbar">
        <a class="navbar-brand" href="#">
            <img
                src={logo}
                className="nav-logo"
                height="30"
                alt="Logo."
                onClick={this.scrollToTop}
            />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link
                activeClass="active"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >
                About
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link
                activeClass="active"
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link
                activeClass="active"
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}