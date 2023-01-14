import { INavLinks } from "../types/PropTypes";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import routes from "../config/routes";
import "../styles/Navbar.css";

const NavLinks = (props: INavLinks) => {
  return <Link to={props.path}>{props.name}</Link>;
};

export default function Navbar() {
  return (
    <div className="navbar-component-container">
      <Link to="/">
      <div className="navbar-brand-container">
        <Logo/>
        <p>tesa tesa</p>
      </div>
      </Link>
      <div className="navbar-links-container">
        {routes.map((route, i) => {
          return <NavLinks path={route.path} name={route.name} />;
        })}
      </div>
    </div>
  );
}
