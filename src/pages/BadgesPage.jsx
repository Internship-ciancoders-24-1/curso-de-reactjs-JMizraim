import React from "react";

import { Link } from "react-router-dom";

import useSWR from "swr";

import BadgesList from "../components/BadgesList";

import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import styles from "./styles/Badges.module.css";
import confLogo from "../assets/badge-header.svg";

const Badges = () => {
  const {
    data: badges,
    isLoading,
    error,
  } = useSWR("http://localhost:3000/badges", (url) =>
    fetch(url).then((response) => response.json()), {
      refreshInterval: 1000,
    }
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage messageError={error.message} />;
  }

  if (!badges || badges.length === 0) {
    return <p>No hay badges</p>;
  }

  return (
    <>
      <div className={styles.Badges}>
        <div className={styles.Badges__hero}>
          <div className={styles.Badges__container}>
            <img
              className={styles["Badges_conf-logo"]}
              src={confLogo}
              alt="logo de conferencia"
            />
          </div>
        </div>
      </div>
      <div className={styles.Badges__container}>
        <div className={styles.Badges__buttons}>
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <BadgesList badges={badges} />
      </div>
    </>
  );
};

export default Badges;
