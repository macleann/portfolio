import React from 'react';
import './Projects.css';
import { RenderProject } from './RenderProject';
import { ProjectsList } from './ProjectsList';

export const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <RenderProject projects={ProjectsList} />
        </section>
    );
};