import React from 'react';
import s from './Nav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export function Nav() {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Main</Link>
            <Link
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>            <Link
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Projects</Link>            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>
        </div>
    )
}



