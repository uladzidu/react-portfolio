import React from 'react';
import {Project} from "./Project";
import s from '../../../../App.module.scss'
import omniFood from '../../../../img/omnifood-project.jpg'
import learningCards from '../../../../img/cards.jpg'
import todolist from '../../../../img/todolist-project.jpg'

export const Projects = () => {
    return (
        <section className={s.sectionProjects} id="projects">
            <div className={`${s.container} ${s.centerText}`}>
                <h2 className={s.headingSecondary}>Projects</h2>
            </div>
            <div className={`${s.container} ${s.grid} ${s.grid3Cols} ${s.marginBottomMd}`}>
                <Project
                    name={'Omnifood'}
                    img={omniFood}
                    href={"https://omnifood-dukhovnik.netlify.app/"}
                    feature1={'Sign Up or Log In'}
                    feature2={'Enter Your Location'}
                    feature3={'Customize Order'}
                    feature4={'Complete Payment'}
                    iName1={'log-in-outline'}
                    iName2={"location-outline"}
                    iName3={'fast-food-outline'}
                    iName4={'wallet-outline'}
                />
                <Project
                    name={'Learning cards'}
                    img={learningCards}
                    href={"https://karinaol.github.io/cards_project/"}
                    feature1={'Create a Card Set'}
                    feature2={'Add Learning Cards'}
                    feature3={'Review and Practice'}
                    feature4={'Monitor Progress'}
                    iName1={"card-outline"}
                    iName2={"add-circle-outline"}
                    iName3={"eye-outline"}
                    iName4={"star-outline"}
                />
                <Project
                    name={'To Do list'}
                    img={todolist}
                    href={"https://uladzidu.github.io/to-do-list"}
                    feature1={'Create Your Account'}
                    feature2={'Add Your Tasks'}
                    feature3={'Track Your Progress'}
                    feature4={'Elevate productivity'}
                    iName1={"log-in-outline"}
                    iName2={"add-circle-outline"}
                    iName3={"eye-outline"}
                    iName4={"analytics-outline"}
                />

            </div>
        </section>
    );
};
