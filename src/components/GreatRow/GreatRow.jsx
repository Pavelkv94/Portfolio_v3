import s from "./GreatRow.module.scss";
import earthIcon from "../../assets/earth.svg";
import apiIcon from "../../assets/api.svg";
import dbIcon from "../../assets/db.svg";

const GreatRow = () => {
  const achivements = [
    {
      icon: earthIcon,
      title: "Web Development",
      description: "Building fast, scalable apps with React, Next.js, NestJS & TypeScript.",
    },
    {
      icon: apiIcon,
      title: "API Integration",
      description: "Connecting apps to external services with reliable, efficient, and secure APIs.",
    },
    {
      icon: dbIcon,
      title: "Database Management",
      description: "Designing efficient, reliable, and scalable data models with SQL and NoSQL databases.",
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
