import React from 'react';
import s from '../../App.module.scss'

export const FooterLink = ({
                               href, iName
                           }) => {
    return (
        <li>
            <a className={s.footerLink} target="_blank"
               href={href}>
                <ion-icon className={s.socialIcon} name={iName}></ion-icon>
            </a>
        </li>
    );
};

