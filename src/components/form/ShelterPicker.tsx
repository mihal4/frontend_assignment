import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import * as actionTypes from "../../store/actions";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import DropdownIcon from "../assets/dropdown.svg";

const ShelterContainer = styled.div`
  max-width: 557px;
  margin-top: 58px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.div`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
  height: 74px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Placeholder = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0;
`;

const Info = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Dropdown = styled.div`
  position: absolute;
  zindex: 10;
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  width: 552px;
  max-height: 200px;
  overflow: scroll;
`;

const DrowpdownRow = styled.p`
  padding: 5px 24px 5px 24px;
  margin: 0;

  :hover {
    background: silver;
    cursor: pointer;
  }
`;

const ChooseTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const ShelterPicker = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const helpType = useSelector((state: IState) => state.helpType);
  const setShelterID = useCallback(
    (id: number) =>
      dispatch({ type: actionTypes.SET_SHELTER_ID, shelterId: id }),
    [dispatch]
  );

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [shelters, setShelters] = useState([]);
  const [shelterName, setShelterName] = useState<string>(t("chooseChelter"));

  const wrapperRef = useRef(null);

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

  useEffect(() => {
    isDropdownVisible && handleFetchShelters();
  }, [isDropdownVisible]);

  const handleFetchShelters = () => {
    fetch("https://frontend-assignment-api.goodrequest.com/api/v1/shelters")
      .then((response) => response.json())
      .then((data) => {
        setShelters(data.shelters);
      });
  };

  const handlePickShelter = (value: { id: number; name: string }) => {
    setShelterID(value.id);
    setShelterName(value.name);
    setIsDropdownVisible(false);
  };

  const sheltersDropdown = shelters.map(
    (shelter: { id: number; name: string }) => (
      <DrowpdownRow key={shelter.id} onClick={() => handlePickShelter(shelter)}>
        {shelter.name}
      </DrowpdownRow>
    )
  );

  return (
    <div>
      <ShelterContainer>
        <TitleContainer>
          <ChooseTitle>{t("shelterChooseTitle")}</ChooseTitle>
          <Info>{t(helpType === "shelter" ? "mandatory" : "optional")}</Info>
        </TitleContainer>
        <Select onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          <div>
            <ChooseTitle>{t("shelter")}</ChooseTitle>
            <Placeholder>{shelterName}</Placeholder>
          </div>
          <img src={DropdownIcon} />
        </Select>
        {isDropdownVisible && (
          <Dropdown ref={wrapperRef}>{sheltersDropdown}</Dropdown>
        )}
      </ShelterContainer>
    </div>
  );
};

export default ShelterPicker;
