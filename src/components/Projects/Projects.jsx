import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import s from "./Projects.module.scss";
import { projects } from "./projectsData";
import PropTypes from "prop-types";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

export const Projects = ({ dark }) => {
  const [theme, setTheme] = useState({ background: "white" });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  useEffect(() => {
    dark ? setTheme({ background: "#28292b", transition: "1s" }) : setTheme({ background: "white", transition: "1s" });
  }, [dark]);

  return (
    <div className={s.projects} style={theme} id="projects">
      <div className={s.title}>
        <h2>PROJECTS & SHOWCASES</h2>
      </div>
      <Fade>
        {!isMobile ? (
          <section>
            <div className={s.list}>
              {projects.map((el, i) => (
                <div
                  key={i}
                  className={`${s.listItem} ${i === currentProjectIndex ? s.active : {}} ${dark ? s.darkListItem : ""}`}
                  onClick={() => setCurrentProjectIndex(i)}
                >
                  {el.title}
                </div>
              ))}
            </div>
            <div className={s.view}>
              <div className={s.preview}>
                <video muted loop width={800} autoPlay key={currentProjectIndex}>
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
        ) : (
          <section>
            <div className={s.mobileList}>
              {projects.map((el, i) => (
                <div
                  key={i}
                  className={s.mobileListItem}
                  onClick={() => (currentProjectIndex === i ? setCurrentProjectIndex(null) : setCurrentProjectIndex(i))}
                >
                  <div className={s.mobileListItemTitle}>
                    <img src={currentProjectIndex === i ? minus : plus} alt="expand" width={20} />
                    <h3>{el.title}</h3>
                  </div>

                  {currentProjectIndex === i && (
                    <div>
                      <p>{el.description}</p>
                      <ul>
                        {projects[currentProjectIndex].technologies.map((el, i) => (
                          <li key={i}>{el}</li>
                        ))}
                      </ul>
                      <video muted loop width={"100%"} autoPlay key={currentProjectIndex}>
                        <source src={projects[currentProjectIndex].preview} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className={s.mobileProjectLinks}>
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
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </Fade>
    </div>
  );
};

Projects.propTypes = {
  dark: PropTypes.bool,
};
