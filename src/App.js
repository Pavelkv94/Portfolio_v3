import "./App.css";
import { Available } from "./components/Available/Available";
import { Contact } from "./components/Contact/Contact";
import { Main } from "./components/Main/Main";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Main />
            <Skills />
            <Projects />
            <div className="custom-hr"><div></div></div>
            <Available />
            <Contact />
        </div>
    );
}

export default App;
