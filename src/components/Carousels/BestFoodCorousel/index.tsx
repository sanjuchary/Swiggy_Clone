import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeCards from "../../Cards/HomeCards";

interface Item {
  imageUrl: string;
  title: string;
  name: string;
  rating: string;
  description: string;
  price: string;
  address: string;
  distance: string;
  discount: string;
  discountType: string;
}

interface CarouselProps {
  items: Item[];
  itemsPerRow: number;
  rowsPerPage: number;
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, itemsPerRow, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        width: "80%",
        overflow: "hidden",
        margin: "auto",
        marginY: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "Gilroy, sans-serif",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            sx={{
              backgroundColor: "var(--grayButton)",
              borderRadius: "100%",
              marginRight: 1,
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight || items.length === 0}
            sx={{
              backgroundColor: "var(--grayButton)",
              borderRadius: "100%",
              marginRight: 1,
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        component="div"
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
          scrollbarWidth: "none",
          justifyContent: "space-evenly",
          gap: 2,
          transition: "transform 0.5s ease-in-out",
          scrollBehavior: "smooth",
          cursor: "pointer",
        }}
      >
        {[0, 1].map((row) => (
          <Box
            key={row}
            sx={{
              display: "flex",
              paddingLeft:
                title === "Discover best restaurants on Dineout"
                  ? "61rem"
                  : "28rem",
              justifyContent: "center",
              gap: 2,
              height: "20vh",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {items
              .slice(row * itemsPerRow, row * itemsPerRow + itemsPerRow)
              .map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    // justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {title === "Discover best restaurants on Dineout" ? (
                    <Box>
                      <HomeCards
                        image={item?.imageUrl}
                        title={item?.title}
                        rating={item?.rating}
                        description={item?.description}
                        price={item?.price}
                        address={item?.address}
                        distance={item?.distance}
                        discount={item?.discount}
                        discountType={item?.discountType}
                      />
                    </Box>
                  ) : (
                    <>
                      <img
                        key={index}
                        src={item.imageUrl}
                        alt={item.title}
                        style={{
                          height: "20vh",
                          width: "10vw",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          fontFamily: "Gilroy, sans-serif",
                          color: "var(--darkGray)",
                        }}
                      >
                        {item?.name}
                      </Typography>
                    </>
                  )}
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
