import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import "../../index.css";
import React from "react";

import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import NearMeIcon from "@mui/icons-material/NearMe";

import { fetchCurrentLocation } from "../../Services/locationService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const topLocations = [
  { title: "Current Location", id: 0 },
  { title: "New York", id: 1 },
  { title: "Los Angeles", id: 2 },
  { title: "Chicago", id: 3 },
];

const MainHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<{ title: string; id: number }[]>(
    []
  );
  const [inputValue, setInputValue] = React.useState("");

  const navigate = useNavigate();

  //   const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.location.location);
  const loadingLocation = useSelector(
    (state: RootState) => state.location.loading
  );

  React.useEffect(() => {
    if (location) {
      setTimeout(() => {
        setInputValue(location);
      }, 100);
    }
  }, [location]);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setOptions([...topLocations]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleOptionChange = (
    event: React.ChangeEvent<unknown>,
    value: { title: string } | null
  ) => {
    if (value?.title === "Current Location") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("User's Coordinates:", latitude, longitude);
            setInputValue(location);
            dispatch(fetchCurrentLocation({ latitude, longitude }));
          },
          (error) => {
            console.error("Error fetching geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    } else {
      setInputValue(value?.title || "");
    }
  };

  const CustomPopper = (props: React.ComponentProps<typeof Popper>) => {
    return (
      <Popper
        {...props}
        style={{
          width: "680px",
          paddingTop: "10px",
        }}
        placement="bottom-start"
      />
    );
  };

  return (
    <Box
      sx={{
        height: screen,
        width: screen,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          gap: 5,
          flexDirection: "column",
          paddingY: 5,
        }}
      >
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Image Not Found"
          style={{
            height: "33rem",
            width: "17rem",
            position: "absolute",
            left: 0,
            top: 10,
          }}
        />
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontFamily: "Gilroy, sans-serif",
              fontWeight: 600,
              color: "var(--whiteText)",
              textAlign: "center",
              marginTop: "3rem",
              zIndex: 10,
              paddingX: "10rem",
            }}
          >
            Order food & groceries. Discover best restaurants. Swiggy it!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Autocomplete
              sx={{ width: 300 }}
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              inputValue={inputValue}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              //   loading={loading}
              loading={loadingLocation}
              onChange={handleOptionChange}
              slots={{ popper: CustomPopper }}
              renderOption={(props, option) => (
                <li
                  {...props}
                  key={option.id}
                  style={{
                    color:
                      option.title === "Current Location"
                        ? "var(--orangeBackground)"
                        : "var(--blackText)",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--orangeBackground)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color =
                      option.title === "Current Location"
                        ? "var(--orangeBackground)"
                        : "var(--blackText)")
                  }
                >
                  {loadingLocation ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    <>
                      <NearMeIcon sx={{ marginRight: 1 }} />
                      <Typography>{option.title}</Typography>
                    </>
                  )}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Enter Your Delivery Location"
                  sx={{
                    backgroundColor: "var(--whiteText)",
                    borderRadius: 4,
                    "& .MuiOutlinedInput-root": {
                      border: "none",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <RoomIcon
                            sx={{
                              color: "var(--orangeBackground)",
                              fontSize: "28px",
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <>
                          {loadingLocation ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    },
                  }}
                />
              )}
            />
            {/* Search Field */}
            <TextField
              variant="outlined"
              placeholder="Search for restaurant, item or more"
              sx={{
                width: "400px",
                backgroundColor: "var(--whiteText)",
                borderRadius: 4,
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        sx={{
                          color: "var(--orangeBackground)",
                          fontSize: "28px",
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Box>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Image Not Found"
          style={{
            height: "33rem",
            width: "17rem",
            position: "absolute",
            right: 0,
            top: 10,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box onClick={() => navigate("/restaurants")}>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
              alt="Image Not Found"
              style={{
                width: "17rem",
                height: "20rem",
                cursor: "pointer",
              }}
            />
          </Box>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt="Image Not Found"
            style={{
              width: "17rem",
              height: "20rem",
              cursor: "pointer",
            }}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt="Image Not Found"
            style={{
              width: "17rem",
              height: "20rem",
              cursor: "pointer",
            }}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt="Image Not Found"
            style={{
              width: "17rem",
              height: "20rem",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainHeader;
