import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar/navbar";
import Stepper from "../stepper/stepper";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import HelpType from "./help-type";
import ShelterPicker from "./shelter-picker";
import AmountPicker from "./amount-picker";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import {
  ButtonText,
  Container,
  ContinueButton,
  FlexEndContainer,
  InfoContainer,
  Title,
} from "./form-styled-components";
import { Shelter } from "../../models/shelter";
import * as actionTypes from "../../store/actions";
import { API_URL } from "../../config";

const Form = (): JSX.Element => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);
  const setShelters = useCallback(
    (value: Shelter[]) =>
      dispatch({ type: actionTypes.SET_SHELTERS, shelters: value }),
    [dispatch]
  );

  useEffect(() => {
    fetch(`${API_URL}/shelters`)
      .then((response) => response.json())
      .then((data) => {
        setShelters(data.shelters);
      });
  }, []);

  const handleContinue = () => {
    !(contributor._helpType === "shelter" && !contributor.shelterID) &&
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
                contributor._helpType === "shelter" && !contributor.shelterID
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
