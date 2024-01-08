import InputForm from "../../components/UI/InputForm/InputForm";

function InputRegistration() {
  return (
    <>
      <InputForm type="text" text="Имя" id="name" radius="5px 5px 0 0" />
      <InputForm type="number" text="Телефон" id="iphone" />
      <InputForm type="password" text="Пароль" id="password" />
      <InputForm
        type="password"
        text="Подтвердите пароль"
        radius="0 0 5px 5px"
      />
    </>
  );
}

export default InputRegistration;
