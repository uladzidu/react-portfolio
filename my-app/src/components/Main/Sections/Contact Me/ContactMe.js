import React from 'react';
import s from '../../../../App.module.scss'

export const ContactMe = () => {
    return (
        <section className={s.sectionContactMe} id="cta">
            <div className={s.container}>
                <div className={s.cta}>
                    <div className={s.ctaTextBox}>
                        <h2 className={s.headingSecondary}>I'm eager to discuss how my skills align with your company's
                            vision</h2>
                        <p className={s.ctaText}>
                            I look forward to the opportunity to collaborate and learn from each of you. Please feel
                            free to
                            reach out to me if there are any projects, initiatives, or discussions where my background
                            could
                            be beneficial. I believe that cross-functional collaboration is where some of the most
                            innovative ideas are born, and I'm excited to be a part of it.
                        </p>
                        <form className={s.ctaForm} name="sign-up" netlify>
                            <div>
                                <label htmlFor="full-name">Full name</label>
                                <input id="full-name"
                                       name="full-name"
                                       type="text"
                                       placeholder="John Smith"
                                       required/>
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input id="email"
                                       name="email"
                                       type="email"
                                       placeholder="me@example.com"
                                       required/>
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <input id="message"
                                       name="message"
                                       type="text"
                                       placeholder="Type the message"
                                       required/>
                            </div>
                            <button className={`${s.btn} ${s.btnForm}`}>Send</button>
                        </form>
                    </div>
                    <div className={s.ctaImgBox}
                         role="img"
                         aria-label="Aria Label">

                    </div>
                </div>
            </div>
        </section>
    );
};
