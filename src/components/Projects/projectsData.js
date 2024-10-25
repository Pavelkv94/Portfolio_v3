import todoVideo from "../../assets/projects/todo.webm";
import githubVideo from "../../assets/projects/github.webm";
import calcVideo from "../../assets/projects/calc.webm";
import orcusVideo from "../../assets/projects/orcus.webm";
// import todoVideo from "../../assets/projects/todo.webm";
// import todoVideo from "../../assets/projects/todo.webm";
// import todoVideo from "../../assets/projects/todo.webm";

export const projects = [
  {
    title: "CryptoWave",
    description: "Web application for monitoring Cryptocurrensies with integrated Telegram bot.",
    technologies: ["React/Typescript", "Redux toolkit", "Chakra-UI", "Vite", "Chart JS", "MongoDB", "Node JS, Express"],
    linkResourse: "https://cryptowave-pavel-kazlou.netlify.app/",
    linkCode: "https://github.com/Pavelkv94/Cryptowave",
    preview: todoVideo,
  },
  {
    title: "Momentum",
    description:
      "Momentum is an analogue of the Chrome Web Store application of the same name. The application shows the time and username, his goal for the current day. The background image changes depending on the time of day.",
    technologies: ["Javascript", "React", "LocalStorage", "Vite", "React router dom", "SASS"],
    linkResourse: "https://pavelkv94.github.io/Momentum/",
    linkCode: "https://github.com/Pavelkv94/Momentum",
    img: todoVideo,
  },
  {
    title: "Social Network",
    description: "Social network written in React and Typescript. The backend on the NodeJS was also developed.",
    technologies: ["Typescript", "React/Redux", "WebSocket", "Node JS, Express", "MongoDB"],
    linkResourse: "https://pavelkv94.github.io/Dart-net/",
    linkCode: "https://github.com/Pavelkv94/Dart-net",
    linkBack: "https://github.com/Pavelkv94/Dart-server",
    preview: todoVideo,
  },
  {
    title: "Orcus",
    description:
      "This project is an application consisting of a frontend and a backend that allows users to store necessary articles or texts in Markdown format, organized by categories. The application features a user-friendly admin panel where administrators can add new articles, as well as edit or delete existing ones. To ensure security and data protection, JWT (JSON Web Token) authorization is implemented. Data is stored in a MongoDB database, providing a reliable and scalable solution for content management. The application interface is intuitive, making it easy to find and manage articles.",
    technologies: ["Typescript", "React", "Redux", "ANT Design", "React Markdown", "Node JS, Express", "Express-validator", "MongoDB", "JWT", "Jest"],
    linkResourse: "https://orcus-23.netlify.app/",
    linkCode: "https://github.com/Pavelkv94/orcus",
    linkBack: "https://github.com/Pavelkv94/orcus_Server",
    preview: orcusVideo,
  },
  {
    title: "Todolist",
    description:
      "This project is a classic todo list created using the React library and the Redux state management library. The application allows users to add, edit, and delete tasks, as well as mark them as completed. Data is stored on the backend, ensuring reliable task management. The interface is intuitive and responsive, making it easy to manage the task list. The project employs a layered architectural approach with separation into BLL (Business Logic Layer), DAL (Data Access Layer), and Presentational layer, which enhances the structure and scalability of the application.",
    technologies: ["Typescript", "React/Redux", "REST-API", "Redux Toolkit", "React router dom", "Redux thunk", "Material-UI"],
    linkResourse: "https://pavelkv94.github.io/Todolist/",
    linkCode: "https://github.com/Pavelkv94/Todolist",
    preview: todoVideo,
  },

  {
    title: "Github-Explorer",
    description:
      "This application allows users to search for other GitHub users by username using the API provided by GitHub. Users can view information about the found accounts, including their avatar, number of repositories, and followers. The application also provides the ability to browse a specific user's repository list with active links to them. This application is developed as part of a training program on working with React Query, enabling efficient data state management and asynchronous API requests.",
    technologies: ["Typescript", "React", "React Query", "React router dom", "CSS"],
    linkResourse: "https://pnkazlou-github.netlify.app/",
    linkCode: "https://github.com/Pavelkv94/Github-Explorer/",
    preview: githubVideo,
  },
  {
    title: "Calculator",
    description:
      "This application is a calculator developed using HTML, CSS, and JavaScript. It allows users to perform various arithmetic operations, such as addition, subtraction, multiplication, and division. Users can also utilize functions for exponentiation, square root extraction, and working with the number π. The interface is intuitive, and interaction with the calculator is achieved through button presses, each having its own functionality. The application supports decimal numbers and allows users to clear their inputs. Additionally, sound playback is implemented for button presses, adding an interactive element. This project helps practice JavaScript skills, including DOM manipulation, event handling, and executing mathematical operations.",
    technologies: ["Vanilla JS", "LocalStorage", "HTML", "CSS"],
    linkResourse: "https://pavelkv94.github.io/calculator",
    linkCode: "https://github.com/Pavelkv94/calculator",
    preview: calcVideo,
  },
];
