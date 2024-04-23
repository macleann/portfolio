import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const AboutAnimations = () => {

    const scrollContainer = document.getElementById('scroll-container') as HTMLElement;
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    ScrollTrigger.defaults({
        scroller: scrollContainer,
        // markers: true,
    });
    
    useGSAP(() => {
        let tl = gsap.timeline();


        // Animate the green circle to grow on scroll
        tl.to('#green-circle', {
            scale: 1.7,
            scrollTrigger: {
                trigger: '#green-circle',
                start: 'top center',
                end: 'bottom top',
                scrub: 4,
            },
        });

        // Animate the black circle to grow on scroll
        tl.to('#black-circle', {
            scale: 1.7,
            scrollTrigger: {
                trigger: '#green-circle',
                start: 'top center',
                end: 'bottom top',
                scrub: 5,
            },
        })

        // Animate the text to fade in from the left
        tl.from('.about-text', {
            opacity: 0,
            x: -100,
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top center',
                end: 'center center',
                scrub: 2,
            },
        });

        // Animate the iframe to fade in from the right
        tl.from('iframe', {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: 'iframe',
                start: 'top center',
                end: 'center center',
                scrub: 2,
            },
        });
    }, [scrollContainer]);

    return null;

}