import styled from "styled-components";
import reactLogo from "../../assets/react.svg";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={reactLogo} alt="React logo"/>
      <h3>ACME</h3>

    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: coral;
  grid-column-start: 1;
  grid-column-end: 3;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`