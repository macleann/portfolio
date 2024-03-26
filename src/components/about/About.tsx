import React from 'react';
import './About.css';

export const About: React.FC = () => {
    return (
        <section id="about">
            <h2>"Anything worth doing, is worth doing right."</h2>
            <p>
            As a passionate full stack web developer based in Nashville, TN, I bring a unique blend of creativity and technical expertise to every project I undertake. My journey into the world of web development began with an intensive six-month bootcamp at Nashville Software School, where I honed my skills in JavaScript, HTML, CSS, React for front end development, and Python with Django for back end development. Since then, I've continued to expand my knowledge and expertise through self-directed learning and hands-on experience.

            With a keen eye for detail and a commitment to excellence, I specialize in crafting dynamic and user-friendly web applications that seamlessly blend form and function. From sleek and responsive user interfaces to robust backend systems, I thrive on transforming ideas into reality through code.

            I've also obtained my AZ-900 certification in October 2023, adding to my expertise and ensuring a solid foundation in cloud computing principles. Additionally, I leverage Jenkins for backend CI/CD pipelines, GitHub Actions for frontend CI/CD workflows, and utilize the Cypress testing framework on all of my projects to ensure quality and reliability.

            Outside of coding, I co-own and operate Like You Mean It Records, a small independent record label dedicated to championing music we believe in from artists we care about. This unique blend of entrepreneurial spirit and creative passion fuels my drive to innovate and push boundaries in both the tech and music industries.

            If you're looking for a versatile and driven web developer with a knack for turning ideas into reality, look no further. Let's collaborate and bring your vision to life!
            </p>
            <div>
                <iframe src="https://open.spotify.com/embed/album/44cFXRKSFOPuoe2qIPn8sm?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </section>
    );
};