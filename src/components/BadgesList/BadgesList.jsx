import React from "react";

import styles from "./BadgesList.module.css";

const BadgesList = ({badges}) => {
  return (
    <div className={styles.BadgesList}>
      <ul className="list-unstyled">
        {badges.map((badge) => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BadgesListItem = ({badge}) => {
  return (
    <div className={styles.BadgesListItem}>
      <img
        className={styles.BadgesListItem__avatar}
        src={badge.avatarUrl}
        alt={`${badge.firstName} ${badge.lastName}`}
      />

      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </div>
    </div>
  );
};

export default BadgesList;
