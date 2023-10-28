import React from 'react';
import profilePhoto from '../../../../img/p2.webp'
import mStyle from '../../../../App.module.scss'
import buttonStyle from '../../../../App.module.scss'
import {Link} from "../../../common elements/Button";


export const Hero = () => {
    return (
        <section className={mStyle.sectionHero}>
            <div className={mStyle.hero}>
                <div>
                    <h1 className="heading-primary">Hi there! I am Vlad Dukhovnik</h1>
                    <p className={mStyle.heroDescription}>
                        Front-end developer
                    </p>
                    <Link class={`${buttonStyle.btn} + ${buttonStyle.btnFull}`} name={'Contact me'}
                          href="#cta"/>
                    <Link class={`${buttonStyle.btn} + ${buttonStyle.btnOutline}`} name={'My projects'}
                          href="#meals"/>
                </div>
                <div>
                    <picture>
                        <source srcSet={profilePhoto} type="image/webp"/>
                        <img src={profilePhoto} alt="Personal photo" className={mStyle.heroImg}/>
                    </picture>
                </div>
            </div>
        </section>
    );
};
