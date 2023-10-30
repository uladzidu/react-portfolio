import React from 'react';
import {Hero} from "./Sections/Hero/Hero";
import {TechStack} from "./Sections/TechStack/TechStack";
import {Introduction} from "./Sections/Introduction/Introduction";

export const Main = () => {
    return (
        <div>
            <Hero/>
            <Introduction/>
            <TechStack/>
        </div>
    );
};
