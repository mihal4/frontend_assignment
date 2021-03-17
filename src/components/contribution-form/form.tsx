import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar/navbar";
import Stepper from "../stepper/stepper";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import HelpType from "./help-type";
import ShelterPicker from "./shelter-picker";
import AmountPicker from "./amount-picker";
import { useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import {
  ButtonText,
  Container,
  ContinueButton,
  FlexEndContainer,
  InfoContainer,
  Title,
} from "./form-styled-components";

const Form = (): JSX.Element => {
  const { t } = useTranslation();
  const history = useHistory();

  const contributor = useSelector((state: IState) => state.contributor);

  const handleContinue = () => {
    !(contributor?._helpType === "shelter" && !contributor.shelterID) &&
      history.push("/user-data");
  };

  return (
    <div>
      <Navbar />
      <Container>
        <InfoContainer>
          <Stepper currentStep={1} />
          <Title>{t("formTitle")}</Title>
          <HelpType />
          <ShelterPicker />
          <AmountPicker />
          <FlexEndContainer>
            <ContinueButton
              disabled={
                contributor?._helpType === "shelter" && !contributor.shelterID
              }
              onClick={handleContinue}
            >
              <ButtonText>{t("continue")}</ButtonText>
            </ContinueButton>
          </FlexEndContainer>
        </InfoContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Form;
