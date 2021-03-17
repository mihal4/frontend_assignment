import React from "react";
import { useTranslation } from "react-i18next";
import Logo from ".././assets/footerLogo.svg";
import {
  Container,
  Line,
  Image,
  Box,
  Title,
  Text,
} from "./footer-styled-components";

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
