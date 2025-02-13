import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  List,
  TextField,
  Typography,
} from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentLocation } from "../../../Services/locationService";
import { AppDispatch, RootState } from "../../../redux/store";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const RestaurantNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.location.location);
  const loadingLocation = useSelector(
    (state: RootState) => state.location.loading
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Function to get the current location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOpen(false);
          dispatch(fetchCurrentLocation({ latitude, longitude }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  console.log("Location", location);
  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation">
      <List
        sx={{
          paddingX: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Search Field */}
        <TextField
          variant="outlined"
          placeholder="Search for street, street name.."
          sx={{
            width: "90%",
            backgroundColor: "var(--whiteText)",
            borderRadius: 4,
          }}
        />
        <Box
          sx={{
            width: "80%",
            padding: 2,
            border: "1px solid var(--lightGray)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            cursor: "pointer",
          }}
          onClick={handleGetLocation}
        >
          <GpsFixedIcon />

          <Box>
            <Typography
              sx={{
                width: "100%",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "var(--orangeBackground)",
                },
              }}
            >
              Get Current Location
            </Typography>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--blackText)",
              }}
            >
              Using GPS
            </Typography>
          </Box>
        </Box>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          width: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Image Not found"
            style={{ width: "12vw", height: "100%" }}
          />
          <Button onClick={toggleDrawer(true)}>
            {loadingLocation ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              <>
                <Typography
                  sx={{
                    width: "15vw",
                    fontSize: "1rem",
                    fontWeight: 500,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--darkGray)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "var(--orangeBackground)",
                    },
                  }}
                >
                  {location ? location : "Other"}
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: "2rem", color: "var(--darkGray)" }}
                />
              </>
            )}
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 2,
            //   backgroundColor: "#000",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <WorkOutlineIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              Swiggy Corparate
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              Search
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <LocalOfferIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              Offers
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <HelpIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              help
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <ExitToAppIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              Sign In
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <ShoppingCartIcon
              sx={{
                fontSize: "1.5rem",
                color: "var(--darkGray)",
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--darkGray)",
              }}
            >
              Cart
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantNavbar;
