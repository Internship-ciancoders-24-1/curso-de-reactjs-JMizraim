import React from "react";
import styles from "./Badge.module.css";
import badge from "../../assets/badge-header.svg";

import Grabatar from "../Grabatar";

const Badge = ({
  firstName,
  lastName,
  twitter,
  jobTitle,
  email,
}) => {
  return (
    <article className={styles.Badge}>
      <div className={styles.Badge__header}>
        <img src={badge} alt="badge" />
      </div>
      <div className={styles["Badge__section-name"]}>
        <Grabatar email={email} alt="avatar" className={styles.Badge__avatar}/>
        <h1>
          {firstName} <br />
          {lastName}
        </h1>
      </div>
      <div className={styles["Badge__section-info"]}>
        <p>{jobTitle}</p>
        <p>@{twitter}</p>
      </div>
      <footer className={styles.Badge__footer}>#platziconf</footer>
    </article>
  );
};

export default Badge;
