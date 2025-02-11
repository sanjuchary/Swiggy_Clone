import { Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HomeNavbar = () => {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          // paddingX: 20,
          // paddingY: 2,
        }}
      >
        <img
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Image Not found"
          style={{ width: "12vw", height: "100%" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 4,
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "var(--whiteText)",
              borderColor: "var(--whiteText)",
              fontWeight: "600",
              fontSize: "1rem",
              padding: 2,
              borderRadius: 4,
              textTransform: "initial",
              cursor: "pointer",
            }}
          >
            Swiggy Corporate
          </Button>
          <Button
            variant="text"
            sx={{
              color: "var(--whiteText)",
              borderColor: "var(--whiteText)",
              fontWeight: "600",
              fontSize: "1rem",
              padding: 2,
              borderRadius: 4,
              textTransform: "initial",
              cursor: "pointer",
            }}
          >
            Partner with us
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "var(--whiteText)",
              borderColor: "var(--whiteText)",
              fontWeight: "600",
              fontSize: "1rem",
              padding: 2,
              paddingX: 4,
              borderRadius: 4,
              textTransform: "initial",
              cursor: "pointer",
            }}
            endIcon={<ArrowOutwardIcon />}
          >
            Get the App
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "var(--whiteText)",
              borderColor: "var(--blackButton)",
              fontWeight: "600",
              fontSize: "1rem",
              backgroundColor: "var(--blackButton)",
              padding: 2,
              paddingX: 4,
              borderRadius: 4,
              textTransform: "initial",
              cursor: "pointer",
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeNavbar;
