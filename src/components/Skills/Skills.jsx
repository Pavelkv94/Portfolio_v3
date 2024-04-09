import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Skill } from "./Skill/Skill";
import { skills } from "./skillData";
import s from "./Skills.module.scss";

export const Skills = ({ dark }) => {
    const [theme, setTheme] = useState({ background: "white" });

    useEffect(() => {
        dark
            ? setTheme({ background: "#11141B", transition: "1s" })
            : setTheme({ background: "#f7f7f7", transition: "1s" });
    }, [dark]);

    return (
        <div className={s.skills} style={theme} id="skills">
            <div className={s.line}>
                <div>
                    <span>17+ Pet Projects</span>
                    <span>3+ years of experience</span>
                    <span>10 Commercial Projects</span>
                </div>
            </div>

            <h2>My Skills</h2>
            <Fade bottom>
                <div className={s.skillsBock}>
                    {skills.map((el,i) =>  <Skill key={i} data={el} dark={dark}/>)}
                </div>
            </Fade>
        </div>
    );
};
