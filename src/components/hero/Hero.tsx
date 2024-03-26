import React from 'react';
import './Hero.css';
import heroImage from '../../images/me_512.png';

export const Hero: React.FC = () => {
    return (
        <section id="hero">
            <h1>Hi, my name is Neil MacLean and this is my website</h1>
            <p>i make things sometimes</p>
            <img src={heroImage} />
            <button onClick={() => {
                window.open('https://drive.google.com/file/d/1clsgHpRT8uiRUKKQA3_O6teAUOOzpHUb/view?usp=sharing');
            }}>Download Resume</button>
        </section>
    );
};