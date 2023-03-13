import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
`;

export const LogoContainer = styled(Link)``;

export const Logo = styled.img`
  width: 3em;
`;

export const PagesContainer = styled.div`
  display: flex;
  gap: 3em;
`;

export const Page = styled(Link)``;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1em;
`;

export const SocialMedia = styled.a`
    font-size: 1.5em;
`;
