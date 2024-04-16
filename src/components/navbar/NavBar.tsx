import React, { useState, useEffect, useCallback } from 'react';
import './NavBar.css';
import logo from '../../images/nm_logo.svg';
import { NavList } from './NavList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [isMobile, setIsMobile] = useState<boolean>(screenWidth <= 768);

    // Open/close the menu when the hamburger or a link is clicked
    const toggleMenu = () => {
        setOpen(!open);
    };

    // Handle resizing of the window
    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth);
        setIsMobile(screenWidth <= 768);

        // Conditionally render the list items based on screen width and menu state
        if (isMobile) {
            const listItems = document.querySelectorAll('.list-item');
            listItems.forEach(item => {
                item.setAttribute('style', `display: ${open ? 'flex' : 'none'}`);
            });
        } else {
            const listItems = document.querySelectorAll('.list-item');
            listItems.forEach(item => {
                item.setAttribute('style', 'display: flex');
            });
        }
    }, [open, isMobile, screenWidth]);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <nav id="navBar">
            <div className="nav-items">
                <a onClick={() => setOpen(false)} href="#hero"><img src={logo} id="site-logo" alt="logo" /></a>
                <FontAwesomeIcon id="hamburger" onClick={toggleMenu} icon={faBars} />
            </div>
            <NavList toggleMenu={toggleMenu} />
        </nav>
    );
};