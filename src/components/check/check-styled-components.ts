import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const CheckContainer = styled.div`
  max-width: 557px;
`;

const HeadTitle = styled.h1`
  max-width: 552px;
  font-size: 46px;
`;

const DataContainer = styled.div`
  margin: 42px 0;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 800;
  margin: 0;
  margin-top: 22px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-top: 8px;
`;

const AgreementContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 34px;
  height: 34px;
  border: none;
  border: 1px solid #f3e2d9;
  border-radius: 8px;
  margin-right: 16px;
`;

const Icon = styled.img`
  margin: 5px;
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

export {
  Container,
  CheckContainer,
  HeadTitle,
  DataContainer,
  Title,
  Text,
  AgreementContainer,
  Checkbox,
  Icon,
  ButtonsContainer,
  ButtonBack,
  ButtonBackText,
  ButtonContinue,
  ButtonContinueText,
};
