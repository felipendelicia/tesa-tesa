import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Text, Title, Paragraph, LinkButton } from "./components";

export default function Hero() {
  return (
    <Container>
      <Text>
        <Title>Todo para convertir tu casa en un HOGAR ✨</Title>
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi totam praesentium aliquid id quasi iure alias omnis voluptate, ab inventore velit nemo repellat nulla nihil optio. Consequatur fugit temporibus quia.</Paragraph>
        <LinkButton to='/buy'><FontAwesomeIcon icon={faAngleRight}/> Ver productos</LinkButton>
      </Text>
      <Image src="./assets/images/hero.jpg" alt="hero"/>
    </Container>
  )
}
