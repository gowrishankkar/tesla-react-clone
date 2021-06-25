import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        rightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        rightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        rightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
       <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        rightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Solar Panels"
        description="
        Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        rightBtnText="Learn More"
        leftBtnText="Order Now"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        rightBtnText="Learn More"
        leftBtnText="Order Now"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
