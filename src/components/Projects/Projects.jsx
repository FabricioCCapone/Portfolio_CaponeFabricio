import React from "react";
import styles from "./Projects.module.css";
import InteractiveProjects from "../InteractiveProjects/InteractiveProjects";

const Projects = () => {
    return (
        <section className={styles.projects}>
            <div>
                <span className={styles.span}>These are some of the projects I have created and worked on...</span>
            </div>
            <div>
                <InteractiveProjects />
            </div>
            <span className={styles.span}>Technologies used:</span>
            <div className={styles.technologies}>
                <img src="/javascript-color.svg" className={styles.icons} alt="" />
                <img src="/mongodb-color.svg" className={styles.icons} alt="" />
                <img src="/express-color.svg" className={styles.icons} alt="" />
                <img src="/react-color.svg" className={styles.icons} alt="" />
                <img src="/nodedotjs-color.svg" className={styles.icons} alt="" />
                <img src="/java-color.svg" className={styles.icons} alt="" />
                <img src="/springboot-color.svg" className={styles.icons} alt="" />
                <img src="/mysql-color.svg" className={styles.icons} alt="" />
                <img src="/python-color.svg" className={styles.icons} alt="" />
            </div>
        </section>
    );
};

export default Projects;