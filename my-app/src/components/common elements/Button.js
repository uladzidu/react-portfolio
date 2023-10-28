import React from 'react';

export const Link = (props) => {
    return (
        <div>
            <a href={props.href} className={props.class} target={props.target}>{props.name}</a>
        </div>
    );
};

