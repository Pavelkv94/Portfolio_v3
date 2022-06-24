import React, { useEffect, useState } from "react";
import s from "./Customers.module.scss";
import zakodix_logo from "../../assets/zakodix.svg";
import case_logo from "../../assets/case-logo.svg";

export const Customers = () => {
  
    return (
            <div className={s.line}>
                <h2>My Clients</h2>
                <div>
                   <a href="https://zakodix.com/" target={'_blank'} rel="noreferrer"><img src={zakodix_logo} alt="zakodix-logo" /><span>Zakodix Tech Group</span></a>
                   <a href="http://respawnasp.net/" target={'_blank'} rel="noreferrer"><img src={case_logo} alt="case-logo" /><span>respawnasp.net</span></a>
                </div>
            </div>

    );
};
