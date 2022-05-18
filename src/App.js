import { useEffect, useState } from "react";
import "./App.css";
import { Available } from "./components/Available/Available";
import { Contact } from "./components/Contact/Contact";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/nav/Nav";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import CustomizedSwitches from "./components/Switch/Switch";

function App() {
    const [theme, setTheme] = useState({ background: "white" });
    const [dark, setDark] = useState(false);

    useEffect(() => {
        dark
            ? setTheme({ background: "#0C0F16", transition: "1s" })
            : setTheme({ background: "white", transition: "1s" });
    }, [dark]);
    
    return (
        <div className="App">
            <div className="nav"><Nav /></div>
            <div className="switch">
                <CustomizedSwitches dark={dark} setDark={setDark} />
            </div>
            <Main />
            <Skills dark={dark} />
            <Projects dark={dark} />
            <div className="custom-hr" style={theme}>
                <div></div>
            </div>
            <Available theme={theme} />
            <Contact />
        </div>
    );
}

export default App;
