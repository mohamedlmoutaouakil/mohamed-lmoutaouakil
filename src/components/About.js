import React from 'react';
import '../styles/About.css';
import photo from '../figures/photo.jpg';
  
function About() {
    return (
        <section 
            className="d-flex flex-column align-content-center text-center py-5" 
            id="about"
        >
            <div className="p-2 py-5 my-4">
                <div className="avatar mx-auto mb-3 mt-5">
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
        </section>
    );
}

export default About;