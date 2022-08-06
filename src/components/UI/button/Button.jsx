import styles from "./button.module.scss";

const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      type={buttonType || "button"}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
