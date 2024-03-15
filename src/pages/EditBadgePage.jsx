import React, { useEffect, useState } from "react";

import useSWR from "swr";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../assets/platziconf-logo.svg";
import styles from "./styles/NewBadge.module.css";

import LoadingPage from "./LoadingPage";

import { useNavigate, useParams } from "react-router-dom";

import md5 from "md5";
import ErrorPage from "./ErrorPage";

const EditBadgePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  });

  const {
    data: badge,
    isLoading,
    error,
  } = useSWR(`http://localhost:3000/badges/${params.badgeId}`, (url) =>
    fetch(url).then((response) => response.json())
  );

  useEffect(() => {
    if (badge) {
      const { id, ...rest } = badge;
      setFormValues(rest);
    }
  }, [badge]);

  const [updateError, setUpdateError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    fetch(`http://localhost:3000/badges/${params.badgeId}`, {
      method: "PUT",
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
        setIsUpdating(false);
      })
      .catch((updateError) => {
        setIsUpdating(false);
        setUpdateError(updateError);
      });
  };

  if (isUpdating || isLoading) return <LoadingPage />;
  if (error) return <ErrorPage messageError={error.message} />;

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
            <h1>Edit Attendant</h1>
            <BadgeForm
              formValues={formValues}
              onChange={onChange}
              onSubmit={onSubmit}
            />
            {updateError && (
              <div className="mt-4 alert alert-danger">
                {updateError.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBadgePage;
