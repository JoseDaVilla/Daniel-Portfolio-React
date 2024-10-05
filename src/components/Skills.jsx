import React, { useEffect } from "react";
// import './Skills.css';

export const Skills = () => {
  useEffect(() => {
    const radios = document.querySelectorAll(".tabs input[type='radio']");
    const contentItems = document.querySelectorAll(".content-item");

    radios.forEach(radio => {
      radio.addEventListener("change", function () {
        const selectedTab = this.id;

        contentItems.forEach(item => {
          if (item.getAttribute("data-tab") === selectedTab) {
            item.style.display = "flex";
            item.classList.add("flex-center");
          } else {
            item.style.display = "none";
            item.classList.remove("flex-center");
          }
        });
      });
    });

    // Trigger change event for the default checked tab
    document.querySelector(".tabs input[type='radio']:checked").dispatchEvent(new Event("change"));
  }, []);

  return (
    <section className="skills-container">
      <h2>SKILLS</h2>
      <div className="tabs">
        <input type="radio" name="tabs" id="tab1" defaultChecked />
        <label htmlFor="tab1"><i className="fa-solid fa-laptop"></i> Software</label>
        <input type="radio" name="tabs" id="tab2" />
        <label htmlFor="tab2"><i className="fa-regular fa-lightbulb"></i> Expertise</label>
        <input type="radio" name="tabs" id="tab3" />
        <label htmlFor="tab3"><img src="./img/languageIcon.svg" alt="Language Icon" /> Language</label>
      </div>

      <div className="content">
        <div className="content-item" data-tab="tab1">
          <SkillsList />
        </div>
        <div className="content-item" data-tab="tab2">
          <ExpertiseList />
        </div>
        <div className="content-item" data-tab="tab3">
          <Languages />
        </div>
      </div>
    </section>
  );
};

const SkillsList = () => (
  <section className="skills">
    <div>
      <SkillCard icon="fa-brands fa-js" text="JavaScript" />
      <SkillCard
        img="./img/BxlTypescript.svg"
        alt="TypeScript Icon"
        text="TypeScript"
      />
      <SkillCard icon="fa-brands fa-react" text="React.js" />
      <SkillCard icon="fa-brands fa-python" text="Python" />
      <SkillCard
        img="./img/SimpleIconsNextdotjs.svg"
        alt="Next.js Icon"
        text="Next.js"
      />
      <SkillCard icon="fa-brands fa-node" text="Node.js" />
      <SkillCard icon="fa-brands fa-html5" text="HTML" />
      <SkillCard icon="fa-brands fa-css3-alt" text="CSS" />
      <SkillCard
        img="./img/mongoIcon.svg"
        alt="MongoDB Icon"
        text="MongoDB"
      />
      <SkillCard icon="fa-brands fa-sass" text="Sass" />
      <SkillCard
        img="./img/notionIcon.svg"
        alt="Notion Icon"
        text="Notion"
      />
      <SkillCard
        img="./img/illustratorIcon.svg"
        alt="Adobe Illustrator Icon"
        text="Illustrator"
      />
      <SkillCard img="./img/swagger.svg" alt="Swagger Icon" text="Swagger" />
      <SkillCard img="./img/socket.svg" alt="Socket.io Icon" text="Socket.io" />
      <SkillCard
        img="./img/handlebars.svg"
        alt="Handlebars Icon"
        text="Handlebars"
      />
      <SkillCard
        img="./img/passport.svg"
        alt="Passport.js Icon"
        text="Passport.js"
      />
      <SkillCard img="./img/mocha.svg" alt="Mocha Icon" text="Mocha" />
      <SkillCard img="./img/chai.svg" alt="Chai Icon" text="Chai" />
    </div>
  </section>
);

const ExpertiseList = () => (
  <section className="skills-expertise">
    <div>
      <SkillCard icon="fa-regular fa-lightbulb" text="Problem-Solving" />
      <SkillCard img="./img/teamwork.svg" alt="Teamwork Icon" text="Teamwork" />
      <SkillCard
        img="./img/communication.svg"
        alt="Communication Icon"
        text="Communication"
      />
      <SkillCard
        img="./img/adaptability.svg"
        alt="Adaptability Icon"
        text="Adaptability"
      />
      <SkillCard
        img="./img/brain.svg"
        alt="Critical Thinking Icon"
        text="Critical Thinking"
      />
      <SkillCard img="./img/leadership.svg" alt="Leadership Icon" text="Leadership" />
      <SkillCard icon="fa-regular fa-clock" text="Time Management" />
      <SkillCard img="./img/creativity.svg" alt="Creativity Icon" text="Creativity" />
      <SkillCard
        img="./img/attention.svg"
        alt="Attention to Detail Icon"
        text="Attention to Detail"
      />
    </div>
  </section>
);

const Languages = () => (
  <article className="lg-container">
    <div className="skill-lg-card">
      <h4> English </h4>
      <span className="level-advanced">Advanced B2+</span>
    </div>
    <div className="skill-lg-card">
      <h4> Spanish </h4>
      <span className="level-native">Native</span>
    </div>
  </article>
);


const SkillCard = ({ icon, img, text, alt }) => (
  <article className="skills-cards">
    {icon ? <i className={icon}></i> : <img src={img} alt={alt} width="21px" height="21px" />}
    <span>{text}</span>
  </article>
);
