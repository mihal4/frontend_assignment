import styled from "styled-components";

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

export {
  Container,
  InfoContainer,
  Title,
  Text,
  Alert,
  InputContainer,
  InputTitleContainer,
  InputTitle,
  AlertSymbol,
  InputText,
  Input,
  FlagContainer,
  ButtonsContainer,
  ButtonBack,
  ButtonBackText,
  ButtonContinue,
  ButtonContinueText,
  Dropdown,
  DrowpdownRow,
};
