import styles from "./Card.module.scss";

const Card = ({children, inputCardStyles}) => {
  return <div className={`${styles.card} ${inputCardStyles}`}>{children}</div>;
};

export default Card;
