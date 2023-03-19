import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
`;

export const Contact = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Title = styled.h2`
  font-family: ${theme.alternativeFont};
`;

export const TextArea = styled.textarea`
  font-family: ${theme.alternativeFont};
  resize: none;
  width: 100%;
  height: 100px;
  border: 3px solid ${theme.black};
  padding: 0.5em 1em;
  font-size: 1em;
`;

export const BottomBar = styled.div`
  font-family: ${theme.alternativeFont};
  display: flex;
  justify-content: space-between;
  font-size: 1em;
`;

export const SendButton = styled.button`
  font-family: ${theme.alternativeFont};
  padding: 5px 20px;
  border-radius: ${theme.borderRadius};
  color: ${theme.white};
  background-color: ${theme.black};
  cursor: pointer;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1em;
  a {
    font-size: 1.5em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
