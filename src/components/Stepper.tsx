import React from "react";
import styled from "styled-components";
import ActiveStep from "./assets/active.svg";
import BasicStep from "./assets/step.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Step = styled.div`
  margin-right: 5px;
`;

function Stepper(): JSX.Element {
  return (
    <Container>
      <Step>
        <img src={ActiveStep} />
      </Step>
      <Step>
        <img src={BasicStep} />
      </Step>
      <Step>
        <img src={BasicStep} />
      </Step>
    </Container>
  );
}

export default Stepper;
