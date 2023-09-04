import styled from "styled-components";
import reactLogo from "../../assets/react.svg";
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to="/profile">
        <Logo src={reactLogo} alt="React logo"/>
      </NavLink>
      <h3>ACME</h3>

    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 3;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`