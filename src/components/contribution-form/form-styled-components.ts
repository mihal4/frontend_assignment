import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  max-width: 557px;
`;

const Title = styled.h1`
  max-width: 552px;
  font-size: 46px;
`;

const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 557px;
`;

const ContinueButton = styled.button`
  width: 124px;
  height: 59px;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  border: none;
  margin-top: 72px;
  outline: none;
  cursor: pointer;
`;

const ButtonText = styled.p`
  margin: 0;
  color: white;
  font-weight: 800;
  font-size: 14px;
`;

const Image = styled.img`
  max-width: 364px;
  max-height: 700px;
  object-fit: cover;
  border-radius: 50px;
  margin-left: 40px;
`;

export {
  Container,
  InfoContainer,
  Title,
  FlexEndContainer,
  ContinueButton,
  ButtonText,
  Image,
};
