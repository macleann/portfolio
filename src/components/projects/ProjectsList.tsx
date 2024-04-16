import enchiridion from '../../images/projectImages/enchiridion-project.png';
import lymi from '../../images/projectImages/lymi-project.png';
import chatbot from '../../images/projectImages/chatbot-project.png';
import design from '../../images/projectImages/design-projects.png';

export const ProjectsList = [
    {
        imagePath: enchiridion,
        title: 'The Enchiridion',
        description: 'This was my full-stack capstone for NSS. The Enchiridion is a TV playlist-making app with a Django backend interfacing with The Movie Database (TMDB) API. Currently, the app allows users to search through any show already within The Movie Database (TMDB) and add any given episode to one of their own playlists. You can also sign in with Google! Plans are in place to allow users to leave comments on playlists and to make a user account page that would allow users to update their personal information. This project was bootstrapped with Create React App.',
        link: 'https://enchiridion.tv',
    },
    {
        imagePath: lymi,
        title: 'Like You Mean It Records Website',
        description: 'This was my front-end capstone for NSS, back before we had learned to develop RESTful APIs. Developed using React, this project provides a platform for artists of Like You Mean It Records to enhance their interaction with fans. It allows artists to upload their releases, including album art and audio files, and populate a calendar with upcoming shows, utilizing a JSON server for database management and Cloudinary for file storage. The interface, styled with Tailwind, offers fans a user-friendly and engaging experience. Future plans for the project include: integrating the Stripe API for web store functionality, adding a blog feature, and implementing a more robust user authentication system. This project was bootstrapped with Create React App.',
        link: 'https://github.com/macleann/lymi-capstone',
    },
    {
        imagePath: chatbot,
        title: 'Chatbot with Voice Interaction',
        description: 'As a result of a collaborative effort, this project presents an AI chatbot enhanced with voice interaction capabilities. On the client side, which was built using React, user inquiries are sent to the server side, which is Python-based. These inquiries are then fed into the OpenAI API to generate appropriate responses. These responses are subsequently sent to Elevenlabs API, which synthesizes them into audio data. The server then sends this voice data back to the client side, which autoplays it, thereby offering users an engaging, human-like conversational experience. The user interface, designed with CSS, blends aesthetic appeal with ease of use.',
        link: 'https://github.com/wesley-hughes/chat-client',
    },
    {
        imagePath: design,
        title: 'Graphic Design Projects',
        description: 'Showcased here are a selection of my graphic design projects. I have experience with Adobe Photoshop, Illustrator, and Figma, and I enjoy creating mockups, show posters, and other visual content. I am always looking for new opportunities to expand my design skills and create engaging, visually appealing content. If you have a design project in mind, I would love to collaborate with you!',
        link: '',
    },
];