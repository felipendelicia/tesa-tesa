import Input from "../Input/index";
import { Contact, Container, Image, TopInputs } from "./components";

export default function ContactContent() {
  return (
    <Container>
      <Contact>
        <TopInputs>
          <Input placeholder="Tu nombre" type="text" />
          <Input placeholder="Tu email" type="text" />
        </TopInputs>
      </Contact>
      <Image src="./assets/images/contact.jpg" />
    </Container>
  );
}
