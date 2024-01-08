import styles from "./Registration.module.css";
import Container from "../../components/UI/Container/Container";
import InputRegistration from "./InputRegistration";
import ButtonForm from "../../components/UI/Button/ButtonForm";

import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles["container-heading"]}>
          <h2 className={styles.heading}>Войти</h2>
        </div>

        <form className={styles["container-form"]}>
          <div className={styles.inner}>
            <InputRegistration />
          </div>
          <ButtonForm
            text="Зарегистрироваться"
            onClick={() => navigate("/logging")}
          />
        </form>
      </Container>
    </div>
  );
}

export default Registration;
