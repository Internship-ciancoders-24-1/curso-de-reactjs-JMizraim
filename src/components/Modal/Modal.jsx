import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.Modal}>
      <div className={styles.Modal__container}>
        <button onClick={closeModal} className={styles["Modal__close-button"]}>
          X
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
