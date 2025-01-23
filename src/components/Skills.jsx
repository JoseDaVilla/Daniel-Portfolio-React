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
      {/* <SkillCard icon="fa-brands fa-js" text="JavaScript" /> */}
      <SkillCard
        img="./img/ts.svg"
        alt="TypeScript Icon"
        text="TypeScript"
      />

      <SkillCard
        img="./img/js.svg"
        alt="JavaScript Icon"
        text="JavaScript"
      />

      <SkillCard
        img="./img/react.svg"
        alt="React Icon"
        text="React.js"
      />

      <SkillCard
        img="./img/py.svg"
        alt="Python Icon"
        text="Python"
      />


      <SkillCard
        img="./img/HTML.svg"
        alt="HTML Icon"
        text="HTML"
      />
      {/* <SkillCard icon="fa-brands fa-react" text="React.js" /> */}
      {/* <SkillCard icon="fa-brands fa-python" text="Python" /> */}

      <SkillCard
        img="./img/SimpleIconsNextdotjs.svg"
        alt="Next.js Icon"
        text="Next.js"
      />

      <SkillCard
        img="./img/figma.svg"
        alt="Figma Icon"
        text="Figma"
      />

      <SkillCard
        img="./img/mysql.svg"
        alt="MySQL Icon"
        text="MySQL"
      />

      <SkillCard
        img="./img/nodejs.svg"
        alt="Node.js Icon"
        text="Node.js"
      />


      <SkillCard
        img="./img/css.svg"
        alt="CSS Icon"
        text="CSS"
      />

      <SkillCard
        img="./img/Mongo.svg"
        alt="MongoDB Icon"
        text="MongoDB"
      />

      <SkillCard
        img="./img/sass2.svg"
        alt="Sass Icon"
        text="Sass"
      />

      <SkillCard
        img="./img/notionIcon.svg"
        alt="Notion Icon"
        text="Notion"
      />
      <SkillCard
        img="./img/AI.svg"
        alt="Adobe Illustrator Icon"
        text="Illustrator"
      />
      <SkillCard img="./img/swagger.svg"
        alt="Swagger Icon"
        text="Swagger" />

      <SkillCard img="./img/socket.svg"
        alt="Socket.io Icon"
        text="Socket.io" />

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

      <SkillCard
        img="./img/postgresql.svg"
        alt="PostgreSQL Icon"
        text="PostgreSQL"
      />


      <SkillCard
        img="./img/bootstrap.svg"
        alt="Bootstrap Icon"
        text="Bootstrap"
      />

      <SkillCard
        img="./img/tailwind.svg"
        alt="Tailwind CSS Icon"
        text="Tailwind CSS"
      />
      <SkillCard
        img="./img/mochajs.svg"
        alt="Mocha Icon"
        text="Mocha" />

      <SkillCard
        img="./img/chaijs.svg"
        alt="Chai Icon"
        text="Chai" />

      <SkillCard
        img="./img/git.svg"
        alt="Git Icon"
        text="Git" />

      <SkillCard
        img="./img/github.svg"
        alt="GitHub Icon"
        text="GitHub" />
    </div>
  </section>
);

const ExpertiseList = () => (
  <section className="skills-expertise">
    <div>

      <SkillCard
        img="./img/light.svg"
        alt="Light Icon"
        text="Problem-Solving" />

      <SkillCard
        img="./img/teamwork.svg"
        alt="Teamwork Icon"
        text="Teamwork" />

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
      <SkillCard
        img="./img/lead.svg"
        alt="Leadership Icon"
        text="Leadership" />

      <SkillCard
        img="./img/clock.svg"
        alt="Clock Icon"
        text="Time Management" />

      <SkillCard
        img="./img/creativity.svg"
        alt="Creativity Icon"
        text="Creativity" />
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
      <div className="skill-lg-flag">
        <img src="./img/usflag.svg" alt="usflag" />
        <h4> English </h4>
      </div>
      <span className="level-advanced">Advanced B2+</span>
    </div>

    <div className="skill-lg-card">
      <div className="skill-lg-flag">
        <img src="./img/spanishflag.svg" alt="Spanish flag" />
        <h4> Spanish </h4>
      </div>
      <span className="level-native">Native</span>
    </div>
  </article>
);


const SkillCard = ({ icon, img, text, alt }) => (
  <article className="skills-cards">
    {icon ? <i className={icon}></i> : <img src={img} alt={alt} width="28px" height="28px" />}
    <span>{text}</span>
  </article>
);
