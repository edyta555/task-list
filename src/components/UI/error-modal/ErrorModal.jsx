import Card from "../card/Card";
import Button from "../button/Button";

import styles from "./error-modal.module.scss";

const ErrorModal = ({ errorTitle, errorMessage }) => {
  return (
    <div className={styles.background}>
      <Card inputCardStyles={styles["modal-container"]}>
        <header className={styles.header}>
          <h3>{errorTitle}</h3>
        </header>
        <div className={styles["error-message-container"]}>
          <p>{errorMessage}</p>
        </div>
        <footer className={styles["buttons-container"]}>
          <Button>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
