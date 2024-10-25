import s from "./Contact.module.scss";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { useForm } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xzbyvjwk");

  const currentYear = new Date().getFullYear();

  return (
    <div className={s.contactWrapper}>
      <div className={s.contact}>
        <section>
          <h2>Get In Touch</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <input id="name" type="text" name="name" placeholder="Your Name" />
            </div>
            <div>
              <input id="email" type="email" name="email" placeholder="Your Email" />
            </div>
            <div>
              <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message" />
            </div>
            <button type="submit">Send</button> {state.succeeded && <p style={{ color: "green" }}>Thank you for your message! Wait for an answer soon.</p>}
          </form>
        </section>
        <section>
          <h2>Contact Info</h2>
          <div className={s.contactInfo}>
            <a href="mailto:obilonix@proton.me">
              <p>obilonix@proton.me</p>
            </a>
            <div>
              <a href="https://www.linkedin.com/in/pavel-kv94/" target={"_blank"} rel="noreferrer">
                <AiOutlineLinkedin size={46} />
              </a>
              <a href="https://t.me/pavel_mint" target={"_blank"} rel="noreferrer">
                <RiTelegramLine size={46} />
              </a>
              <a href="https://github.com/Pavelkv94" target={"_blank"} rel="noreferrer">
                <AiFillGithub size={46} />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={s.line}></div>
      <div className={s.copyright}>© Copyright - Pavel Kazlou {currentYear} | All Rights Reserved </div>
    </div>
  );
};
