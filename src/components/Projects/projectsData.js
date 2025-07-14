import todoVideo from "../../assets/projects/todo.mp4";
import githubVideo from "../../assets/projects/github.mp4";
import calcVideo from "../../assets/projects/calc.webm";
import orcusVideo from "../../assets/projects/orcus.mp4";
import momeVideo from "../../assets/projects/mome.mp4";
import familyVideo from "../../assets/projects/family.webm";
import cryptowaveVideo from "../../assets/projects/cryptowave.mp4";
import epicStreamVideo from "../../assets/projects/epicStream.webm";

export const projects = [
  {
    title: "CryptoWave",
    description: "Web application for monitoring Cryptocurrensies with integrated Telegram bot.",
    technologies: ["React/Typescript", "Redux toolkit", "Chakra-UI", "Vite", "Chart JS", "MongoDB", "Node JS, Express"],
    linkResourse: "https://cryptowave-pavel-kazlou.netlify.app/",
    linkCode: "https://github.com/Pavelkv94/Cryptowave",
    linkBack: "https://github.com/Pavelkv94/Cryptowave-server",
    preview: cryptowaveVideo,
  },
  {
    title: "EpicStream",
    description: "A fullstack live streaming web application where users can broadcast and watch live video streams. Built with NestJS and PostgreSQL on the backend, featuring a GraphQL API for efficient data fetching. Integrated with Stripe for secure, seamless payment processing and subscriptions. Designed to be scalable, performant, and easy to use, showcasing a modern web architecture and real-time capabilities.",
    technologies: ["Next.js", "Tailwind", "Shadcn", "NestJS", "Postgres", "Redis", "Docker", "Stripe", "GraphQL", "WebSocket", "AWS S3"],
    linkResourse: "https://epic-stream.duckdns.org/",
    linkCode: "https://github.com/Pavelkv94/Twich_clone_front",
    linkBack: "https://github.com/Pavelkv94/Twich_clone_back",
    preview: epicStreamVideo,
  },
  {
    title: "Momentum",
    description:
      "This application is an enhanced alternative to Momentum from the Chrome Web Store. It not only displays the current weather and changes wallpapers based on the time of day, but also includes a meditation and relaxation tab. Users can embark on a virtual road trip, enjoying local radio stations, or choose a walking tour of various cities around the world, immersing themselves in the atmosphere of each location. The app also offers the opportunity to enjoy nature and its sounds, making it an ideal tool for stress relief and productivity enhancement. The intuitive interface and variety of features provide users with a unique experience, allowing them to relax and find inspiration in their daily lives.",
    technologies: ["Javascript", "React", "LocalStorage", "Vite", "React router dom", "SASS", "Youtube API", "Work with audio"],
    linkResourse: "https://momentum-v2.netlify.app/",
    linkCode: "https://github.com/Pavelkv94/Momentum_V2",
    preview: momeVideo,
  },
  {
    title: "TG Family tuner",
    description:
      "This Telegram bot offers users a wide selection of world radio stations to listen to. Users can easily find and add their favorite stations to a favorites list. The advantage of using this bot is the ability to listen to radio directly within Telegram, making the process simple and convenient. The main goal of the application is to develop skills in working with Telegram API and MiniApp, providing users with a unique experience in the world of online radio.",
    technologies: ["Typescript", "React", "Redux", "Vite", "node-telegram-bot-api", "mongoDB", "Express", "Work with audio"],
    linkResourse: "https://t.me/fam_mus_bot",
    linkCode: "https://github.com/Pavelkv94/Family-tuner-client",
    linkBack: "https://github.com/Pavelkv94/Family-tuner-server",
    preview: familyVideo,
  },
  // {
  //   title: "Social Network",
  //   description: "A modern social networking platform where users can follow others, share posts, comment, and like content. Features a common chat room for real-time communication. Built with React and Redux on the frontend, with an Express backend and Neo4j graph database to model user relationships. Implements WebSocket for real-time updates and chat, and JWT-based authentication for secure user sessions.",
  //   technologies: ["Typescript", "React/Redux", "WebSocket", "Node JS, Express", "MongoDB", "Neo4j", "JWT", "AWS S3"],
  //   linkResourse: "https://pavelkv94.github.io/Dart-net/",
  //   linkCode: "https://github.com/Pavelkv94/Dart-net",
  //   linkBack: "https://github.com/Pavelkv94/Dart-server",
  //   preview: todoVideo,
  // },
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
