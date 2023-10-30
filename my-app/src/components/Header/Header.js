import React from "react";
import style from '../../App.module.scss'
import omnifoodLogo from "../../img/omnifood-project.jpg"
import {Introduction} from "../Main/Sections/How/Introduction";

export const Header = () => {
    return (
        <header className={style.header}>
            <a href="#">
                <img src={omnifoodLogo} alt="Omnifood logo" className={style.logo}/>
            </a>
            <nav className="main-nav">
                <ul className={style.mainNavList}>
                    <li><a className={style.mainNavLink} href="#introduction">Personal info</a></li>
                    <li><a className={style.mainNavLink} href="#testimonials">Tech Stack</a></li>
                    <li><a className={style.mainNavLink} href="#meals">Projects</a></li>
                    <li><a className={`${style.mainNavLink} ${style.navCta}`} href="#cta">Contact me</a></li>
                </ul>
            </nav>
            <button className={style.btnMobileNav}>
                <ion-icon className={style.iconMobNav} name="menu-outline"></ion-icon>
                <ion-icon className={style.iconMobNav} name="close-outline"></ion-icon>
            </button>
        </header>
    )
}




