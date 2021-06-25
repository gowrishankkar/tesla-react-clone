import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section(props) {
  console.log(props);
  return (
    <Wrapper bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemTitle>
          <h1>{props.title}</h1>
          <p>{props.description} </p>
        </ItemTitle>
      </Fade>

      <Buttons>
        <Fade bottom>
          <GroupButton>
            <ButtonLeft>{props.leftBtnText}</ButtonLeft>
            {props.rightBtnText && (
              <ButtonRight>{props.rightBtnText}</ButtonRight>
            )}
          </GroupButton>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
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
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemTitle = styled.div`
  z-index: 10;
  padding: 15vh;
  text-align: center;
`;

const GroupButton = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  margin: 20px;
`;

const ButtonRight = styled(ButtonLeft)`
  background: white;
  opacity: 0.6;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
