import styles from "./Logging.module.css";
import Container from "../../components/UI/Container/Container";

function Logging({ children }) {
  return (
    <Container>
      <div className={styles.wrapper}></div>;
    </Container>
  );
}

export default Logging;
