import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import socialmedia from "../../config/socialmedia";
import sendEmail from "../../services/sendEmail";
import Input from "../Input/index";
import Message from "../Message";
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

  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [message, setMessage] = useState("");

  const clearRefs = () => {
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    textAreaRef.current!.value = "";
  };

  const handleClick = async () => {
    const name: string = nameRef.current?.value!;
    const email: string = emailRef.current?.value!;
    const body: string = textAreaRef.current?.value!;

    sendEmail({ name, email }, body)
      .then((response) => {
        if (response.status === 201) {
          clearRefs();
          setMessage("El mensaje se envio correctamente!");
          setIsMessageVisible(true);
          setTimeout(() => {
            setIsMessageVisible(false);
          }, 3000);
        } else {
          setMessage("Hubo un error al enviar el mensaje.");
          setIsMessageVisible(true);
          setTimeout(() => {
            setIsMessageVisible(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Hubo un error al enviar el mensaje.");
        setIsMessageVisible(true);
        setTimeout(() => {
          setIsMessageVisible(false);
        }, 3000);
      });
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
        <Message visibleState={isMessageVisible}>{message}</Message>
      </Contact>
      <Image src="./assets/images/contact.jpg" />
    </Container>
  );
}
