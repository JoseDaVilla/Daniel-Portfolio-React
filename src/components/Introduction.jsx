import React from "react";
// import './Introduction.css'; // Puedes crear estilos específicos para este componente

export const Introduction = () => (
    <section className="introduction">
        <article>
            <h3>Hello, I'm <strong><span className="blue">Daniel</span></strong></h3>
            <p>I'm a passionate <strong>Fullstack Developer</strong> with a strong focus on <strong><span
                className="green">React.js</span></strong> and <strong><span className="green">Node.js</span></strong>. I thrive on building dynamic,
                user-friendly web applications, utilizing modern technologies to deliver high-quality, scalable
                solutions.</p>
            <p>With expertise in both frontend and backend development, I bring ideas to life, from concept to
                deployment. Let's create something amazing together!</p>
            <div className="buttons">
                <div className="links">
                    <a href="https://www.linkedin.com/in/jose-daniel-villa-712133204/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                    <a href="https://github.com/JoseDaVilla/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>GitHub
                    </a>
                </div>
                <a href="mailto:josevilla18@gmail.com" className="get-contact"><i className="fa-solid fa-envelope"></i> Email Me</a>
            </div>
        </article>
        <img src="./img/villa3.png" alt="Jose's Avatar Image" />
    </section>
);
