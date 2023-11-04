import React from 'react';
import s from '../../../../App.module.scss'

export const Project = (
    {
        name, href, img, feature1, feature2, feature3, feature4, iName1, iName2, iName3, iName4
    }
) => {
    return (
        <div>
            <a href={href} target="_blank" className={`${s.project} ${s.projectLink}`}>
                <img src={img} alt={`${name}ImgAlt`}/>
                <div className={s.projectContent}>
                    <p className={s.projectTitle}>{name}</p>
                    <div className={s.projectTags}>
                        <ul className={s.projectAttributes}>
                            <li>
                                <ion-icon name={iName1}></ion-icon>
                                <span><strong>{feature1}</strong></span>
                            </li>
                            <li>
                                <ion-icon name={iName2}></ion-icon>
                                <span><strong>{feature2}</strong></span>
                            </li>
                            <li>
                                <ion-icon name={iName3}></ion-icon>
                                <span><strong>{feature3}</strong></span>
                            </li>
                            <li>
                                <ion-icon name={iName4}></ion-icon>
                                <span><strong>{feature4}</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
};
