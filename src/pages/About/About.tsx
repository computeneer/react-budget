import React from "react";
import styles from "styles/about.module.scss";
import aboutus from "data/about-us";
import AboutItem from "components/About/AboutItem";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className={styles.about_container}>
      {aboutus &&
        aboutus.map((about, index) => (
          <AboutItem aboutUs={about} index={index} key={about.id} />
        ))}
    </div>
  );
};

export default About;
