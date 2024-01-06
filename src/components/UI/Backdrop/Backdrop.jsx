import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

function Backdrop({ img, children }) {
  return <Wrapper image={img}>{children}</Wrapper>;
}

export default Backdrop;
