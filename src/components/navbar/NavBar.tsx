import React from 'react';
import './NavBar.css';
import logo from '../../images/nm_logo.svg';

export const NavBar: React.FC = () => {
    return (
        <nav id="navBar">
            <ul>
                <li>
                    <a href="#hero"><img src={logo} className="App-logo" alt="logo" /></a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#stack">Stack</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};