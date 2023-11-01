import React from 'react';
import style from '../../../../App.module.scss'

export const Step = ({number,text}) => {
    return (
        <figure>
            <p className={style.stepNumber}>{number}</p>
            <div className={style.techText}>
                {text}
            </div>
        </figure>
    );
};