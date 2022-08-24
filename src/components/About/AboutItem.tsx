import { IAboutUs } from "data/about-us";
import React from "react";
import styles from "styles/about.module.scss";

type AboutItemProps = {
  index: number;
  aboutUs: IAboutUs;
};

const AboutItem: React.FC<AboutItemProps> = ({ index, aboutUs }) => {
  const style = index % 4 === 0 || index % 4 === 3;
  return (
    <div
      className={style ? `${styles.about}` : `${styles.about} ${styles.col_2}`}
    >
      <div className={styles.title}>{aboutUs.title}</div>
      <hr />
      <div className={styles.description}>{aboutUs.description}</div>
    </div>
  );
};

export default AboutItem;
