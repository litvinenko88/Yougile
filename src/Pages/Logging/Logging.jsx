import styles from "./Logging.module.css";
import Container from "../../components/UI/Container/Container";
import InputLogging from "./InputLogging";
import ContarolButton from "./ContarolButton";
import ButtonForm from "../../components/UI/Button/ButtonForm";

function Logging({ children }) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles["container-heading"]}>
          <h2 className={styles.heading}>Войти</h2>
        </div>

        <form className={styles["container-form"]}>
          <h2 className={styles["error-text"]}>Неверный логин или пароль</h2>
          <InputLogging />
          <ContarolButton />
          <ButtonForm text="Авторизоваться" />
        </form>
      </Container>
    </div>
  );
}

export default Logging;
