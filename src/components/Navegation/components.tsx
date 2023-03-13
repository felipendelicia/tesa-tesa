import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
  @media screen and (max-width: 768px){
    justify-content: space-between;
    padding: 1em 2em;
  }
`;

export const LogoContainer = styled(Link)``;

export const Logo = styled.img`
  width: 3em;
`;

export const PagesContainer = styled.div`
  display: flex;
  gap: 3em;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Page = styled(Link)``;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1em;
  @media screen and (max-width: 1024px){
    display: none;
  }
`;

export const SocialMedia = styled.a`
    font-size: 1.5em;
`;

export const MobileIcon = styled.p`
  font-size: 1.5em;
  @media screen and (min-width: 768px){
    display: none;
  }
`

export const MobileNavegationContainer = styled.div`
  position: fixed;
  top: 0;
  right:0;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`

export const MobilePagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`

export const MobilePage = styled(Link)`
  font-size: 1.5em;
`

export const MobileSocialMediaContainer = styled.div`
  display: flex;
  gap: 1em;
`

export const MobileSocialMedia = styled.a`
  font-size: 2em;
`

export const MobileClosePopUp = styled.p`
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 1.5em;
`