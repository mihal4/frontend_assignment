import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import Flag from "react-world-flags";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store/reducer";
import * as actionTypes from "../store/actions";

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
  margin-top: -15px;
  margin-bottom: 5px;
  color: red;
  width: 100%;
  text-align: right;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputTitleContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  position: absolute;
  zindex: 1;
  top: 16px;
  left: 24px;
`;

const InputTitle = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const AlertSymbol = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: red;
`;

const InputText = styled.label`
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
  width: 100%;
  max-width: 557px;

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

const UserData = (): JSX.Element => {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);

  const history = useHistory();

  // eslint-disable-next-line
  const useOutsideAlerter = (ref: React.MutableRefObject<any>) => {
    useEffect(() => {
      const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownVisible(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  const dispatch = useDispatch();

  const form = useSelector((state: IState) => state.form);

  const setFirstName = useCallback(
    (value: string) =>
      dispatch({ type: actionTypes.SET_FIRST_NAME, firstName: value }),
    [dispatch]
  );
  const setSurname = useCallback(
    (value: string) =>
      dispatch({ type: actionTypes.SET_LAST_NAME, lastName: value }),
    [dispatch]
  );
  const setEmail = useCallback(
    (value: string) => dispatch({ type: actionTypes.SET_EMAIL, email: value }),
    [dispatch]
  );
  const setPhone = useCallback(
    (value: string) => dispatch({ type: actionTypes.SET_PHONE, phone: value }),
    [dispatch]
  );

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [surnameAlert, setSurnameAlert] = useState<string>();
  const [eMailALert, setEmailAlert] = useState<string>();
  const [phoneAlert, setPhoneAlert] = useState<string>();

  const flags = [
    { code: "sk", name: "Slovensko", prefix: "+421" },
    { code: "cz", name: "Česká republika", prefix: "+420" },
  ];

  // eslint-disable-next-line
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [choosedCountry, setChoosedCountry] = useState<IFlag>(flags[0]);

  const handlePickCountry = (value: IFlag) => {
    setChoosedCountry(value);
    setIsDropdownVisible(false);
  };

  const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
    handleCheckSurname(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    handleCheckEmail(event.target.value);
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(
      form.phone === ""
        ? choosedCountry.prefix + event.target.value
        : event.target.value
    );
    handleCheckPhone(event.target.value);
  };

  const handleCheckSurname = (value: string): boolean => {
    if (value.length > 1) {
      setSurnameAlert("");
      return true;
    } else {
      setSurnameAlert(t("firstNameAlert"));
      return false;
    }
  };

  const handleCheckEmail = (value: string): boolean => {
    if (value.match(regexEmail)) {
      setEmailAlert("");
      return true;
    } else {
      setEmailAlert(t("emailAlert"));
      return false;
    }
  };

  const handleCheckPhone = (value: string): boolean => {
    if (value.length === 13) {
      setPhoneAlert("");
      return true;
    } else {
      setPhoneAlert(t("phoneAlert"));
      return false;
    }
  };

  const handleContinue = () => {
    if (
      handleCheckSurname(form.lastName) &&
      handleCheckEmail(form.email) &&
      handleCheckPhone(form.phone)
    ) {
      history.push("/check");
    }
  };

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
              maxLength={20}
              value={form.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t("namePlaceholder")}
            />
            <InputTitleContainer>
              <InputTitle>{t("name")}</InputTitle>
            </InputTitleContainer>
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              minLength={2}
              maxLength={30}
              value={form.lastName}
              onChange={handleChangeSurname}
              placeholder={t("surnamePlaceholder")}
            />
            <InputTitleContainer>
              <InputTitle>{t("surname")}</InputTitle>
              <AlertSymbol>*</AlertSymbol>
            </InputTitleContainer>
          </InputContainer>
          {surnameAlert && <Alert>{surnameAlert}</Alert>}
          <InputContainer>
            <Input
              type="text"
              value={form.email}
              onChange={handleChangeEmail}
              placeholder={t("eMailPlaceholder")}
            />
            <InputTitleContainer>
              <InputTitle>{t("eMail")}</InputTitle>
              <AlertSymbol>*</AlertSymbol>
            </InputTitleContainer>
          </InputContainer>
          {eMailALert && <Alert>{eMailALert}</Alert>}
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
              value={form.phone}
              onChange={handleChangePhone}
              placeholder={choosedCountry.prefix}
              style={{ paddingLeft: 60, paddingTop: 45 }}
            />
            <InputTitleContainer>
              <InputTitle>{t("number")}</InputTitle>
              <AlertSymbol>*</AlertSymbol>
            </InputTitleContainer>
          </InputContainer>
          {phoneAlert && <Alert>{phoneAlert}</Alert>}
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
              <ButtonContinueText>{t("continue")}</ButtonContinueText>
            </ButtonContinue>
          </ButtonsContainer>
        </InfoContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default UserData;
