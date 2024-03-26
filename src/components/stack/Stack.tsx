import React, { useState } from 'react';
import './Stack.css';

export const Stack: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // This is terrible and needs to be reworked
    const smallI : number = 35;
    const mediumI : number = 70;
    const largeI : number = 180;
    const hoveredI : number = 360;

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderIcon = (index: number, size: number) => {
        return (
            <div
                key={index}
                style={{
                    height: size,
                    width: size,
                    backgroundColor: 'gray',
                    margin: '0 5px',
                    transition: 'height 1s',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            />
        );
    };

    const renderIcons = () => {
        const icons = [];
        const iconSizes = [smallI, smallI, smallI, smallI, smallI, smallI, smallI, smallI, smallI, smallI, smallI];

        for (let i = 0; i < iconSizes.length; i++) {
            let size = hoveredIndex === i ? hoveredI : iconSizes[i];
            // icon size will be 80px for i-1 and i+1
            if (hoveredIndex === i - 1 || hoveredIndex === i + 1) {
                size = largeI;
            }
            // icon size will be 40px for i-2 and i+2
            if (hoveredIndex === i - 2 || hoveredIndex === i + 2) {
                size = mediumI;
            }
            // icon size will otherwise be 20px
            icons.push(renderIcon(i, size));
        }

        return icons;
    };

    return (
        <section id="stack">
            <h2>My Tech Stack</h2>
            <div style={{ display: 'flex' }}>{renderIcons()}</div>
        </section>
    )
};