import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--background-card);
  border-radius: 5px;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
