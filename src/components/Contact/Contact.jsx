import React from "react";
import s from "./Contact.module.scss";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { useForm } from "@formspree/react";

export const Contact = () => {
    const [state, handleSubmit] = useForm("xzbyvjwk");

    return (
        <div className={s.contactWrapper}>
            <div className={s.contact}>
                <section>
                    <h2>Get In Touch.</h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Your Message"
                                resize="none"
                            />
                        </div>

                        <button type="submit">Send</button> {state.succeeded && <p style={{color: 'green'}}>Thank you for your message! Wait for an answer soon.</p>}
                    </form>
                </section>
                <section>
                    <h2>Contact Info.</h2>
                    <a href="mailto:pavel.kv94@yandex.by"><p>pavel.kv94@yandex.by</p></a>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/pavel-kv94/"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <AiOutlineLinkedin size={46} />
                        </a>
                        <a
                            href="https://t.me/pavel_kv94"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <RiTelegramLine size={46} />
                        </a>
                        <a
                            href="https://github.com/Pavelkv94"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <AiFillGithub size={46} />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};
