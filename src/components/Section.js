import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrapper>
      <ItemTitle>
        <h1> model title</h1>
        <p>Para </p>
      </ItemTitle>
      <GroupButton>
        <ButtonLeft>Order</ButtonLeft>
        <ButtonRight>ButtonRight</ButtonRight>
      </GroupButton>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-x.jpg");
  display: flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: center;
`;

const ItemTitle = styled.div`
  padding: 15vh;
  text-align: center;
`;

const GroupButton = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ButtonLeft = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
 `;

const ButtonRight = styled(ButtonLeft)`
  
`;
