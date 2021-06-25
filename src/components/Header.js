import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panel</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <Fade right>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Chargin</a>
          </li>
        </BurgerNav>
      </Fade>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 10;
  min-height: 60px;
  position: fixed;
  display: flex;
  right: 0;
  left: 0;
  justify-content: space-between;
  z-index: 1;
  a {
    padding: 15px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-decoration: uppercase;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  padding: 15px;
  a {
    font-weight: 600;
    text-decoration: uppercase;
    flex-wrap: no-wrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  background: white;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ;

  li {
    padding: 15px 0;
    border-bottom: 1px solid black;

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
