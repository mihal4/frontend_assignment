import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Logo from "./assets/footerLogo.svg";

const Line = styled.div`
  width: 80%;
  margin: 117px auto;
  border-top: 1px solid rgba(47, 47, 47, 0.16);
`;

const Container = styled.div`
  width: 80%;
  margin: 111px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const Box = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: grey;
  max-width: 170px;
`;

const Image = styled.img`
  margin-bottom: 20px;
`;

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <Line />
      <Container>
        <Image src={Logo} />
        <Box>
          <Title>{t("title")}</Title>
          <Text>{t("about")}</Text>
          <Text>{t("howTo")}</Text>
          <Text>{t("contact")}</Text>
        </Box>
        <Box>
          <Title>{t("title")}</Title>
          <Text>{t("loremIpsum")}</Text>
        </Box>
        <Box>
          <Title>{t("title")}</Title>
          <Text>{t("loremIpsum")}</Text>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
