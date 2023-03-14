import { useEffect, useState } from "react";
import routes from "../../config/routes";
import socialmedia from "../../config/socialmedia";
import {
  Container,
  Logo,
  LogoContainer,
  Page,
  PagesContainer,
  SocialMedia,
  SocialMediaContainer,
} from "./components";
import MobilePages from "./MobilePages";

export default function Navegation() {

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) setIsScrolled(true)
    else setIsScrolled(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Container isScrolled={isScrolled}>
      <LogoContainer to='/'>
        <Logo src="./logo.svg" alt='tesa tesa'/>
      </LogoContainer>
      <PagesContainer>
        {routes.map((route, i) => {
          return (
            <Page to={route.path} key={i}>
              {route.name}
            </Page>
          );
        })}
      </PagesContainer>
      <SocialMediaContainer>
        {socialmedia.map((socialmedia, i) => {
          return (
            <SocialMedia href={socialmedia.path} target="_blank" key={i}>
              {socialmedia.icon}
            </SocialMedia>
          );
        })}
      </SocialMediaContainer>
      <MobilePages/>
    </Container>
  );
}
