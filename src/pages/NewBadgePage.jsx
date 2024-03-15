import React, { useState } from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../assets/platziconf-logo.svg";
import styles from "./styles/NewBadge.module.css";

import LoadingPage from "./LoadingPage";

import { useNavigate } from "react-router-dom";

import md5 from "md5";

const NewBadgePage = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:3000/badges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formValues,
        avatarUrl: `https://www.gravatar.com/avatar/${md5(
          formValues.email
        )}?d=identicon`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/badges");
      })
      .catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
        setError(null);
      });
  };

  if (loading) return <LoadingPage />;

  return (
    <>
      <div className={styles.NewBadge__hero}>
        <img
          className={styles["NewBadge__hero-image"] + " img-fluid"}
          src={header}
          alt="Logo"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={formValues.firstName || "First Name"}
              lastName={formValues.lastName || "Last Name"}
              email={formValues.email || "Email"}
              jobTitle={formValues.jobTitle || "Job Title"}
              twitter={formValues.twitter || "Twitter"}
            />
          </div>
          <div className="col">
            <h1>New Attendant</h1>
            <BadgeForm
              formValues={formValues}
              onChange={onChange}
              onSubmit={onSubmit}
            />
            {error && (
              <div className="mt-4 alert alert-danger">{error.message}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBadgePage;
