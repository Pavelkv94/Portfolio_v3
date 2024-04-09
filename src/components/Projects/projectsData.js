import momentum from "../../assets/momentum.png";
import calc from "../../assets/calc.png";
import meditation from "../../assets/meditation.png";
import counter from "../../assets/counter.png";
import github from "../../assets/github.png";
import todo from "../../assets/todo.png";
import cards from "../../assets/cards.png";
import social from "../../assets/social.png";
import crypto from "../../assets/cryptowave.png";

const momentumImg = {
    backgroundImage: `url(${momentum})`,
};
const calcImg = {
    backgroundImage: `url(${calc})`,
};
const meditationImg = {
    backgroundImage: `url(${meditation})`,
};
const counterImg = {
    backgroundImage: `url(${counter})`,
};
const githubImg = {
    backgroundImage: `url(${github})`,
};
const todoImg = {
    backgroundImage: `url(${todo})`,
};
const cardsImg = {
    backgroundImage: `url(${cards})`,
};
const socialImg = {
    backgroundImage: `url(${social})`,
};
const cryptowaveImg = {
    backgroundImage: `url(${crypto})`,
};

export const projects = [
    {
        title: "CryptoWave",
        description:
            "Web application for monitoring Cryptocurrensies with integrated Telegram bot.",
        technologies: ["React/Typescript", "Redux toolkit", "Chakra-UI", "Vite", "Chart JS", "MongoDB", "Node JS, Express"],
        linkResourse: "https://cryptowave-pavel-kazlou.netlify.app/",
        linkCode: "https://github.com/Pavelkv94/Cryptowave",
        img: cryptowaveImg
    },
    {
        title: "Momentum",
        description:
            "Momentum is an analogue of the Chrome Web Store application of the same name. The application shows the time and username, his goal for the current day. The background image changes depending on the time of day.",
        technologies: ["Vanilla JS", "LocalStorage", "REST-API"],
        linkResourse: "https://pavelkv94.github.io/Momentum/",
        linkCode: "https://github.com/Pavelkv94/Momentum",
        img: momentumImg
    },
    {
        title: "Social Network",
        description:
            "Social network written in React and Typescript. The backend on the NodeJS was also developed.",
        technologies: ["Typescript", "React/Redux", "WebSocket", "Node JS, Express", "MongoDB"],
        linkResourse: "https://pavelkv94.github.io/Dart-net/",
        linkCode: "https://github.com/Pavelkv94/Dart-net",
        linkBack: "https://github.com/Pavelkv94/Dart-server",
        img: socialImg
    },
    {
        title: "Todolist",
        description:
            "Todolist application with authorization.",
        technologies: ["Typescript", "React/Redux", "REST-API", "Redux Toolkit", "React router dom", "Redux thunk", "Material-UI"],
        linkResourse: "https://pavelkv94.github.io/Todolist/",
        linkCode: "https://github.com/Pavelkv94/Todolist",
        img: todoImg
    },
    {
        title: "Meditation-App",
        description:
            "Application for relaxation and meditation.",
        technologies: ["Vanilla JS", "Work with audio/video files", "Work with DOM"],
        linkResourse: "https://pavelkv94.github.io/Meditation-App/",
        linkCode: "https://github.com/Pavelkv94/Meditation-App",
        img: meditationImg
    },
    // {
    //     title: "Learn Cards App",
    //     description:
    //         "You can create decks with cards to learn something, like words in a new language, and study them.",
    //     technologies: ["Typescript", "React/Redux", "REST-API", "Redux Toolkit", "React router dom", "Redux thunk"],
    //     linkResourse: "https://sozdatel31.github.io/FridayIgnatProject",
    //     linkCode: "https://github.com/Pavelkv94/FridayIgnatProject",
    //     img: cardsImg
    // },
    {
        title: "Github-Monitor",
        description:
            "Application for displaying information about a GitHub user and a list of their repositories.",
        technologies: ["Typescript", "React", "axios", "Semantic-ui-react" ],
        linkResourse: "http://Pavelkv94.github.io/Github-monitor",
        linkCode: "https://github.com/Pavelkv94/Github-monitor",
        img: githubImg
    },
    {
        title: "Counter",
        description:
            "A simple counter on React and Typescript. You can increase or decrease the value of the counter, set the settings.",
        technologies: ["Typescript", "React", "Redux", "LocalStorage"],
        linkResourse: "https://pavelkv94.github.io/Counter/",
        linkCode: "https://github.com/Pavelkv94/Counter",
        img: counterImg
    },
    {
        title: "Calculator",
        description:
            "Calculator is a simple application that allows you to perform arithmetic operations.",
        technologies: ["Vanilla JS", "LocalStorage"],
        linkResourse: "https://pavelkv94.github.io/calculator",
        linkCode: "https://github.com/Pavelkv94/calculator",
        img: calcImg
    },
];