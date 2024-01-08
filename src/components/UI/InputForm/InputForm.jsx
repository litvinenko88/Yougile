import styles from "./InputForm.module.css";

function InputForm({ type, id, text, radius }) {
  return (
    <div className={styles["inner-input"]}>
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder=""
        style={{ borderRadius: `${radius}` }}
      />
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

export default InputForm;
