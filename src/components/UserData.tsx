import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import Flag from "react-world-flags";

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
`;

const InfoContainer = styled.div`
  max-width: 557px;
`;

const Title = styled.h1`
  max-width: 552px;
  font-size: 46px;
  margin-bottom: 42px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 13px;
`;

const ActiveInputContainer = styled.div`
  border: 1px solid #cd8b65;
  box-sizing: border-box;
  border-radius: 8px;
  height: 74px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  height: 74px;
  padding: 16px 24px 16px 24px;
  margin-bottom: 16px;
`;

const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
`;

const InputText = styled.p`
  font-size: 16px;
  margin: 0 10px;
  color: grey;
`;

const Input = styled.input`
  width: 220px;
  outline: none;
  border: none;
  font-size: 16px;
`;

const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const ButtonBack = styled.button`
  background: #f3e2d9;
  border-radius: 100px;
  padding: 20px 24px;
  border: none;
`;

const ButtonBackText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const ButtonContinue = styled.button`
  background: #9f9f9f;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  padding: 20px 24px;
  border: none;
`;

const ButtonContinueText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: white;
`;

function UserData(): JSX.Element {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [eMail, setEMail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <Navbar />
      <Container>
        <InfoContainer>
          <Stepper currentStep={2} />
          <Title>{t("userDataTitle")}</Title>
          <Text>{t("aboutYou")}</Text>
          <ActiveInputContainer>
            <InputTitle>{t("name")}</InputTitle>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t("namePlaceholder")}
            />
          </ActiveInputContainer>
          <InputContainer>
            <InputTitle>{t("surname")}</InputTitle>
            <Input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder={t("surnamePlaceholder")}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>{t("eMail")}</InputTitle>
            <Input
              type="text"
              value={eMail}
              onChange={(e) => setEMail(e.target.value)}
              placeholder={t("eMailPlaceholder")}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>{t("number")}</InputTitle>
            <NumberContainer>
              <FlagContainer>
                <Flag code="sk" style={{ width: 23 }} />
                <InputText>+421</InputText>
              </FlagContainer>
              <Input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </NumberContainer>
          </InputContainer>
          <ButtonsContainer>
            <ButtonBack>
              <ButtonBackText>{t("back")}</ButtonBackText>
            </ButtonBack>
            <ButtonContinue>
              <ButtonContinueText>{t("continue")}</ButtonContinueText>
            </ButtonContinue>
          </ButtonsContainer>
        </InfoContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default UserData;
