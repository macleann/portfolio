import React, { useState } from 'react';
import './Stack.css';
import { StackList } from './StackList';

export const Stack: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const icons = StackList;

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderIcons = () => {
        return icons.map((icon, index) => {
            const iconSize = calculateIconSize(index);
            return (
                <div 
                    key={index} 
                    className="icon-wrapper" 
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={icon.src}
                        alt={icon.alt}
                        style={{
                            width: iconSize,
                            height: iconSize,
                            transition: "width 0.3s, height 0.3s"
                        }}
                    />
                    {hoveredIndex === index && (
                        <div className="icon-overlay">
                            <span className="icon-title">{icon.alt}</span>
                        </div>
                    )}
                </div>
            );
        });
    };

    const calculateIconSize = (index: number) => {
        let size = 50; // Minimum size set to 50px
        const distanceFromHovered = Math.abs(index - (hoveredIndex ?? 0));
    
        if (hoveredIndex !== null) {
            size = icons[index].size * Math.pow(2, 2 - distanceFromHovered);
        } else {
            size = icons[index].size; // Default size when not hovered
        }
    
        return Math.max(size, 50); // Ensure size doesn't go below 50px
    };    

    return (
        <section id="stack">
            <h2>My Tech Stack</h2>
            <div className="icon-container">{renderIcons()}</div>
        </section>
    );
};