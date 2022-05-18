import React from "react";
import { Fade } from "react-reveal";
import s from "./Available.module.scss";

export const Available = ({theme}) => {
    return (
        <div className={s.available} style={theme}>
            <div>
                <h3>I Am Available For Work</h3>
            </div>
            <Fade bottom>

                <div className={s.link}>
                    <a href="https://www.linkedin.com/in/pavel-kv94/" target={'_blank'} rel="noreferrer"><span>Hire me</span></a>
                </div>
            </Fade>
        </div>
    );
};
