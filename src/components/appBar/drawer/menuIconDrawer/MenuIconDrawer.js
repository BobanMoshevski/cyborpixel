import { Box } from "@mui/material";
import Logo from "../../logo/Logo";
import DrawerLinks from "../drawerLinks/DrawerLinks";

const MenuIconDrawer = ({ setIsDrawerOpen }) => {
  return (
    <Box flexDirection="column">
      <Logo />

      <DrawerLinks setIsDrawerOpen={setIsDrawerOpen} />
    </Box>
  );
};

export default MenuIconDrawer;
