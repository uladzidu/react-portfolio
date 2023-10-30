import React from 'react';
import style from '../../../../App.module.scss'
import img1 from '../../../../img/1307940-removebg-preview.png'
import img2 from '../../../../img/blake-connally-B3l0g6HLxr8-unsplash.jpg'
import img3 from '../../../../img/360_F_325359107_n36PW8zVjl3XQKFueA9EufnHAaj6tIxW.jpg'


export const Introduction = () => {
    return (
        <section className={style.sectionIntroduction} id="introduction">
            <div className={style.container}>
            </div>

            <div className={`${style.container} ${style.grid} ${style.grid2Cols} ${style.gridCenterV}`}>
                {/*STEP 01*/}
                <div className={style.stepImgBox}>
                    <img className={`${style.stepImg} ${style.img1}`}
                         src={img1}
                         alt="step1"/>
                </div>
                <div>
                    <h3 className={`${style.headingTertiary} ${style.first}`}>My name is Vlad </h3>
                    <p className={style.stepDescription}>and I am a passionate frontend developer
                        based in Wroclaw, Poland. My journey in the world of web development began with a curiosity for
                        creating
                        captivating digital experiences that combine aesthetics and functionality seamlessly. </p>
                </div>
                {/*STEP 02*/}
                <div>
                    <h3 className={style.headingTertiary}>As a firm believer</h3>
                    <p className={style.stepDescription}> in the power of frontend technologies, I have immersed myself
                        in
                        mastering
                        the art of HTML, CSS, and JavaScript, and I continually explore cutting-edge frameworks and
                        libraries such as React, Redux and others to stay ahead of the evolving digital landscape. </p>
                </div>
                <div className={style.stepImgBox}>
                    <img className={`${style.stepImg} ${style.img2}`}
                         src={img2}
                         alt="step2"/>
                </div>

                {/*STEP 03*/}
                <div className={style.stepImgBox}>
                    <img className={`${style.stepImg} ${style.img3}`}
                         src={img3}
                         alt="step3"/>
                </div>
                <div>
                    <h3 className={style.headingTertiary}>Through my dedication and commitment</h3>
                    <p className={style.stepDescription}> to delivering pixel-perfect designs and clean, efficient code,
                        I
                        aim to
                        contribute my part to the ever-growing web development community. I am enthusiastic about
                        collaborating with like-minded individuals and teams, as I believe that teamwork and shared
                        knowledge are essential drivers of innovation in this field.</p>
                </div>
            </div>
            <div className={style.introductionText}>

                <h2 className={`${style.headingSecondary}${style.introductionText}`}>I invite you to explore my projects
                    and get to
                    know me better as a frontend developer. </h2>
            </div>
        </section>
    );
};
