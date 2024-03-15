import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className="container-fluid">
        <Link to={"/badges"} className={styles.Navbar__brand}>
          <img className={styles["Navbar__brand-logo"]} src={logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
