import styled from "styled-components";

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
  width: 90%;
  max-width: 550px;
  max-height: 200px;
  overflow: scroll;
`;

const DrowpdownRow = styled.p`
  padding: 5px 0px 5px 24px;
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

export {
  ShelterContainer,
  TitleContainer,
  Select,
  Placeholder,
  Info,
  Dropdown,
  DrowpdownRow,
  ChooseTitle,
};
