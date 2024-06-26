import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Project } from "./Project/Project";
import s from "./Projects.module.scss";
import { projects } from "./projectsData";

export const Projects = ({ dark }) => {
    const [theme, setTheme] = useState({ background: "white" });

    useEffect(() => {
        dark
            ? setTheme({ background: "#0C0F16", transition: "1s" })
            : setTheme({ background: "white", transition: "1s" });
    }, [dark]);

    return (
        <div className={s.projects} style={theme} id="projects">
            <div className={s.title}>
                <h2>- Projects & Showcases -</h2>
            </div>
            {projects.map((el, i) =>
              <Fade key={i}>
              <Project data={el} dark={dark}/>
          </Fade>
            )}
        </div>
    );
};
