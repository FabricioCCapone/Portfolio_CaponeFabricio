import React from 'react';
import styles from './Body.module.css';
import WordCycler from './WordCycler.jsx';

export const Body = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <span className={styles.span}>Welcome to my portfolio,</span>
                <h1 className={styles.h1}>I'm Fabricio.
                    <span className={styles.WordCycler}><WordCycler /></span>
                </h1>
            </div>
            <div>

            </div>
            <div>
                <main className={styles.main}> I am a <span>Software Engineer</span> with experince working with Java, Javascript and
                    Python. I have worked with different technologies and frameworks such as Spring,
                    React, among others; version control with Git and Database with MySQL and MongoDB. I am also studying for a bachelor's degree in
                    computer science. I am looking for a job opportunity that will allow me
                    to grow as a professional and to put to work all the skills that I have acquired over the years.
                </main>
            </div>
        </div>
    );
}

export default Body;