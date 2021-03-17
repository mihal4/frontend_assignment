import React from "react";
import { IStepper } from "../../models/stepper";
import ActiveStep from ".././assets/active.svg";
import BasicStep from ".././assets/step.svg";
import { Container, Step } from "./stepper-styled-components";

const Stepper = (props: IStepper): JSX.Element => {
  return (
    <Container data-testid="stepper">
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
