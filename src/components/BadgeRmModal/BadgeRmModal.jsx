import ErrorPage from "../../pages/ErrorPage";
import LoadingPage from "../../pages/LoadingPage";
import Modal from "../Modal";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const BadgeRmModal = ({ isOpen, closeModal }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteBadge = () => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/badges/${params.badgeId}`, {
      method: "DELETE",
    })
      .then((res) => {
        navigate("/badges");
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        closeModal();
        setIsDeleting(false);
        setError(null);
      });
  };

  if (isDeleting) return <LoadingPage />;
  if (error) return <ErrorPage error={error} />;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="font-color-secundary">Are you sure?</h1>
      <p>You are about to delete this badge.</p>
      <div>
        <button onClick={deleteBadge} className="btn btn-danger mr-4">
          Delete
        </button>
        <button onClick={closeModal} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default BadgeRmModal;
