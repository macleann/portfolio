import React from "react";

interface NavListProps {
    toggleMenu: Function;
}

export const NavList: React.FC<NavListProps> = ({ toggleMenu }) => {
    const handleClick = () => toggleMenu();

    return (
        <ul className="nav-list">
            <li className="list-item">
                <a onClick={handleClick} href="#about">About</a>
            </li>
            <li className="list-item">
                <a onClick={handleClick} href="#stack">Stack</a>
            </li>
            <li className="list-item">
                <a onClick={handleClick} href="#projects">Projects</a>
            </li>
            <li className="list-item">
                <a onClick={handleClick} href="#contact">Contact</a>
            </li>
        </ul>
    );
};
