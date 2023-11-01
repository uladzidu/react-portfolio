import React from 'react';
import s from '../../../../App.module.scss'

export const Project = ({name, href, img}) => {
    return (
        <div>
            <a href={href} target="_blank" className={`${s.project} ${s.projectLink}`}>
                <img src={img} className={s.projectImg} alt={`${name}ImgAlt`}/>
                <div className={s.projectContent}>
                    <p className={s.projectTitle}>{name}</p>
                    <div className={s.projectTags}>
                        <ul className={s.projectAttributes}>
                            <li>
                                <ion-icon className={s.projectIcon} name="log-in-outline"></ion-icon>
                                <span><strong>Sign Up or Log In</strong></span>
                            </li>
                            <li>
                                <ion-icon className={s.projectIcon} name="location-outline"></ion-icon>
                                <span><strong>Enter Your Location</strong></span>
                            </li>
                            <li>
                                <ion-icon className={s.projectIcon} name="fast-food-outline"></ion-icon>
                                <span><strong>Customize Order</strong></span>
                            </li>
                            <li>
                                <ion-icon className={s.projectIcon} name="wallet-outline"></ion-icon>
                                <span><strong>Complete Payment</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
};
