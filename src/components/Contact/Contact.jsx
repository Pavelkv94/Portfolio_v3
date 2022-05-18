import React from "react";
import s from "./Contact.module.scss";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

export const Contact = () => {
    return (
        <div className={s.contactWrapper}>
            <div className={s.contact}>
                <section>
                    <h2>Get In Touch.</h2>
                    <div>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                            resize="none"
                        />
                    </div>

                    <a>Send</a>
                </section>
                <section>
                    <h2>Contact Info.</h2>
                    <p>pavel.kv94@yandex.com</p>
                    <div>
                        <AiOutlineLinkedin size={46} />
                        <RiTelegramLine size={46} />
                    </div>
                </section>
            </div>
        </div>
    );
};
