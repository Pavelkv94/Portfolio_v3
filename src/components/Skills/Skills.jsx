import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { backendSkills, frontendSkills, techs } from "./skillData";
import s from "./Skills.module.scss";
import PropTypes from "prop-types";

export const Skills = ({ dark }) => {
  const [theme, setTheme] = useState({ background: "white" });

  useEffect(() => {
    dark ? setTheme({ background: "#11141B", transition: "1s" }) : setTheme({ background: "#FFF", transition: "1s" });
  }, [dark]);

  return (
    <div className={s.skills} style={theme} id="skills">
      <h2>My Engineering Skills</h2>
      <Fade bottom>
        <div className={s.techs}>
          {techs.map((el, i) => (
            <img key={i} width={70} src={el} />
          ))}
        </div>
        <div className={s.skillsBlock}>
          {/* <p><b>OS:</b> Windows, Linux, MacOS</p>
          <p><b>IDE:</b> VS Code</p>
          <p><b>Language:</b> JavaScript, TypeScript</p> */}
          <div className={s.matrixWrapper}>
            <div className={s.item}>
              <div className={s.matrix}>
                {frontendSkills.map((el, i) => (
                  <div key={i} className={s.matrixItem}>
                    <span>{el.title}:</span>
                    <div className={s.skillIndicator}>
                      <div className={s.filler} style={{ width: `${el.level * 30}px` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.matrix}>
                {backendSkills.map((el, i) => (
                  <div key={i} className={s.matrixItem}>
                    <span>{el.title}:</span>
                    <div className={s.skillIndicator}>
                      <div className={s.filler} style={{ width: `${el.level * 30}px` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

Skills.propTypes = {
  dark: PropTypes.bool,
};
