import s from "./Customers.module.scss";
import zakodix_logo from "../../assets/zakodix.svg";
import case_logo from "../../assets/case-logo.svg";
import zoms_logo from "../../assets/zoms-logo.svg";
import pb_logo from "../../assets/pb-logo.svg";

export const Customers = () => {
  return (
    <div className={s.line} id="contacts">
      <h2>My Clients</h2>
      <div>
        <a href="https://zakodix.tech/" target={"_blank"} rel="noreferrer">
          <img src={zakodix_logo} alt="zakodix-logo" />
          <span>Zakodix Tech Group</span>
        </a>
        <a href="http://respawnasp.net/" target={"_blank"} rel="noreferrer">
          <img src={case_logo} alt="case-logo" />
          <span>Respawn Asp.NET</span>
        </a>
        <a href="https://zoms.site/" target={"_blank"} rel="noreferrer">
          <img src={zoms_logo} alt="case-logo" />
          <span>Online Monitoring System</span>
        </a>
        <a href="https://plan-big.space/" target={"_blank"} rel="noreferrer">
          <img src={pb_logo} alt="case-logo" />
          <span>Plan Big</span>
        </a>
      </div>
    </div>
  );
};
