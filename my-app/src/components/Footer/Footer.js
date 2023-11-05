import React from 'react';
import {FooterLink} from "./FooterLink";
import s from '../../App.module.scss'

export const Footer = () => {
    return (
        <footer className={s.sectionFooter}>
            <div className={`${s.container} ${s.grid} ${s.gridFooter}`}>
                <div className={s.addressCol}>
                    <p className={s.footerHeading}>Contact me : </p>
                    <address className={s.contacts}>
                        <p className={s.address}>Poland, Wroclaw </p>
                        <p>phone : </p>
                        <a className={s.footerLink} href="tel:+48794082843">+48794082843</a>
                        <p>gmail :</p>
                        <a className={s.footerLink} href="mailto:vdukhovnik1@gmail.com">vdukhovnik1@gmail.com</a>
                    </address>
                </div>
                <div className={s.logoCol}>
                    <p className={s.footerHeading}>Follow me on social media : </p>
                    <ul className={s.socialLinks}>
                        <FooterLink href={"https://github.com/uladzidu"} iName={'logo-github'}/>
                        <FooterLink href={"https://www.instagram.com/v_dukhovnik/"} iName={'logo-instagram'}/>
                        <FooterLink href={"https://www.facebook.com/vlad.dukhovnik"} iName={'logo-facebook'}/>
                        <FooterLink href={"https://www.linkedin.com/in/vlad-dukhovnik-542ab0190"}
                                    iName={'logo-linkedin'}/>
                    </ul>
                    <p className={s.copyright}>Copyright &copy; <span className="year">2000</span> by Dukhovnik, Inc.
                        <br/>All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

