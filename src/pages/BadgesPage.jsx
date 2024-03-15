import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";

import styles from "./styles/Badges.module.css";
import confLogo from "../assets/badge-header.svg";

const Badges = () => {

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
        <BadgesList />
      </div>
    </>
  );
};

export default Badges;
