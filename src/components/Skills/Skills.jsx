import React from "react";
import { Fade } from "react-reveal";
import { Skill } from "./Skill/Skill";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.line}>
                <div>
                    <span>10+ Pet Projects</span>
                    <span>2+ years of experience</span>
                    <span>3 Commercial Projects</span>
                </div>
            </div>

            <h2>My Skills</h2>
            <Fade bottom>
            <div className={s.skillsBock}>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
            </Fade>
        </div>
    );
};
