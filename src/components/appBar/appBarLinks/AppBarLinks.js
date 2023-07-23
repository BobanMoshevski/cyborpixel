import { NavLink } from "react-router-dom";
import { appBarLinks } from "../../../util/data/DataDetails";
import { Box } from "@mui/material";
import classes from "./AppBarLinks.module.css";

const AppBarLinks = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex", paddingRight: "45px" } }}>
      <ul className={classes.list}>
        {appBarLinks.map((navbarLink) => (
          <li key={navbarLink} className={classes["list-items"]}>
            <NavLink
              to={
                navbarLink === "HOME"
                  ? "/"
                  : `/${navbarLink
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("'", "")}`
              }
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {navbarLink}
            </NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AppBarLinks;
