import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

library.add(fab);
library.add(far);

interface EmailJSForm {
    name: string;
    email: string;
    message: string; 
}

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();

        if (form.current) {
            emailjs
            .sendForm('service_pvlbah6', 'template_ebh3336', form.current, '2V5w3lUkMrACpdTnn')
            .then(
                () => {
                    setFormStatus('Email sent successfully!'); 
                },
                (error) => {
                    setFormStatus('Error sending email. Please try again.');
                },
            );
        }
    };

    return (
        <section id="contact">
            <h2>Get in touch!</h2>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <label className="contact-label" htmlFor="name">Name:</label>
                <input className="contact-input" type="text" id="name" name="name" required />
                <label className="contact-label" htmlFor="email">Email:</label>
                <input className="contact-input" type="email" id="email" name="email" required />
                <label className="contact-label" htmlFor="message">Message:</label>
                <textarea className="contact-input" id="message" name="message" required />
                <button className="contact-button" type="submit">Submit</button> 
            </form>
            <p className="form-status">{formStatus}</p>
            <footer>
                <a className="contact-link" href="https://github.com/macleann">
                    <FontAwesomeIcon icon={['fab', 'github']} className="contact-icon" />
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/neil-maclean">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="contact-icon" />
                </a>
                <a className="contact-link" href="https://www.instagram.com/_neilmaclean">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="contact-icon" />   
                </a>
                <a className="contact-link" href="mailto:nbmac13@gmail.com">
                    <FontAwesomeIcon icon={['far', 'envelope']} className="contact-icon" />
                </a>
            </footer>
        </section>
    );
};