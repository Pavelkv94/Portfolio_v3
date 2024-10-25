import { useEffect, useState } from "react";
import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Customers } from "./components/Customers/Customers";
import { Main } from "./components/Main/Main";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Nav } from "./components/nav/Nav";
import GreatRow from "./components/GreatRow/GreatRow";

function App() {
  const [theme, setTheme] = useState({ background: "white" });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark ? setTheme({ background: "#0C0F16", transition: "1s" }) : setTheme({ background: "white", transition: "1s" });
  }, [dark]);

  return (
    <div className="App">
      <div className="shadow"> </div>
      <Nav dark={dark} setDark={setDark} />
      <Main />
      <GreatRow />
      <Skills dark={dark} />
      <div className="custom-hr" style={theme}>
        <div></div>
      </div>
      <Projects dark={dark} />
      <Customers />
      <Contact />
    </div>
  );
}

export default App;
