import styled from "styled-components";
import Facebook from "../../../public/imagens/sociais/facebook.svg?react";
import Twitter from "../../../public/imagens/sociais/twitter.svg?react";
import Instagram from "../../../public/imagens/sociais/instagram.svg?react";

const StyledFooter = styled.footer`
  margin-top: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04244f;
  padding: 22px 24px;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const StyledCopyright = styled.p`
  color: #fff;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <Facebook />
        <Twitter />
        <Instagram />
      </StyledSocialContainer>
      <StyledCopyright>Desenvolvido por Alura.</StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
