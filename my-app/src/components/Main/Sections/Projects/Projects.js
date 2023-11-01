import React from 'react';
import {Project} from "./Project";
import s from '../../../../App.module.scss'
import omniFood from '../../../../img/omnifood-project.jpg'

export const Projects = () => {
    return (
        <section className={s.sectionProjects} id="projects">
            <div className={`${s.container} ${s.centerText}`}>
                <h2 className={s.headingSecondary}>Projects</h2>
            </div>
            <div className={`${s.container} ${s.grid} ${s.grid3Cols} ${s.marginBottomMd}`}>
                {/*<a href="https://omnifood-dukhovnik.netlify.app/" target="_blank" className="meal project-link">*/}
                {/*    <img className="meal-img" src="img/omnifood-project.jpg" alt="Responsive Website project"/>*/}
                {/*        <div className="meal-content">*/}
                {/*            <p className="meal-title">Omnifood</p>*/}
                {/*            <div className="meal-tags">*/}
                {/*                <ul className="meal-attributes">*/}
                {/*                    <li className="meal-attribute">*/}
                {/*                        <ion-icon className="meal-icon" name="log-in-outline"></ion-icon>*/}
                {/*                        <span><strong>Sign Up or Log In</strong></span>*/}
                {/*                    </li>*/}
                {/*                    <li className="meal-attribute">*/}
                {/*                        <ion-icon className="meal-icon" name="location-outline"></ion-icon>*/}
                {/*                        <span><strong>Enter Your Location</strong></span>*/}
                {/*                    </li>*/}
                {/*                    <li className="meal-attribute">*/}
                {/*                        <ion-icon className="meal-icon" name="fast-food-outline"></ion-icon>*/}
                {/*                        <span><strong>Customize Order</strong></span>*/}
                {/*                    </li>*/}
                {/*                    <li className="meal-attribute">*/}
                {/*                        <ion-icon className="meal-icon" name="wallet-outline"></ion-icon>*/}
                {/*                        <span><strong>Complete Payment</strong></span>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*</a>*/}
                <Project name={'Omnifood'} img={omniFood} href={"https://omnifood-dukhovnik.netlify.app/"}/>
                <div className="meal-tags">
                    <ul className="meal-attributes">
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="log-in-outline"></ion-icon>
                            <span><strong>Sign Up or Log In</strong></span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="location-outline"></ion-icon>
                            <span><strong>Enter Your Location</strong></span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="fast-food-outline"></ion-icon>
                            <span><strong>Customize Order</strong></span>
                        </li>
                        <li className="meal-attribute">
                            <ion-icon className="meal-icon" name="wallet-outline"></ion-icon>
                            <span><strong>Complete Payment</strong></span>
                        </li>
                    </ul>
                </div>
                <a href="https://karinaol.github.io/cards_project/" target="_blank" className="meal project-link">
                    <img className="meal-img" src="img/cards.jpg" alt="learning cards"/>
                    <div className="meal-content">
                        <p className="meal-title">Learning cards</p>
                        <div className="meal-tags">
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="card-outline"></ion-icon>
                                    <span><strong>Create a Card Set</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="add-circle-outline"></ion-icon>
                                    <span><strong>Add Learning Cards</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="eye-outline"></ion-icon>
                                    <span><strong>Review and Practice</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                                    <span><strong>Monitor Progress</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a href="https://uladzidu.github.io/to-do-list" target="_blank" className="meal project-link">
                    <img className="meal-img" src="img/todolist-project.jpg" alt="todolist-project"/>
                    <div className="meal-content">
                        <p className="meal-title">To Do list</p>
                        <div className="meal-tags">
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="log-in-outline"></ion-icon>
                                    <span><strong>Create Your Account</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="add-circle-outline"></ion-icon>
                                    <span><strong>Add Your Tasks</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="eye-outline"></ion-icon>
                                    <span><strong>Track Your Progress</strong></span>
                                </li>
                                <li class="meal-attribute">
                                    <ion-icon class="meal-icon" name="analytics-outline"></ion-icon>
                                    <span><strong>Elevate productivity</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    );
};
