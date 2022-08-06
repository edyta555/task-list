import ReactDOM from "react-dom";

import Card from "../card/Card";
import Button from "../button/Button";

import styles from "./error-modal.module.scss";

const Curtain = ({ onAccept }) => {
  return <div className={styles.background} onClick={onAccept}></div>;
};

const Modal = ({ errorTitle, errorMessage, onAccept }) => {
  return (
    <Card inputCardStyles={styles["modal-container"]}>
      <header className={styles.header}>
        <h3>{errorTitle}</h3>
      </header>
      <div className={styles["error-message-container"]}>
        <p>{errorMessage}</p>
      </div>
      <footer className={styles["buttons-container"]}>
        <Button onClick={onAccept}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ errorTitle, errorMessage, onAccept }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Curtain onAccept={onAccept} />,
        document.getElementById("curtain-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          onAccept={onAccept}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
