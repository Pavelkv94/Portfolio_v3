import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import s from "./Main.module.scss";

export const Main = () => {
    const initialStyle = {
        opacity: '1',
        transition: '0.6s',
        position: 'absolute',
        top: '30vh'
    };

    const [style, setStyle] = useState(initialStyle);
    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            setStyle({...style, top: '40vh'})
        }
        if (window.pageYOffset > 150) {
            setStyle({...style, opacity: '0.8', top: '50vh'})
        }
        if (window.pageYOffset > 200) {
            setStyle({...style, opacity: '0.6', top: '55vh'})
        }
        if (window.pageYOffset > 250) {
            setStyle({...style, opacity: '0.4', top: '60vh'})
        }
        if (window.pageYOffset > 300) {
            setStyle({...style, opacity: '0.2', top: '65vh'})
        }
        if (window.pageYOffset > 350) {
            setStyle({...style, opacity: '0', top: '70vh'})
        }
        if (window.pageYOffset < 100) {
            setStyle({...style, opacity: '1', top: '30vh'})
        }
    };
    return (
        <div>
            <div className={s.main_back_img}></div>
            <div className={s.mainContent}>
                <div
                    className={s.container}
                    id="title"
                    style={style}
                >
                    <h2>
                        Creative <span> Agency </span> <br />
                        <span> WordPress </span> Theme{" "}
                        <span> Multipurpose</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};
