import { useEffect, useState } from "react";
import s from "./Nav.module.scss";
import { Link } from "react-scroll";
import CustomizedSwitches from "../Switch/Switch";
import PropTypes from "prop-types";

export function Nav({ dark, setDark }) {
  const [theme, setTheme] = useState({ backgroundColor: "rgb(0, 0, 0, 0.5)" });

  useEffect(() => {
    dark ? setTheme({ backgroundColor: "rgb(255, 255, 255, 0.3)" }) : setTheme({ backgroundColor: "rgb(0, 0, 0, 0.3)" });
  }, [dark]);

  return (
    <div className={s.navWrapper} style={theme}>
      <div className={s.nav}>
        <div className={s.links}>
          <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={0} duration={500}>
            Main
          </Link>
          <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={-50} duration={500}>
            Skills
          </Link>{" "}
          <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={-50} duration={500}>
            Projects
          </Link>{" "}
          <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={-50} duration={500}>
            Contacts
          </Link>
        </div>
        <CustomizedSwitches dark={dark} setDark={setDark} />
      </div>
    </div>
  );
}

Nav.propTypes = {
  dark: PropTypes.bool,
  setDark: PropTypes.func,
};
