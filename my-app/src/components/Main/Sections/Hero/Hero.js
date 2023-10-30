import React from 'react';
import profilePhoto from '../../../../img/p2.webp'
import style from '../../../../App.module.scss'
import buttonStyle from '../../../../App.module.scss'
import {Link} from "../../../common elements/Button";


export const Hero = () => {
    return (
        <section className={style.sectionHero}>
            <div className={style.hero}>
                <div>
                    <h1 className={style.headingPrimary}>Hi there! I am Vlad Dukhovnik</h1>
                    <p className={style.heroDescription}>
                        Front-end developer
                    </p>
                    <Link class={`${buttonStyle.btn} ${buttonStyle.btnFull}`} name={'Contact me'}
                          href="#cta"/>
                    <Link class={`${buttonStyle.btn} ${buttonStyle.btnOutline}`} name={'My projects'}
                          href="#meals"/>
                </div>
                <div>
                    <picture>
                        <source srcSet={profilePhoto} type="image/webp"/>
                        <img src={profilePhoto} alt="Personal photo" className={style.heroImg}/>
                    </picture>
                </div>
            </div>
        </section>
    );
};
