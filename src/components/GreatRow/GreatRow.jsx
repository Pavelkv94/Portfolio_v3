import s from "./GreatRow.module.scss";
import earthIcon from "../../assets/earth.svg";
import apiIcon from "../../assets/api.svg";
import dbIcon from "../../assets/db.svg";

const GreatRow = () => {
  const achivements = [
    {
      icon: earthIcon,
      title: "Web Development",
      description: "Creating responsive and interactive web applications using React and Node.js.",
    },
    {
      icon: apiIcon,
      title: "API Integration",
      description: "Developing and integrating RESTful API to ensure communication between client and server.",
    },
    {
      icon: dbIcon,
      title: "Database Management",
      description: "Optimizing and managing databases, including MongoDB and PostgreSQL, to enhance application performance.",
    },
  ];

  return (
    <div className={s.greatLine}>
      <h2>What I Am Great At</h2>
      <section>
        {achivements.map((el, i) => (
          <div className={s.advantage} key={i}>
            <img src={el.icon} width={50} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GreatRow;
