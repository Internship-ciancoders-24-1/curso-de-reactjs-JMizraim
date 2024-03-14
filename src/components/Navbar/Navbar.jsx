import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className="container-fluid">
        <a className={styles.Navbar__brand}>
          <img className={styles["Navbar__brand-logo"]} src={logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
