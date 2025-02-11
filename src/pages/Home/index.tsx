import { Box } from "@mui/material";
import HomeNavbar from "../../components/Navbars/HomeNavbar";
import MainHeader from "../../components/MainHeader";
import Carousel from "../../components/Carousels/BestFoodCorousel";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "var(--orangeBackground)",
          height: screen,
          width: screen,
        }}
      >
        <HomeNavbar />
        <MainHeader />
      </Box>
      <Carousel />
    </Box>
  );
};

export default Home;
