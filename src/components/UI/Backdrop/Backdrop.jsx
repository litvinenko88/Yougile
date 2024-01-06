import styles from "./Backdrop.module.css";

function Backdrop({ img, children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Backdrop;
