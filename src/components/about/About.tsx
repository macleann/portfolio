import React from 'react';
import './About.css';
import { AboutAnimations } from './AboutAnimations';

export const About: React.FC = () => {
    const isMobile: boolean = window.innerWidth <= 768 ? true : false;
    const deviceDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    AboutAnimations();

    return (
        <section id="about">
            <svg
                width={deviceDimensions.width}
                height={deviceDimensions.height}
                viewBox="0 0 100 100"
                className="circles"
            >
                <circle id="black-circle" cx="30" cy="30" r="25" fill="#1a1a1a"/>
                <circle id="green-circle" cx="25" cy="25" r="23" fill="#6AA84F"/>
            </svg>
            <div className="about-text">
                <h2>"Anything worth doing is worth doing right."</h2>
                <h3>-Hunter S. Thompson</h3>
                <p>
                As a passionate full stack web developer based in Nashville, TN, I bring a unique blend of creativity and technical expertise to every project I undertake. My journey into the world of web development began with an intensive six-month bootcamp at Nashville Software School, where I honed my skills in JavaScript, HTML, CSS, React for front end development, and Python with Django for back end development. Since then, I've continued to expand my knowledge and expertise through self-directed learning and hands-on experience.
                </p>
                <p>
                With a keen eye for detail and a commitment to excellence, I specialize in crafting dynamic and user-friendly web applications that seamlessly blend form and function. From sleek and responsive user interfaces to robust backend systems, I thrive on transforming ideas into reality through code.
                </p>
                <p>
                I've also obtained my AZ-900 certification in October 2023, adding to my expertise and ensuring a solid foundation in cloud computing principles. Additionally, I leverage Jenkins for backend CI/CD pipelines, GitHub Actions for frontend CI/CD workflows, and utilize the Cypress testing framework on all of my projects to ensure quality and reliability.
                </p>
                <p>
                Outside of coding, I co-own and operate <a href="https://likeyoumeanitrecords.com">Like You Mean It Records</a>, a small independent record label dedicated to championing music we believe in from artists we care about. In 2021, I wrote and recorded an album <i>Euneirophrenia</i> under the name Home Visions{isMobile ? ", which you can find below!" : " (right)."} This unique blend of entrepreneurial spirit and creative passion fuels my drive to innovate and push boundaries in both the tech and music industries.
                </p>
                <p>
                If you're looking for a versatile and driven web developer with a knack for turning ideas into reality, look no further. Let's collaborate and bring your vision to life!
                </p>
            </div>
            <iframe title="spotify-embed" src="https://open.spotify.com/embed/album/44cFXRKSFOPuoe2qIPn8sm?utm_source=generator" width="50%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </section>
    );
};