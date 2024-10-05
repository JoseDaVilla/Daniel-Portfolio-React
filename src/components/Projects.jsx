import React from "react";


export const Projects = () => (
    <section className="projects">
        <h2>PROJECTS</h2>
        <div>
            <ProjectCard
                href="https://github.com/JoseDaVilla/Typing-test-js"
                imgSrc="./img//ezgif.com-optimize.gif"
                title="Typing Test"
            />
            <ProjectCard
                href="https://github.com/JoseDaVilla/BackEnd-Villa-53140-OK"
                imgSrc="./img/backend.gif"
                title="E-commerce Products Manager"
            />
            
        </div>
    </section>
);

const ProjectCard = ({ href, imgSrc, title }) => (
    <x-container>
        <article>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt="project" />
                <span>{title}</span>
            </a>
        </article>
    </x-container>
);
