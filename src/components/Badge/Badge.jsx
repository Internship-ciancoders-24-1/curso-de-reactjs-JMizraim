import React from "react";
import styles from "./Badge.module.css";
import badge from "../../assets/badge-header.svg";
import avatar from "../../assets/avatar.svg";

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
        <img src={avatar} alt="avatar" style={{ width: 100 }} />
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
