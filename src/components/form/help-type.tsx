import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Wallet from "../assets/wallet.svg";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import { IState } from "../../store/reducer";
import { HelpType as Type } from "../../enums/helpType";
import {
  ActiveGroupName,
  GroupContainer,
  GroupFoundation,
  GroupName,
  GroupShelter,
} from "./help-type-styled-components";

const HelpType = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);
  const setHelpType = useCallback(
    (helpType: string) =>
      dispatch({ type: actionTypes.SET_HELP_TYPE, help: helpType }),
    [dispatch]
  );

  return (
    <div>
      {contributor?._helpType === Type.Shelter ? (
        <GroupContainer>
          <GroupShelter
            accessKey={contributor._helpType}
            onClick={() => setHelpType("shelter")}
          >
            <img src={Wallet} />
            <ActiveGroupName>{t("shelterTitle")}</ActiveGroupName>
          </GroupShelter>
          <GroupFoundation
            accessKey={contributor._helpType}
            onClick={() => setHelpType("foundation")}
          >
            <img src={Wallet} />
            <GroupName>{t("foundationTitle")}</GroupName>
          </GroupFoundation>
        </GroupContainer>
      ) : (
        <GroupContainer>
          <GroupShelter
            accessKey={contributor?._helpType}
            onClick={() => setHelpType("shelter")}
          >
            <img src={Wallet} />
            <GroupName>{t("shelterTitle")}</GroupName>
          </GroupShelter>
          <GroupFoundation
            accessKey={contributor?._helpType}
            onClick={() => setHelpType("foundation")}
          >
            <img src={Wallet} />
            <ActiveGroupName>{t("foundationTitle")}</ActiveGroupName>
          </GroupFoundation>
        </GroupContainer>
      )}
    </div>
  );
};

export default HelpType;
