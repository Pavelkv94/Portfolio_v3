import React, { useEffect, useState } from "react";
import s from "./Skill.module.scss";
import { DiJavascript1, DiNpm } from "react-icons/di";
import { AiOutlineHtml5, AiOutlineBulb, AiOutlineApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export const Skill = ({ data, dark }) => {
    const [theme, setTheme] = useState({ background: "#f7f7f7" });
    const [theme2, setTheme2] = useState({ background: "white" });

    useEffect(() => {
        dark
            ? setTheme({ background: "#11141B", transition: "1s" })
            : setTheme({ background: "#f7f7f7", transition: "1s" });
        dark
            ? setTheme2({ background: "#0C0F16", transition: "1s", color: 'white' })
            : setTheme2({ background: "white", transition: "1s" });
    }, [dark]);

    const Icon = () => {
        switch (data.title) {
            case "React":
                return <FaReact size={"36"} />;
            case "HTML/CSS":
                return <AiOutlineHtml5 size={"36"} />;
            case "REST-API":
                return <AiOutlineApi size={"36"} />;
            case "Javascript":
                return <DiJavascript1 size={"36"} />;
            case "Npm":
                return <DiNpm size={"36"} />;
            case "Other":
                return <AiOutlineBulb size={"36"} />;

            default:
                return <DiJavascript1 size={"36"} />;
        }
    };
    return (
        <div className={s.skill} style={theme}>
            <div className={s.item} style={theme2}>
                <div>
                    <Icon />
                    <h5>{data.title}</h5>
                </div>
                <ul>
                    {data.skills.map((el, i) => (
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
