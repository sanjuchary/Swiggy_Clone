import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./Carousel.css"; // Create this file for custom styles

const items = [
  {
    title: "Biryani",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
  },
  {
    title: "South Indian",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
  },
  {
    title: "Burger",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
  },
  {
    title: "Pizza",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
  },
  {
    title: "Cake",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
  },
  {
    title: "North Indian",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
  },
  {
    title: "Dosa",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
  },
  {
    title: "Rolls",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
  },
  {
    title: "Paratha",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
  },
  {
    title: "Noodles",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
  },
  {
    title: "Pastry",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
  },
  {
    title: "Pure Veg",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png",
  },
  {
    title: "Pastry",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
  },
  {
    title: "Pure Veg",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png",
  },
];

const Carousel = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerRow = 6; // 6 items per row
  const rowsPerPage = 2; // 2 rows per page
  const itemsPerPage = itemsPerRow * rowsPerPage; // Total items per page
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "80%",
        overflow: "hidden",
        margin: "auto",
        marginY: "3rem",
      }}
    >
      <Typography sx={{ marginBottom: "1rem" }}>
        Order our best food options
      </Typography>
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", left: 0, top: "50%" }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          transition: "transform 0.5s ease",
        }}
      >
        {[0, 1].map((row) => (
          <Box
            key={row}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {paginatedItems
              .slice(row * itemsPerRow, row * itemsPerRow + itemsPerRow)
              .map((item, index) => (
                <img
                  key={index}
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    height: "20vh",
                    width: "20vw",
                    objectFit: "contain",
                  }}
                />
              ))}
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 0, top: "50%" }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
