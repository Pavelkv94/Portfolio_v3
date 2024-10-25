import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import s from "./Projects.module.scss";
import { projects } from "./projectsData";
import PropTypes from "prop-types";
export const Projects = ({ dark }) => {
  const [theme, setTheme] = useState({ background: "white" });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    dark ? setTheme({ background: "#0C0F16", transition: "1s" }) : setTheme({ background: "white", transition: "1s" });
  }, [dark]);

  return (
    <div className={s.projects} style={theme} id="projects">
      <div className={s.title}>
        <h2>- Projects & Showcases -</h2>
      </div>
      <Fade>
        <section>
          <div className={s.list}>
            {projects.map((el, i) => (
              <div key={i} className={`${s.listItem} ${i === currentProjectIndex ? s.active : {}}`} onClick={() => setCurrentProjectIndex(i)}>
                {el.title}
              </div>
            ))}
          </div>
          <div className={s.view}>
            <div className={s.preview}>
              <video muted loop width={600} autoPlay key={currentProjectIndex}>
                <source src={projects[currentProjectIndex].preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <ul>
                {projects[currentProjectIndex].technologies.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>

            <div className={s.content}>
              <h1>{projects[currentProjectIndex].title}</h1>
              <p>{projects[currentProjectIndex].description}</p>
            </div>
            <div className={s.projectLinks}>
              <a href={projects[currentProjectIndex].linkResourse} target={"_blank"} rel="noreferrer">
                <button>View</button>
              </a>
              <a href={projects[currentProjectIndex].linkCode} target={"_blank"} rel="noreferrer">
                <button>Code Frontend</button>
              </a>
              {projects[currentProjectIndex].linkBack && (
                <a href={projects[currentProjectIndex].linkBack} target={"_blank"} rel="noreferrer">
                  <button>Code Backend</button>
                </a>
              )}
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

Projects.propTypes = {
  dark: PropTypes.bool,
};
