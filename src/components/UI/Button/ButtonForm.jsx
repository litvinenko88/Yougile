import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: var(--color-pink);
  color: var(--text-gray);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:active {
    transform: scale(0.98);
  }
`;

function ButtonForm({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default ButtonForm;
