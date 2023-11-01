import React from 'react';
import {Hero} from "./Sections/Hero/Hero";
import {TechStack} from "./Sections/TechStack/TechStack";
import {Introduction} from "./Sections/Introduction/Introduction";
import {Projects} from "./Sections/Projects/Projects";

export const Main = () => {
    return (
        <div>
            <Hero/>
            <Introduction/>
            <TechStack/>
            <Projects/>
        </div>
    );
};
