import React from "react";
import s from "./Skill.module.scss";
import { BiAnchor } from "react-icons/bi";

export const Skill = () => {
    return (
        <div className={s.skill}>
            <div className={s.item}>
           <div><BiAnchor size={'36'}/> <h5>TITLE</h5></div>
           <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
           </div>
        </div>
    );
};
