import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../../images/me_512.png';

export const Hero: React.FC = () => {
    useEffect(() => {
        const calculateGrid = () => {
            const grid = document.querySelector('.hero-background') as HTMLElement;
            if (!grid) return; // Ensure grid element exists

            const gridWidth = grid.offsetWidth; 
            const itemSize = 15; // Our desired size for each grid item
            const gap = 3; // The gap we defined in CSS

            const itemsPerRow = Math.floor((gridWidth + gap) / (itemSize + gap)); 
            const rows = Math.ceil(grid.offsetHeight / (itemSize + gap)); 
            const totalItems = itemsPerRow * rows;

            grid.style.gridTemplateColumns = `repeat(${itemsPerRow}, ${itemSize}px)`; 

            // Clear existing items
            grid.innerHTML = '';

            // Create and append new items
            for (let i = 0; i < totalItems; i++) {
                const item = document.createElement('div');
                item.classList.add('grid__item');
                grid.appendChild(item);
            }
        };

        // Initial calculation
        calculateGrid();

        // Recalculate on window resize
        window.addEventListener('resize', calculateGrid);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', calculateGrid);
        };
    }, []);

    return (
        <section id="hero">
            <div className="hero-background"/>
            <div className="hero-content">
                <h1>Neil MacLean</h1>
                <p>developer | musician | creative</p>
                <button onClick={() => {
                    window.open('https://drive.google.com/file/d/1clsgHpRT8uiRUKKQA3_O6teAUOOzpHUb/view?usp=sharing');
                }}>Download Resume</button>
            </div>
            <img src={heroImage} className="portfolio-picture"/>
            
        </section>
    );
};