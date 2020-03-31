import React from 'react';
import linkedLogo from '../figures/linkedin-logo.svg';
import gmailLogo from '../figures/gmail-logo.png';
import githubLogo from '../figures/github-logo.svg';
import '../styles/Contact.css';

function ContactButton(props) {
    return (
        <li className="list-inline-item justify-content-center m-5">
            <a href={props.href}>
                <img src={props.logo} width="130" alt={props.name}/>
            </a>
        </li>
    );
}

function Contact() {
    return (
        <section 
            className="text-center dark-bg pb-4" 
            id="contact"
        >
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="110" width="100%">
                <path d="M0 0 L50 100 L100 0 Z" fill="white" ></path>
            </svg>
            <h1 className="text-center py-5">Contact</h1>
            <div className="text-center py-5">
                <ul className="list-inline mx-auto mb-5 pb-5">
                    <ContactButton href="https://www.linkedin.com/in/mohamed-lmoutaouakil" logo={linkedLogo} name ="linkedin"/>
                    <ContactButton href="mailto:lmoutaouakilmohamed@gmail.com" logo={gmailLogo} name ="gmail"/>
                    <ContactButton href="https://github.com/mohamedlmoutaouakil" logo={githubLogo} name ="github"/>
                </ul>
            </div>
        </section>
    );
}

export default Contact;