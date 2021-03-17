import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Stepper from "../stepper/stepper";
import CheckboxIcon from ".././assets/checkbox.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import { API_URL } from "../../config";
import {
  CheckContainer,
  Container,
  DataContainer,
  HeadTitle,
  Title,
  Text,
  AgreementContainer,
  Checkbox,
  Icon,
  ButtonsContainer,
  ButtonBack,
  ButtonBackText,
  ButtonContinue,
  ButtonContinueText,
} from "./check-styled-components";

const Check = (): JSX.Element => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);

  const contributor = useSelector((state: IState) => state.contributor);
  const shelters = useSelector((state: IState) => state.shelters);

  const handleSend = async () => {
    checked &&
      (await fetch(`${API_URL}/shelters/contribute`, {
        method: "POST",
        body: JSON.stringify({
          firstName: contributor?.firstName,
          lastName: contributor?.lastName,
          email: contributor?.email,
          phone: contributor?.phone,
          value: contributor?.value,
          shelterID: contributor?.shelterID,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        }));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <CheckContainer>
          <Stepper currentStep={3} />
          <HeadTitle>{t("checkTitle")}</HeadTitle>
          <DataContainer>
            <Title>{t("foundationType")}</Title>
            <Text>{t(contributor?._helpType + "Title")}</Text>
            {contributor?.shelterID && (
              <div>
                <Title>{t("shelterType")}</Title>
                <Text>{shelters[contributor?.shelterID - 1].name}</Text>
              </div>
            )}
            <Title>{t("amountHelp")}</Title>
            <Text>{contributor?.value} €</Text>
            <Title>{t("nameSurname")}</Title>
            <Text>{contributor?.firstName + " " + contributor?.lastName}</Text>
            <Title>{t("eMail")}</Title>
            <Text>{contributor?.email}</Text>
            <Title>{t("number")}</Title>
            <Text>{contributor?.phone}</Text>
          </DataContainer>
          <AgreementContainer onClick={() => setChecked(!checked)}>
            <Checkbox>{checked && <Icon src={CheckboxIcon} />}</Checkbox>
            <Text style={{ margin: 0 }}>{t("agree")}</Text>
            <Text style={{ margin: 0, color: "red" }}>*</Text>
          </AgreementContainer>
          <ButtonsContainer>
            <Link
              to="/user-data"
              style={{
                textDecoration: "none",
              }}
            >
              <ButtonBack>
                <ButtonBackText>{t("back")}</ButtonBackText>
              </ButtonBack>
            </Link>
            <ButtonContinue onClick={handleSend} disabled={!checked}>
              <ButtonContinueText>{t("sendForm")}</ButtonContinueText>
            </ButtonContinue>
          </ButtonsContainer>
        </CheckContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Check;
