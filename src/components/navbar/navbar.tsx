import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Title } from "../footer/footer-styled-components";
import FbLogo from ".././assets/fb.svg";
import InstaLogo from ".././assets/insta.svg";
import { CenteredView, Icon, IconContainer } from "./navbar-styled-components";

const Navbar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container data-testid="navbar">
      <CenteredView>
        <Title>{t("title")}</Title>
        <IconContainer>
          <Icon>
            <img src={FbLogo} />
          </Icon>
          <img src={InstaLogo} />
        </IconContainer>
      </CenteredView>
    </Container>
  );
};

export default Navbar;
