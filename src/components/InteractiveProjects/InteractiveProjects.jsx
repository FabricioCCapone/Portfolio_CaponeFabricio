import React, { useState } from "react";
import styles from "./InteractiveProjects.module.css";

const projects = [
  {
    title: "Queued",
    description:
      "Queued is a dynamic web application designed to help users manage their movie-watching journey. \
      Built using the MERN stack (MongoDB, Express, React, and Node.js), the app allows users to create an account and maintain a personalized list of watched movies.\
      The idea for Queued came from my hobby of watching movies and wanting to keep track of the ones I've seen and the ones I want to watch.",
  },
  {
    title: "Adogcatme",
    description: "Adogcatme is a full-stack web application that helps users find their perfect pet match. \
    The app was built in a team of five using Java, Spring Boot, Maven and MySQL. \
    Adogcatme allows users to create an account, browse pets, and find their perfect match based on their preferences. \
    It also allows user to register and publish pets for adoptions. It also implements a messaging feature between users..",
  },
  {
    title: "SafeRoad",
    description: "SafeRoad is a webpage that provides users with information about road safety in an interactive in fun way. \
    The page was created by a team of five as a project in my bachelors degree. On the page, you can find information and games related to \
    road safety. The page was built using HTML, CSS, and JavaScript.",
  },
];

const InteractiveProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div className={styles.expandableList}>
      <div className={styles.activeProject}>
        <h2>{projects[activeIndex].title}</h2>
        <p>{projects[activeIndex].description}</p>
      </div>
      <div className={styles.minimizedProjects}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${
              activeIndex === index ? styles.activeButton : styles.inactiveButton
            }`}
            onClick={() => handleClick(index)}
          >
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveProjects;
