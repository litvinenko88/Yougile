import styles from "./ContarolButton.module.css";
import { Link } from "react-router-dom";

function ContarolButton() {
  return (
    <div className={styles["container-button"]}>
      <div className={styles.toggle}>
        <input id="toggle-switch" type="checkbox" />
        <label for="toggle-switch"></label>
        <h2 className={styles.text}>Запомнить меня</h2>
      </div>

      <Link to="/registration" className={styles["link-registration"]}>
        Регистрация
      </Link>
    </div>
  );
}

export default ContarolButton;
