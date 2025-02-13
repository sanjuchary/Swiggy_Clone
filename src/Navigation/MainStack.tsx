import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RestaurantLayout from "../components/Layouts/RestaurantLayout";
import Restaurants from "../pages/Restaurants";

const MainStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RestaurantLayout />}>
          <Route path="/restaurants" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainStack;
