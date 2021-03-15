import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";

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

const Alert = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
  color: red;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
  position: absolute;
  zindex: 1;
  top: 16px;
  left: 24px;
`;

const InputText = styled.p`
  font-size: 16px;
  margin: 0 10px;
  color: grey;
`;

const Input = styled.input`
  font-size: 16px;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  height: 74px;
  padding: 36px 24px 16px 24px;
  margin-bottom: 16px;
  outline: none;
  width: 557px;

  :focus {
    border: 1px solid #cd8b65;
  }
`;

const FlagContainer = styled.div`
  position: absolute;
  left: 24px;
  bottom: 33px;
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
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
  border: none;
  padding: 20px 24px;
  outline: none;
  cursor: pointer;
`;

const ButtonBackText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: black;
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
  outline: none;
  cursor: pointer;
`;

const ButtonContinueText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const Dropdown = styled.div`
  position: absolute;
  zindex: 10;
  bottom: -42px;
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  max-width: 557px;
  max-height: 200px;
  overflow: scroll;
`;

const DrowpdownRow = styled.p`
  padding: 5px 24px 5px 24px;
  margin: 0;
  display: flex;
  align-items: center;

  :hover {
    background: silver;
    cursor: pointer;
  }
`;

type IFlag = {
  code: string;
  name: string;
  prefix: string;
};

function UserData(): JSX.Element {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [eMail, setEMail] = useState("");
  const [number, setNumber] = useState("");

  const [surnameAlert, setSurnameAlert] = useState<string>();
  const [eMailALert, setEmailAlert] = useState<string>();
  const [phoneAlert, setPhoneAlert] = useState<string>();

  const flags = [
    { code: "sk", name: "Slovensko", prefix: "+421" },
    { code: "cz", name: "Česká republika", prefix: "+420" },
  ];

  // eslint-disable-next-line
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [choosedCountry, setPChoosedCountry] = useState<IFlag>(flags[0]);

  // eslint-disable-next-line
  function useOutsideAlerter(ref: React.MutableRefObject<any>) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownVisible(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function handlePickCountry(value: IFlag) {
    setPChoosedCountry(value);
    setIsDropdownVisible(false);
  }

  function handleChangeSurname(event: React.ChangeEvent<HTMLInputElement>) {
    setSurname(event.target.value);
    handleCheckSurname(event.target.value);
  }

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEMail(event.target.value);
    handleCheckEmail(event.target.value);
  }

  function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(
      number === ""
        ? choosedCountry.prefix + event.target.value
        : event.target.value
    );
    handleCheckPhone(event.target.value);
  }

  function handleCheckSurname(value: string) {
    value.length > 1
      ? setSurnameAlert("")
      : setSurnameAlert(t("firstNameAlert"));
  }

  function handleCheckEmail(value: string) {
    value.match(regexEmail)
      ? setEmailAlert("")
      : setEmailAlert(t("emailAlert"));
  }

  function handleCheckPhone(value: string) {
    value.length === 13 ? setPhoneAlert("") : setPhoneAlert(t("phoneAlert"));
  }

  function handleContinue() {
    handleCheckSurname(surname);
    handleCheckEmail(eMail);
    handleCheckPhone(number);
  }

  function handleVerifyInputs() {
    return surnameAlert === "" && eMailALert === "" && phoneAlert === ""
      ? true
      : false;
  }

  const countries = flags.map((flag) => (
    <DrowpdownRow key={flag.code} onClick={() => handlePickCountry(flag)}>
      <Flag code={flag.code} style={{ width: 23 }} />
      <InputText>{flag.name}</InputText>
    </DrowpdownRow>
  ));

  return (
    <div>
      <Navbar />
      <Container>
        <InfoContainer>
          <Stepper currentStep={2} />
          <Title>{t("userDataTitle")}</Title>
          <Text>{t("aboutYou")}</Text>
          <InputContainer>
            <Input
              type="text"
              minLength={2}
              maxLength={20}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t("namePlaceholder")}
            />
            <InputTitle>{t("name")}</InputTitle>
          </InputContainer>
          <Alert>{surnameAlert}</Alert>
          <InputContainer>
            <Input
              type="text"
              minLength={2}
              maxLength={30}
              value={surname}
              onChange={handleChangeSurname}
              placeholder={t("surnamePlaceholder")}
            />
            <InputTitle>{t("surname")}*</InputTitle>
          </InputContainer>
          <Alert>{eMailALert}</Alert>
          <InputContainer>
            <Input
              type="text"
              minLength={2}
              maxLength={20}
              value={eMail}
              onChange={handleChangeEmail}
              placeholder={t("eMailPlaceholder")}
            />
            <InputTitle>{t("eMail")}*</InputTitle>
          </InputContainer>
          <Alert>{phoneAlert}</Alert>
          <InputContainer>
            <FlagContainer
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              <Flag code={choosedCountry.code} style={{ width: 23 }} />
            </FlagContainer>
            {isDropdownVisible && (
              <Dropdown ref={wrapperRef}>{countries}</Dropdown>
            )}
            <Input
              type="text"
              maxLength={13}
              value={number}
              onChange={handleChangePhone}
              placeholder={choosedCountry.prefix}
              style={{ paddingLeft: 60, paddingTop: 45 }}
            />
            <InputTitle>{t("number")}*</InputTitle>
          </InputContainer>
          <ButtonsContainer>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <ButtonBack>
                <ButtonBackText>{t("back")}</ButtonBackText>
              </ButtonBack>
            </Link>
            <ButtonContinue onClick={handleContinue}>
              {handleVerifyInputs() ? (
                <Link
                  to="/check"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ButtonContinueText>{t("continue")}</ButtonContinueText>
                </Link>
              ) : (
                <ButtonContinueText>{t("continue")}</ButtonContinueText>
              )}
            </ButtonContinue>
          </ButtonsContainer>
        </InfoContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default UserData;
