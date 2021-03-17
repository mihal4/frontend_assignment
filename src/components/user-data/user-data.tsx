import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Stepper from "../stepper/stepper";
import Flag from "react-world-flags";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import * as actionTypes from "../../store/actions";
import {
  Container,
  DrowpdownRow,
  InfoContainer,
  InputText,
  Title,
  Text,
  InputContainer,
  Input,
  InputTitleContainer,
  InputTitle,
  AlertSymbol,
  Alert,
  FlagContainer,
  Dropdown,
  ButtonsContainer,
  ButtonBack,
  ButtonBackText,
  ButtonContinue,
  ButtonContinueText,
} from "./user-data-styled-components";
import { IFlag } from "../../models/flag";

const UserData = (): JSX.Element => {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const history = useHistory();

  const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const clickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsDropdownVisible(false);
        }
      };
      document.addEventListener("mousedown", clickOutside);
      return () => {
        document.removeEventListener("mousedown", clickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);

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

  const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [choosedCountry, setChoosedCountry] = useState<IFlag>(flags[0]);

  const pickCountry = (value: IFlag) => {
    setChoosedCountry(value);
    setIsDropdownVisible(false);
  };

  const changeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
    checkSurname(event.target.value);
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    checkEmail(event.target.value);
  };

  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(
      contributor.phone === ""
        ? choosedCountry.prefix + event.target.value
        : event.target.value
    );
    checkPhone(event.target.value);
  };

  const checkSurname = (value: string): boolean => {
    if (value.length > 1) {
      setSurnameAlert("");
      return true;
    } else {
      setSurnameAlert(t("firstNameAlert"));
      return false;
    }
  };

  const checkEmail = (value: string): boolean => {
    if (value.match(regexEmail)) {
      setEmailAlert("");
      return true;
    } else {
      setEmailAlert(t("emailAlert"));
      return false;
    }
  };

  const checkPhone = (value: string): boolean => {
    if (value.length === 13) {
      setPhoneAlert("");
      return true;
    } else {
      setPhoneAlert(t("phoneAlert"));
      return false;
    }
  };

  const next = () => {
    if (
      checkSurname(contributor.lastName) &&
      checkEmail(contributor.email) &&
      checkPhone(contributor.phone)
    ) {
      history.push("/check");
    }
  };

  const countries = flags.map((flag) => (
    <DrowpdownRow key={flag.code} onClick={() => pickCountry(flag)}>
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
              value={contributor.firstName}
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
              value={contributor.lastName}
              onChange={changeSurname}
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
              value={contributor.email}
              onChange={changeEmail}
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
              value={contributor.phone}
              onChange={changePhone}
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
            <ButtonContinue onClick={next}>
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
