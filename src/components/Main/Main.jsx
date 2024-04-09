import React from "react";
import s from "./Main.module.scss";
import ReactTypingEffect from 'react-typing-effect';
import { Fade } from "react-awesome-reveal";


export const Main = () => {
    // const initialStyle = {
    //     opacity: "1",
    //     transition: "0.6s",
    //     position: "absolute",
    //     top: "20vh",
    // };

    // const [style, setStyle] = useState(initialStyle);
    // window.onscroll = function () {
    //     if (window.pageYOffset > 100) {
    //         setStyle({ ...style, top: "40vh" });
    //     }
    //     if (window.pageYOffset > 150) {
    //         setStyle({ ...style, opacity: "0.9", top: "50vh" });
    //     }
    //     if (window.pageYOffset > 200) {
    //         setStyle({ ...style, opacity: "0.8", top: "55vh" });
    //     }
    //     if (window.pageYOffset > 250) {
    //         setStyle({ ...style, opacity: "0.5", top: "60vh" });
    //     }
    //     if (window.pageYOffset > 300) {
    //         setStyle({ ...style, opacity: "0.2", top: "65vh" });
    //     }
    //     if (window.pageYOffset > 550) {
    //         setStyle({ ...style, opacity: "0", top: "70vh" });
    //     }
    //     if (window.pageYOffset < 100) {
    //         setStyle({ ...style, opacity: "1", top: "20vh" });
    //     }
    // };
    
    return (
        <div id="main">
            <div className={s.main_back_img}></div>
            <div>
                <div className={s.mainContent}>
                    <div className={s.container} id="title" >
                        <h2>
                            <span style={{fontSize: '36px'}}>Hi There</span>
                            <br /> My
                            <span> name </span> is<br />
                            <span> Pavel </span>
                             Kazlou.<br />
                            <ReactTypingEffect text="I'm frontend-developer!" style={{fontSize: '24px'}} className={s.type}/>
                        </h2>
                        <Fade><div className={s.mainPhoto}></div></Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};
