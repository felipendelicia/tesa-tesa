import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import socialmedia from "../../config/socialmedia";
import sendEmail from "../../services/sendEmail";
import Input from "../Input/index";
import {
  BottomBar,
  Contact,
  Container,
  Image,
  SendButton,
  SocialMediaContainer,
  TextArea,
  Title,
} from "./components";

export default function ContactContent() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const clearRefs = () => {
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    textAreaRef.current!.value = "";
  };

  const handleClick = () => {
    const name: string = nameRef.current?.value!;
    const email: string = emailRef.current?.value!;
    const body: string = textAreaRef.current?.value!;

    sendEmail({ name, email }, body);
    clearRefs()
  };

  return (
    <Container>
      <Contact>
        <Title>Mantente en contacto 📫</Title>
        <Input placeholder="Tu nombre" type="text" reference={nameRef} />
        <Input placeholder="Tu email" type="email" reference={emailRef} />
        <TextArea placeholder="Tu mensaje" ref={textAreaRef}></TextArea>
        <BottomBar>
          <SendButton onClick={handleClick}>
            <FontAwesomeIcon icon={faPaperPlane} /> Enviar
          </SendButton>
          <SocialMediaContainer>
            {socialmedia.map((socialmedia, i) => {
              return (
                <a
                  href={socialmedia.path}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                >
                  {socialmedia.icon}
                </a>
              );
            })}
          </SocialMediaContainer>
        </BottomBar>
      </Contact>
      <Image src="./assets/images/contact.jpg" />
    </Container>
  );
}
