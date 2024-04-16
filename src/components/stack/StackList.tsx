import azureIcon from '../../images/stackIcons/azure.svg';
import cypressIcon from '../../images/stackIcons/cypress.png';
import djangoIcon from '../../images/stackIcons/django.png';
import figmaIcon from '../../images/stackIcons/figma.png';
import gitIcon from '../../images/stackIcons/git.png';
import illustratorIcon from '../../images/stackIcons/illustrator.png';
import javascriptIcon from '../../images/stackIcons/javascript.png';
import jenkinsIcon from '../../images/stackIcons/jenkins.png';
import materialIcon from '../../images/stackIcons/material.png';
import openaiIcon from '../../images/stackIcons/openai.png';
import photoshopIcon from '../../images/stackIcons/photoshop.svg';
import postgresqlIcon from '../../images/stackIcons/postgresql.svg';
import pythonIcon from '../../images/stackIcons/python.png';
import reactIcon from '../../images/stackIcons/react.png';
import sassIcon from '../../images/stackIcons/sass.png';
import sqliteIcon from '../../images/stackIcons/sqlite.svg';
import tailwindIcon from '../../images/stackIcons/tailwind.png';
import typescriptIcon from '../../images/stackIcons/typescript.png';

interface IconData {
    src: string;
    alt: string;
    size: number;
}

const expandedIconSize: number = 25;

export const StackList: IconData[] = [
    { src: javascriptIcon, alt: "Javascript", size: expandedIconSize },
    { src: typescriptIcon, alt: "Typescript", size: expandedIconSize },
    { src: reactIcon, alt: "React", size: expandedIconSize },
    { src: pythonIcon, alt: "Python", size: expandedIconSize },
    { src: djangoIcon, alt: "Django", size: expandedIconSize },
    { src: sqliteIcon, alt: "SQLite", size: expandedIconSize },
    { src: postgresqlIcon, alt: "PostgreSQL", size: expandedIconSize },
    { src: gitIcon, alt: "Git", size: expandedIconSize },
    { src: azureIcon, alt: "Azure", size: expandedIconSize },
    { src: cypressIcon, alt: "Cypress", size: expandedIconSize },
    { src: jenkinsIcon, alt: "Jenkins", size: expandedIconSize },
    { src: openaiIcon, alt: "OpenAI", size: expandedIconSize },
    { src: tailwindIcon, alt: "Tailwind", size: expandedIconSize },
    { src: sassIcon, alt: "Sass", size: expandedIconSize },
    { src: materialIcon, alt: "Material", size: expandedIconSize },
    { src: figmaIcon, alt: "Figma", size: expandedIconSize },
    { src: photoshopIcon, alt: "Photoshop", size: expandedIconSize },
    { src: illustratorIcon, alt: "Illustrator", size: expandedIconSize }
];