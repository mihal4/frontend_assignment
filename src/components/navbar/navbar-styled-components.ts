import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

const CenteredView = styled.div`
  width: 80%;
  height: 40px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 8px;
`;

export { Container, CenteredView, Title, IconContainer, Icon };
