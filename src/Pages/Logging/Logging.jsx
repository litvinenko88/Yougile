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
            <input
              className={styles.input}
              type="text"
              id="email-input"
              placeholder=""
            />
            <label className={styles.label} htmlFor="email-input">
              Почта
            </label>
          </div>

          <div className={styles["container-input"]}>
            <input
              className={styles.input}
              type="password"
              id="password-input"
              placeholder=" "
            />
            <label className={styles.label} htmlFor="password-input">
              Пароль
            </label>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Logging;
