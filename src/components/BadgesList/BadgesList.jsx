import { useState, useEffect, useMemo } from "react";

import styles from "./BadgesList.module.css";
import { Link } from "react-router-dom";
import useSWR from "swr";

const BadgesList = () => {
  const {
    data: badges,
    isLoading,
    error,
  } = useSWR(
    "http://localhost:3000/badges",
    (url) => fetch(url).then((response) => response.json()),
    {
      refreshInterval: 1000,
    }
  );

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setFilter(badges);
  }, [badges]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="form-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            const result = badges.filter((badge) => {
              return (
                badge.firstName.toLowerCase().includes(value) ||
                badge.lastName.toLowerCase().includes(value)
              );
            });
            setFilter(result);
          }}
        />
      </div>
      {!filter || filter.length === 0 ? (
        <p>No hay badges</p>
      ) : (
        <div className={styles.BadgesList}>
          <ul className="list-unstyled">
            {filter.map((badge) => {
              return (
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}/details`}
                  >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
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
