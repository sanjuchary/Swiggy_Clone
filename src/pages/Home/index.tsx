import { Box } from "@mui/material";
import HomeNavbar from "../../components/Navbars/HomeNavbar";
import MainHeader from "../../components/MainHeader";
import Carousel from "../../components/Carousels/BestFoodCorousel";
import {
  dineOutData,
  foodDeliveryCities,
  foodItems,
  groceryDeliveryCities,
  instamartData,
} from "../../FakeData/data";
import FoodDelivery from "../../components/DeliveriedCities";
import Footer from "../../components/Footer";

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
      <Carousel
        items={foodItems}
        itemsPerRow={10}
        rowsPerPage={2}
        title="Order our best food options"
      />
      <Carousel
        items={instamartData}
        itemsPerRow={10}
        rowsPerPage={1}
        title="Shop groceries on Instamart"
      />
      <Box
        sx={{
          marginTop: "-2rem",
          marginBottom: "5rem",
        }}
      >
        <Carousel
          items={dineOutData}
          itemsPerRow={10}
          rowsPerPage={1}
          title="Discover best restaurants on Dineout"
        />
      </Box>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        alt="Image Not Found"
        style={{
          height: "35vh",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <FoodDelivery
        title="Cities with food delivery"
        items={foodDeliveryCities}
      />
      <FoodDelivery
        title="Cities with grocery delivery"
        items={groceryDeliveryCities}
      />
      <Footer />
    </Box>
  );
};

export default Home;
