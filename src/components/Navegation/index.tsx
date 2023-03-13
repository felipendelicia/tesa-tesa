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
  return (
    <Container>
      <LogoContainer to='/'>
        <Logo src="./logo.svg" />
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
