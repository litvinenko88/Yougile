import styles from "./Logging.module.css";
import Container from "../../components/UI/Container/Container";

function Logging({ children }) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles["container-heading"]}>
          <h2 className={styles.heading}>Войти</h2>
        </div>

        <form className={styles["container-form"]}>
          <h2 className={styles["error-text"]}>Неверный логин или пароль</h2>

          <div className={styles["container-input"]}>
            <label className={styles.label}>Email address</label>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles["container-input"]}>
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Logging;
