import React from "react";

import s from "./Project.module.scss";

export const Project = ({data}) => {

    return (
        <div className={s.project}>
            <div className={s.photo} style={data.img}></div>
            <div className={s.description}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <ul>
                    {data.technologies.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
            </div>
            <div className={s.controls}>
                <div className={s.link}>
                    <a
                        href={data.linkResourse}
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <span>View</span>
                    </a>
                </div>
                <div className={s.link}>
                    <a
                        href={data.linkCode}
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
