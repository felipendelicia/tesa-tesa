import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Text, Title, Paragraph, LinkButton } from "./components";

export default function Hero() {
  return (
    <Container>
      <Text>
        <Title>Todo para convertir tu casa en un HOGAR ✨</Title>
        <Paragraph>En tesa tesa, creemos en la importancia de la satisfacción del cliente y nos esforzamos por brindarte una experiencia de compra sin igual. Ya sea que estés buscando un regalo para un ser querido o simplemente necesites algo para ti, tenemos lo que necesitas.</Paragraph>
        <LinkButton to='/buy'><FontAwesomeIcon icon={faAngleRight}/> Ver productos</LinkButton>
      </Text>
      <Image src="./assets/images/hero.jpg" alt="hero"/>
    </Container>
  )
}
