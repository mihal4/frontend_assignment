import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import * as actionTypes from "../../store/actions";
import { useTranslation } from "react-i18next";
import DropdownIcon from "../assets/dropdown.svg";
import { HelpType } from "../../enums/helpType";
import {
  ChooseTitle,
  Dropdown,
  DrowpdownRow,
  Info,
  Placeholder,
  Select,
  ShelterContainer,
  TitleContainer,
} from "./shelter-picker-styled-components";
import { Shelter } from "../../models/shelter";

const ShelterPicker = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);
  const shelters = useSelector((state: IState) => state.shelters);

  const setShelterID = useCallback(
    (value: number) =>
      dispatch({ type: actionTypes.SET_SHELTER_ID, shelterID: value }),
    [dispatch]
  );

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const pickShelter = (value: Shelter) => () => {
    setShelterID(value.id);
    setIsDropdownVisible(false);
  };

  const sheltersDropdown =
    shelters.length > 0 &&
    shelters.map((shelter: Shelter) => (
      <DrowpdownRow key={shelter.id} onClick={pickShelter(shelter)}>
        {shelter.name}
      </DrowpdownRow>
    ));

  return (
    <div>
      <ShelterContainer>
        <TitleContainer>
          <ChooseTitle>{t("shelterChooseTitle")}</ChooseTitle>
          <Info>
            {t(
              contributor._helpType === HelpType.Shelter
                ? "mandatory"
                : "optional"
            )}
          </Info>
        </TitleContainer>
        <Select onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          <div>
            <ChooseTitle>{t("shelter")}</ChooseTitle>
            <Placeholder>
              {shelters && contributor.shelterID
                ? shelters[contributor.shelterID - 1].name
                : t("chooseChelter")}
            </Placeholder>
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
