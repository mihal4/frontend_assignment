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

type IStepper = {
  currentStep: number;
};

function Stepper(props: IStepper): JSX.Element {
  return (
    <Container>
      <Step>
        <img src={props.currentStep === 1 ? ActiveStep : BasicStep} />
      </Step>
      <Step>
        <img src={props.currentStep === 2 ? ActiveStep : BasicStep} />
      </Step>
      <Step>
        <img src={props.currentStep === 3 ? ActiveStep : BasicStep} />
      </Step>
    </Container>
  );
}

export default Stepper;
