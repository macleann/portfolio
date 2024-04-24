import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutAnimations = () => {
    const scrollContainer = document.getElementById('scroll-container') as HTMLElement;
    const breakpoint = 932;

    useGSAP(() => {
        const tl = gsap.timeline();

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Define the breakpoints
        const isMobile = window.innerWidth <= breakpoint;

        // Set default ScrollTrigger scroller
        ScrollTrigger.defaults({
            scroller: scrollContainer,
        });

        // Animate the green circle to grow on scroll
        tl.to('#green-circle', {
            scale: prefersReducedMotion ? 1 : 1.7, // Adjust scale based on reduced motion preference
            scrollTrigger: {
                trigger: '#green-circle',
                start: 'top center',
                end: isMobile ? 'bottom center' : 'bottom top',
                scrub: 4,
                id: 'green-circle',
            },
        });

        // Animate the black circle to grow on scroll
        tl.to('#black-circle', {
            scale: prefersReducedMotion ? 1 : 1.7, // Adjust scale based on reduced motion preference
            scrollTrigger: {
                trigger: '#green-circle',
                start: 'top center',
                end: isMobile ? 'bottom center' : 'bottom top',
                scrub: 5,
                id: 'black-circle',
            },
        });

        // Animate the text to fade in from the left
        tl.from('.about-text', {
            opacity: 0,
            x: -100,
            scrollTrigger: {
                trigger: '.about-text',
                start: isMobile ? 'top bottom' : 'top center',
                end: isMobile ? 'top center' : 'center center',
                scrub: 2,
                id: 'about-text',
            },
        });

        // Animate the iframe to fade in from the right
        tl.from('iframe', {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: 'iframe',
                start: isMobile ? 'top bottom' : 'top center',
                end: isMobile ? 'top center' : 'center center',
                scrub: 2,
                id: 'spotify-embed',
            },
        });
    }, [scrollContainer]); // Dependency array includes scrollContainer to ensure the effect runs when it changes

    return null;
};