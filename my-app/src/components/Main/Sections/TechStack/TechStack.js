import React from 'react';
import {Tech} from "./Tech";
import style from "../../../../App.module.scss"
import img1 from '../../../../img/gallery/html-1.svg'


export const TechStack = () => {
    return (
        <section className={style.sectionTechStack} id="testimonials">

            <div className={style.techStackContainer}>
                <h2 className={style.headingSecondary}>Stack of technologies</h2>
                <div className={style.technologies}>
                    <figure>
                        <p>01</p>
                        <div className={style.techText}>
                            I graduated from a prestigious Belarusian tech university.
                            After completing my formal education, I recognized the importance of staying up-to-date with the
                            latest advancements in the tech industry.
                        </div>
                    </figure>
                    <figure>
                        <p>02</p>
                        <div className={style.techText}>
                            Eager to deepen my knowledge of JavaScript and frontend technologies, I embarked on a nine-month
                            intensive course focused on mastering the intricacies of the language.
                        </div>
                    </figure>
                    <figure>
                        <p>03</p>
                        <div className={style.techText}>
                            Throughout this comprehensive program, I delved into the core concepts of JavaScript, exploring
                            its advanced functionalities and best practices.
                            The highlight of this course was the hands-on experience gained by working on real-world
                            projects.
                        </div>
                    </figure>
                    <figure>
                        <p>04</p>
                        <div className={style.techText}>
                            I had the chance to immerse myself in the world of React and Redux, building dynamic and
                            interactive user interfaces. These projects allowed me to refine my skills in creating
                            responsive web applications while harnessing the power of state management with Redux.
                        </div>
                    </figure>
                </div>
            </div>
            <div className={style.galery}>
                <figure class="gallery-item">
                    <img src="img/gallery/html-1.svg" alt="Photo of beautifully arranged food"/>
                        <figcaption>html 5</figcaption>
                </figure>
                <Tech name={'html 5'} img={img1}/>
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/css-3.svg" alt="Photo of beautifully arranged food"/>*/}
                {/*        <figcaption>css 3</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/logo-javascript.svg" alt="Photo of beautifully arranged food"/>*/}
                {/*        <figcaption>js</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/react-2.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>react</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/redux.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>redux</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/typescript-2.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>ts</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/material-ui-1.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>mui</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/git-logo.png" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>git</figcaption>*/}
                {/*</figure>*/}
                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/postman.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>postman</figcaption>*/}
                {/*</figure>*/}


                {/*<figure class="gallery-item">*/}
                {/*    <img src="img/gallery/sass-1.svg" alt="Photo of beautifully arranged food">*/}
                {/*        <figcaption>sass</figcaption>*/}
                {/*</figure>*/}

            </div>
        </section>
    );
};
