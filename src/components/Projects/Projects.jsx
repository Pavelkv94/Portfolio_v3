import React from "react";
import { Fade } from "react-reveal";
import { Project } from "./Project/Project";
import s from "./Projects.module.scss";
import { projects } from "./projectsData";


export const Projects = () => {
 
    return (
        <div className={s.projects}>
            <div className={s.title}>
                <h2>- Projects & Showcases -</h2>
            </div>
            {projects.map((el, i) =>
                i % 2 === 0 ? (
                    <Fade left key={i}>
                        <Project data={el} />
                    </Fade>
                ) : (
                    <Fade right key={i}>
                        <Project data={el} />
                    </Fade>
                )
            )}
        </div>
    );
};
