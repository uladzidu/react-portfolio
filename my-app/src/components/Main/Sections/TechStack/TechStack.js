import React from 'react';
import {Tech} from "./Tech";
import style from "../../../../App.module.scss"
import html5 from '../../../../img/gallery/html-1.svg'
import css3 from '../../../../img/gallery/css-3.svg'
import js from '../../../../img/gallery/javascript-1.svg'
import react from '../../../../img/gallery/react-2.svg'
import redux from '../../../../img/gallery/redux.svg'
import ts from '../../../../img/gallery/typescript-2.svg'
import mui from '../../../../img/gallery/material-ui-1.svg'
import git from '../../../../img/gallery/git-logo.png'
import postman from '../../../../img/gallery/postman.svg'
import sass from '../../../../img/gallery/sass-1.svg'
import {Step} from "./Step";

export const TechStack = () => {
    return (
        <section className={style.sectionTechStack} id="testimonials">

            <div className={style.techStackContainer}>
                <h2 className={style.headingSecondary}>Stack of technologies</h2>
                <div className={style.technologies}>
                    <Step number={'01'}
                          text={'I graduated from a prestigious Belarusian tech university. After completing my formal education, I recognized the importance of staying up-to-date with the latest advancements in the tech industry.'}/>
                    <Step number={'02'}
                          text={'Eager to deepen my knowledge of JavaScript and frontend technologies, I embarked on a nine-month intensive course focused on mastering the intricacies of the language.'}/>
                    <Step number={'03'}
                          text={'Throughout this comprehensive program, I delved into the core concepts of JavaScript, exploring its advanced functionalities and best practices. The highlight of this course was the hands-on experience gained by working on real-world projects.'}/>
                    <Step number={'04'}
                          text={'I had the chance to immerse myself in the world of React and Redux, building dynamic and interactive user interfaces. These projects allowed me to refine my skills in creating responsive web applications while harnessing the power of state management with Redux.'}/>
                </div>
            </div>
            <div className={style.gallery}>
                <Tech name={'html 5'} img={html5}/>
                <Tech name={'css 3'} img={css3}/>
                <Tech name={'js'} img={js}/>
                <Tech name={'react'} img={react}/>
                <Tech name={'redux'} img={redux}/>
                <Tech name={'ts'} img={ts}/>
                <Tech name={'mui'} img={mui}/>
                <Tech name={'git'} img={git}/>
                <Tech name={'postman'} img={postman}/>
                <Tech name={'sass'} img={sass}/>
            </div>
        </section>
    );
};
