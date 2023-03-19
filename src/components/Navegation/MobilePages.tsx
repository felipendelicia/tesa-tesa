import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
    MobileClosePopUp,
  MobileIcon,
  MobileNavegationContainer,
  MobilePage,
  MobilePagesContainer,
  MobileSocialMedia,
  MobileSocialMediaContainer,
} from "./components";
import routes from "../../config/routes";
import socialmedia from "../../config/socialmedia";

export default function MobilePages() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) {
    return (
      <MobileNavegationContainer>
        <MobilePagesContainer>
          {routes.map((route, i) => {
            return (
              <MobilePage
                to={route.path}
                onClick={() => setIsOpen(false)}
                key={i}
              >
                {route.name}
              </MobilePage>
            );
          })}
        </MobilePagesContainer>
        <MobileSocialMediaContainer>
          {socialmedia.map((socialmedia, i) => {
            return (
              <MobileSocialMedia
                key={i}
                href={socialmedia.path}
                target="_blank"
              >
                {socialmedia.icon}
              </MobileSocialMedia>
            );
          })}
        </MobileSocialMediaContainer>
        <MobileClosePopUp onClick={()=>setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faXmark}/>
        </MobileClosePopUp>
      </MobileNavegationContainer>
    );
  } else {
    return (
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </MobileIcon>
    );
  }
}
