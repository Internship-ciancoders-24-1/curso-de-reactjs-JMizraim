import React, { useState } from "react";

import useSWR from "swr";
import "./styles/DetailsBadgePage.css";
import confLogo from "../assets/platziconf-logo.svg";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import BadgeRmModal from "../components/BadgeRmModal";

const DetailsBadgePage = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  }

  const {
    data: badge,
    isLoading,
    error,
  } = useSWR(`http://localhost:3000/badges/${params.badgeId}`, (url) =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <div className="BadgeDetails-hero">
        <div className="container BadgeDetails__container">
          <img className="Badge-logo" src={confLogo} alt="Platzi Conf logo" />
          <h1 className="BadgeDetails__name">{`${badge.firstName} ${badge.lastName}`}</h1>
        </div>
      </div>
      <div className="container BadgeDetails__container">
        <div className="row">
          <Badge {...badge} />
        </div>
        <div className="row">
          <h2>Actions:</h2>
          <Link
            to={`/badges/${badge.id}/edit`}
            className="btn btn-primary link-unstyled"
          >
            Edit
          </Link>
          <button onClick={handleToggleModal} className="btn btn-danger">
            Delete
          </button>
          <BadgeRmModal isOpen={isOpen} closeModal={handleToggleModal} />
        </div>
      </div>
    </>
  );
};

export default DetailsBadgePage;
