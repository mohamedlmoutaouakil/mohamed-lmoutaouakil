import React from 'react';
import linkedLogo from '../figures/linkedin-logo.svg';
import gmailLogo from '../figures/gmail-logo.png';
import githubLogo from '../figures/github-logo.svg';

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
        <div className="h-100" id="contact-section">
            <h1 className="text-center my-5" >Contact</h1>
            <div className="d-flex text-center my-5">
                <ul className="list-inline mx-auto my-5">
                    <ContactButton href="https://www.linkedin.com/in/mohamed-lmoutaouakil" logo={linkedLogo} name ="linkedin"/>
                    <ContactButton href="mailto:lmoutaouakilmohamed@gmail.com" logo={gmailLogo} name ="gmail"/>
                    <ContactButton href="https://github.com/mohamedlmoutaouakil" logo={githubLogo} name ="github"/>
                </ul>
            </div>
        </div>
    );
}

export default Contact;