import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useNavigate } from "react-router";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const nv = useNavigate()
  const toggleButton = () => {
    setVisibility(!visible);
  };
  const handleGoToSignIn = () => {
    window.location.href = "https://auth.opawork.app"
  }
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        {/*   <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Buscar profesionales")}</Span>
        </CustomNavLinkSmall> */}
        {/*  <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Buscar avisos")}</Span>
        </CustomNavLinkSmall> */}
        <CustomNavLinkSmall onClick={handleGoToSignIn} >
          {/*   <CustomNavLinkSmall onClick={() => scrollTo("product")}> */}
          < Span > {t("Busco trabajos")}</Span >
        </CustomNavLinkSmall >
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button onClick={handleGoToSignIn}>{t("Busco profesionales")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer href="/" aria-label="homepage">

            <SvgIcon src="logo.png" width={"100%"} height={"50"} />
            {/*  <SvgIcon src="logo.png" width="101px" height="64px" />  */}
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                {/*   <Menu>Menu</Menu> */}
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
