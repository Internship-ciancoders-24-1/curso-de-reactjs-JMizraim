import React from "react";

import styles from "./BadgesList.module.css";
import { Link } from "react-router-dom";

const BadgesList = ({ badges }) => {
  return (
    <div className={styles.BadgesList}>
      <ul className="list-unstyled">
        {badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BadgesListItem = ({ badge }) => {
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
