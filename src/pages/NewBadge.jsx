import React, { useState} from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../assets/badge-header.svg";
import styles from "./styles/NewBadge.module.css";

const NewBadge = () => {

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  });

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className={styles.NewBadge__hero}>
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={formValues.firstName}
              lastName={formValues.lastName}
              email={formValues.email}
              jobTitle={formValues.jobTitle}
              twitter={formValues.twitter}
            />
          </div>
          <div className="col">
            <BadgeForm formValues={formValues} onChange={onChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBadge;
