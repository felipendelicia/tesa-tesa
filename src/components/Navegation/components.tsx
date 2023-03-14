import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../config/theme";
import { NavegationContainerProps } from "./types";

export const Container = styled.nav<NavegationContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  color: ${theme.black};
  border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  background-color: ${props => props.isScrolled ? theme.grey : null};
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  transition: background-color 0.5s ease-out;
  @media screen and (max-width: 768px){
    justify-content: space-between;
    padding: 10px 2em;
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

export const Page = styled(Link)`
  transition: transform 0.1s ease-out;
  &:hover {
    transform: translateY(3px);
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1em;
  @media screen and (max-width: 1024px){
    display: none;
  }
`;

export const SocialMedia = styled.a`
  font-size: 1.5em;
  transition: transform 0.05s ease-out;
  &:hover {
    transform: translateY(1px);
  }
`;

export const MobileIcon = styled.p`
  font-size: 1.5em;
  color: ${theme.black};
  @media screen and (min-width: 768px){
    display: none;
  }
`

export const MobileNavegationContainer = styled.div`
  position: fixed;
  top: 0;
  right:0;
  width: 100%;
  background-color: ${theme.black};
  color: ${theme.white};
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