import InputForm from "../../components/UI/InputForm/InputForm";

function InputLogging() {
  return (
    <>
      <InputForm
        type="email"
        id="email-input"
        text="Логин"
        radius="5px 5px 0 0"
      />
      <InputForm
        type="password"
        id="password-input"
        text="Пароль"
        radius="0 0 5px 5px"
      />
    </>
  );
}

export default InputLogging;
