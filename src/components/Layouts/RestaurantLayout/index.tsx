import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../../Footer";
import RestaurantNavbar from "../../Navbars/RestaurantNavbar";

const RestaurantLayout = () => {
  return (
    <Box sx={{}}>
      <RestaurantNavbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default RestaurantLayout;
