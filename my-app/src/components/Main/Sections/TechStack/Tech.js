import React from 'react';
import style from '../../../../scss/Tech.module.scss'

export const Tech = ({name, img}) => {
    return (
        <figure className={style.galleryItem}>
            <img src={img} alt={`${name}Img`}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
};