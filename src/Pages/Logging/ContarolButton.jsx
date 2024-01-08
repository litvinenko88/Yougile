import styles from "./ContarolButton.module.css";

function ContarolButton() {
  return (
    <div className={styles["container-button"]}>
      <div className={styles.toggle}>
        <input id="toggle-switch" type="checkbox" />
        <label for="toggle-switch"></label>
        <h2 className={styles.text}>Запомнить меня</h2>
      </div>

      <a href="#" className={styles["link-registration"]}>
        Регистрация
      </a>
    </div>
  );
}

export default ContarolButton;
