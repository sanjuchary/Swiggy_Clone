import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

interface City {
  name: string;
}

interface FoodDeliveryProps {
  items: City[];
  title: string;
}

const FoodDelivery = ({ items, title }: FoodDeliveryProps) => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 9 cities initially
  const visibleCities = showAll ? items : items.slice(0, 11);

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        my: 10,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.75rem",
          fontWeight: 600,
          fontFamily: "Gilroy, sans-serif",
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          //   justifyContent: "space-evenly",
          gap: 2,
          my: 2,
        }}
      >
        {visibleCities.map((item, index) => (
          <Button
            key={index}
            sx={{
              width: "17rem",
              border: "1px solid var(--grayButton)",
              borderRadius: 5,
              backgroundColor: "var(--whiteText)",
              color: "var(--darkGray)",
              textTransform: "capitalize",
              padding: 2,
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Gilroy, sans-serif",
            }}
          >
            Order Food online In {item.name}
          </Button>
        ))}
        {!showAll && (
          <Button
            sx={{
              width: "17rem",
              border: "1px solid var(--grayButton)",
              borderRadius: 5,
              backgroundColor: "var(--whiteText)",
              color: "var(--orangeBackground)",
              textTransform: "capitalize",
              padding: 2,
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Gilroy, sans-serif",
            }}
            onClick={() => setShowAll(true)}
          >
            Show More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FoodDelivery;
