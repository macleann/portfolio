import React from 'react';
import './Projects.css';

export const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="grid">
                <a href="link-to-project-1">
                    <img src="image-1.jpg" alt="Project 1" />
                </a>
                <a href="link-to-project-2">
                    <img src="image-2.jpg" alt="Project 2" />
                </a>
                <a href="link-to-project-3">
                    <img src="image-3.jpg" alt="Project 3" />
                </a>
                <a href="link-to-project-4">
                    <img src="image-4.jpg" alt="Project 4" />
                </a>
            </div>
        </section>
    );
};