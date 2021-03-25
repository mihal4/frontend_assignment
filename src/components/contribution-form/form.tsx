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
import Brady from "../assets/brady.png";
import { Image } from "./form-styled-components";
import { useWindowSize } from "../hooks/use-window-size";
import { fetchShelters } from "../../store/shelters-action";

const Form = (): JSX.Element => {
  const { t } = useTranslation();
  const history = useHistory();
  const size = useWindowSize();
  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);
  const getShelters = useCallback(() => dispatch(fetchShelters()), [dispatch]);

  useEffect(() => {
    getShelters();
  }, []);

  const next = () => {
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
              onClick={next}
            >
              <ButtonText>{t("continue")}</ButtonText>
            </ContinueButton>
          </FlexEndContainer>
        </InfoContainer>
        {size && size.width && size.width > 1050 && <Image src={Brady} />}
      </Container>
      <Footer />
    </div>
  );
};

export default Form;
