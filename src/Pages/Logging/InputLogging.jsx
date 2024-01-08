import styles from "./InputLogging.module.css";

function InputLogging() {
  return (
    <div className={styles["container-input"]}>
      <div className={styles["inner-input"]}>
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

      <div className={styles["inner-input"]}>
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
    </div>
  );
}

export default InputLogging;
