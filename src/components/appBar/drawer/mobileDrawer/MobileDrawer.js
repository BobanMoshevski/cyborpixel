import { Box, Drawer } from "@mui/material";
import MenuIconDrawer from "../menuIconDrawer/MenuIconDrawer";

const MobileDrawer = ({ setIsDrawerOpen, isDrawerOpen }) => {
  return (
    <>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          role="presentation"
          textAlign="center"
          sx={{
            bgcolor: "#191919",
          }}
        >
          <MenuIconDrawer setIsDrawerOpen={setIsDrawerOpen} />
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
