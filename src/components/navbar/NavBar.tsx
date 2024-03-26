import React from 'react';
import './NavBar.css';
import logo from '../../images/nm_logo.svg';

export const NavBar: React.FC = () => {
    return (
        <nav id="navBar">
            <ul className="list">
                <li className="list-item" id="site-logo">
                    <a href="#hero"><img src={logo} className="App-logo" alt="logo" /></a>
                </li>
                <li className="list-item">
                    <a href="#about">About</a>
                </li>
                <li className="list-item">
                    <a href="#stack">Stack</a>
                </li>
                <li className="list-item">
                    <a href="#projects">Projects</a>
                </li>
                <li className="list-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};