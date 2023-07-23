import { NavLink } from "react-router-dom";
import { appBarLogo } from "../../../util/data/DataDetails";
import "./Logo.css";

const Logo = () => {
  return (
    <NavLink
      to="/"
      style={{ paddingLeft: "25px", marginLeft: appBarLogo.logoMarginLeft }}
    >
      <img
        className={appBarLogo.logoClassName}
        src={appBarLogo.logoSrc}
        alt={appBarLogo.logoAlt}
      />
    </NavLink>
  );
};

export default Logo;
