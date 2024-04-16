import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

interface RenderProjectProps {
    projects: Array<{
        imagePath: string;
        title: string;
        description: string;
        link: string;
    }>;
}

export const RenderProject: React.FC<RenderProjectProps> = ({ projects }) => {
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            renderDotsOutside={true}
            arrows={false}
            responsive={responsive}
            infinite={true}
            centerMode={false}
            autoPlay={true}
            autoPlaySpeed={10000}
            pauseOnHover={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {projects.map((project, index) => {
                let linkPresent: boolean = true;

                if (project.link === "") {
                    linkPresent = false;
                }

                return (
                    <div key={index} className="project">
                        <div className="project-text">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {linkPresent ? <a href={project.link} target="_blank" rel="noreferrer">View Project</a> : null}
                        </div>
                        <img className="project-image" src={project.imagePath} alt={project.title} />
                    </div>
                )
            })}
        </Carousel>
    );
};