import React, { useEffect, useState } from 'react';

import s from './Project.module.scss';

export const Project = ({ data, dark }) => {
    const [theme, setTheme] = useState({ background: '#f7f7f7' });

    useEffect(() => {
        dark
            ? setTheme({
                  background: '#18191d',
                  transition: '1s',
                  color: 'white',
                  boxShadow: '5px 5px 10px #1761e9',
              })
            : setTheme({ background: '#f7f7f7', transition: '1s' });
    }, [dark]);

    return (
        <div className={s.project} style={theme}>
            <div className={s.photo} style={data.img}></div>
            <div className={s.description}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <ul>
                    {data.technologies.map((el, i) => (
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            </div>
            <div className={s.controls}>
                <div className={s.link}>
                    <a href={data.linkResourse} target={'_blank'} rel="noreferrer">
                        <span>View</span>
                    </a>
                </div>

                <div className={s.link}>
                    <a href={data.linkCode} target={'_blank'} rel="noreferrer">
                        <span>Code</span>
                    </a>
                </div>
                {data.linkBack && (
                    <div className={s.link}>
                        <a href={data.linkBack} target={'_blank'} rel="noreferrer">
                            <span>Backend</span>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
