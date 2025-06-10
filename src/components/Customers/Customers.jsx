import s from "./Customers.module.scss";
import { customersData } from "./customers";

export const Customers = () => {
  return (
    <div className={s.line} id="contacts">
      <h2>MY CLIENTS</h2>
      <div>
        {customersData.map((customer, index) => (
          <a key={index} href={customer.link} target={"_blank"} rel="noreferrer">
            <img src={customer.image} alt={customer.name} />
            <span>{customer.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
