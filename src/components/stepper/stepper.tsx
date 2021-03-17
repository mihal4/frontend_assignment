import React from "react";
import ActiveStep from ".././assets/active.svg";
import BasicStep from ".././assets/step.svg";
import { Container, Step } from "./stepper-styled-components";

type IStepper = {
  currentStep: number;
};

const Stepper = (props: IStepper): JSX.Element => {
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
};

export default Stepper;
