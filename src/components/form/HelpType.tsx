import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Wallet from "../assets/wallet.svg";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import { IState } from "../../store/reducer";

const GroupContainer = styled.div`
  max-width: 557px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #faf9f9;
  border-radius: 24px;
`;

const GroupName = styled.p`
  font-size: 16px;
  color: grey;
  max-width: 200px;
`;

const ActiveGroupName = styled.p`
  font-size: 16px;
  color: white;
  max-width: 200px;
`;

const GroupShelter = styled.div`
  background: ${(props) =>
    props.accessKey === "shelter"
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  padding: 25px;
  border-radius: 24px 0px 0px 24px;
  flex: 1;
  border: 1px solid #cd8b65;
  box-shadow: ${(props) =>
    props.accessKey === "shelter"
      ? `0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)`
      : "none"};
  cursor: pointer;
`;

const GroupFoundation = styled.div`
  background: ${(props) =>
    props.accessKey === "foundation"
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  padding: 25px;
  border-radius: 0px 24px 24px 0px;
  border: 1px solid #cd8b65;
  flex: 1;
  box-shadow: ${(props) =>
    props.accessKey === "foundation"
      ? `0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)`
      : "none"};
  cursor: pointer;
`;

const HelpType = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const helpType = useSelector((state: IState) => state.helpType);
  const setHelpType = useCallback(
    (helpType: string) =>
      dispatch({ type: actionTypes.SET_HELP_TYPE, help: helpType }),
    [dispatch]
  );

  return (
    <div>
      {helpType === "shelter" ? (
        <GroupContainer>
          <GroupShelter
            accessKey={helpType}
            onClick={() => setHelpType("shelter")}
          >
            <img src={Wallet} />
            <ActiveGroupName>{t("shelterTitle")}</ActiveGroupName>
          </GroupShelter>
          <GroupFoundation
            accessKey={helpType}
            onClick={() => setHelpType("foundation")}
          >
            <img src={Wallet} />
            <GroupName>{t("foundationTitle")}</GroupName>
          </GroupFoundation>
        </GroupContainer>
      ) : (
        <GroupContainer>
          <GroupShelter
            accessKey={helpType}
            onClick={() => setHelpType("shelter")}
          >
            <img src={Wallet} />
            <GroupName>{t("shelterTitle")}</GroupName>
          </GroupShelter>
          <GroupFoundation
            accessKey={helpType}
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

/*const mapStateToProps = (state: IState) => {
  return {
    helpType: state.helpType,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onHelpTypeChange: (helpType: string) =>
      dispatch({ type: actionTypes.SET_HELP_TYPE, help: helpType }),
  };
};*/

export default HelpType;
