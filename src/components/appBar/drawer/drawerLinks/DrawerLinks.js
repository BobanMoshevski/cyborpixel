import { NavLink } from "react-router-dom";
import { appBarLinks } from "../../../../util/data/DataDetails";
import classes from "./DrawerLinks.module.css";

const DrawerLinks = ({ setIsDrawerOpen }) => {
  return (
    <>
      <ul className={classes["drawer-list"]}>
        {appBarLinks.map((drawerLink) => (
          <li key={drawerLink} className={classes["drawer-list-items"]}>
            <NavLink
              to={
                drawerLink === "HOME"
                  ? "/"
                  : `/${drawerLink
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("'", "")}`
              }
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {drawerLink}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DrawerLinks;
