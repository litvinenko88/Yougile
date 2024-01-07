import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--background-card);
  width: 300px;
  height: 200px;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
