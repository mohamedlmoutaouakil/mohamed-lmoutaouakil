import React from 'react';
import '../styles/About.css';
import photo from '../figures/photo.jpg';
  
function About() {
    return (
        <div className="container text-center" id="about">
            <h1 className="about-header my-5">About</h1>
            <div className="avatar mx-auto mb-3">
                <img src={photo} className="personal-photo" alt="Mohamed Lmoutaouakil" />
            </div>
            <div className="headlines mb-3">
                <h2>Mohamed Lmoutaouakil</h2>
                <h3>Web Developer, Software Developer & Data Scientist</h3>
            </div>
            <div className="about-section">
                <p>
                    Hi there, I am Mohamed Lmoutaouakil a Software Engineer from Morocco, I graduated from
                    Ecole Mohammadia d'Ingenieurs.
                </p>
            </div>
        </div>
    );
}

export default About;