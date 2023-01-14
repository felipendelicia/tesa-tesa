import { INavLinks, INavSocialMedia } from "../types/PropTypes";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import routes from "../config/routes";
import "../styles/Navbar.css";
import socialmedia from "../config/socialmedia";

const NavLinks = (props: INavLinks) => {
  return <Link to={props.path}>{props.name}</Link>;
};

const NavSocialMedia = (props: INavSocialMedia) => {
  return (
    <a href={props.path} target="_blank" rel="noreferrer">
      {props.icon}
    </a>
  );
};

export default function Navbar() {
  return (
    <div className="navbar-component-container">
      <Link to="/">
        <div className="navbar-brand-container">
          <Logo />
        </div>
      </Link>
      <div className="navbar-links-container">
        {routes.map((route, i) => {
          return <NavLinks path={route.path} name={route.name} key={i} />;
        })}
      </div>
      <div className="navbar-media-container">
        {socialmedia.map((media, i) => {
          return <NavSocialMedia path={media.path} icon={media.icon} key={i} />;
        })}
      </div>
    </div>
  );
}
