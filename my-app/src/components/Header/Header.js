import React from "react";
import style from '../../App.module.scss'
import omnifoodLogo from "../../img/omnifood-project.jpg"

export const Header = () => {
    return (
        <header className={style.header}>
            <a href="#">
                <img src={omnifoodLogo} alt="Omnifood logo" className={style.logo}/>
            </a>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="#how">Personal info</a></li>
                    <li><a className="main-nav-link" href="#testimonials">Tech Stack</a></li>
                    <li><a className="main-nav-link" href="#meals">Projects</a></li>
                    <li><a className="main-nav-link nav-cta" href="#cta">Contact me</a></li>
                </ul>
            </nav>
            <button className="btn-mobile-nav">
                <ion-icon className="icon-mob-nav" name="menu-outline"></ion-icon>
                <ion-icon className="icon-mob-nav" name="close-outline"></ion-icon>
            </button>
        </header>
    )
}




