import styled from "styled-components";
import theme from "../../config/theme";
import { MessageProps, TextProps } from "./types";

const Container = styled.div<TextProps>`
  display: ${(props) => (props.visibleState ? "show" : "none")};
  width: 100vw;
  position: fixed;
  bottom: 20px;
  left: 0;
`;

const Text = styled.p`
  background-color: ${theme.black};
  color: ${theme.white};
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-family: ${theme.alternativeFont};
  border-radius: ${theme.borderRadius};
  padding: 10px 20px;
`;

export default function Message(props: MessageProps) {
  return (
    <Container visibleState={props.visibleState}>
      <Text>{props.children}</Text>
    </Container>
  );
}
