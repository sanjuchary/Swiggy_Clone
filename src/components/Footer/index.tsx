import {
  Box,
  Typography,
  IconButton,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "var(--grayFooter)", py: 4, mt: 4 }}>
      <Box sx={{ width: "80%", margin: "auto" }}>
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {/* Logo and Copyright */}
          <Box sx={{ flex: "1 1 200px", mb: 2 }}>
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Image Not Found"
              style={{
                width: "10vw",
                height: "10vh",
              }}
            />
            <Typography
              sx={{
                color: "#777",
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Gilroy, sans-serif",
              }}
            >
              © 2025 Swiggy Limited
            </Typography>
          </Box>

          {/* Sections */}
          {[
            {
              title: "Company",
              items: [
                "About Us",
                "Swiggy Corporate",
                "Careers",
                "Team",
                "Swiggy One",
                "Swiggy Instamart",
                "Swiggy Dineout",
                "Swiggy Genie",
                "Minis",
              ],
            },
            {
              title: "Contact us",
              items: ["Help & Support", "Partner With Us", "Ride With Us"],
            },
            {
              title: "Legal",
              items: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"],
            },
            {
              title: "Life at Swiggy",
              items: ["Explore With Swiggy", "Swiggy News", "Snackables"],
            },
          ].map((section, index) => (
            <Box key={index} sx={{ flex: "1 1 150px", mb: 2, my: 3 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                  mb: 1,
                }}
              >
                {section.title}
              </Typography>
              {section.items.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#777",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    fontFamily: "Gilroy, sans-serif",
                    mb: 0.75,
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          ))}

          {/* Available Cities */}
          <Box sx={{ flex: "1 1 150px", mb: 2, mt: 3 }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                fontFamily: "Gilroy, sans-serif",
                mb: 1,
              }}
            >
              Available in:
            </Typography>
            {[
              "Bangalore",
              "Gurgaon",
              "Hyderabad",
              "Delhi",
              "Mumbai",
              "Pune",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#777",
                  fontSize: "0.85rem",
                  mb: 0.75,
                  fontWeight: 500,
                  fontFamily: "Gilroy, sans-serif",
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
            <Select
              defaultValue="685 cities"
              sx={{
                fontSize: "0.875rem",
                color: "#777",
                mt: 1,
                height: "4vh",
                backgroundColor: "var(--grayFooter)",
              }}
            >
              <MenuItem value="685 cities">685 cities</MenuItem>
            </Select>

            {/* Social Links */}
            <Box sx={{ flex: "1 1 150px", mb: 2, mt: 1 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Social Links
              </Typography>
              <Box sx={{ display: "flex", gap: 0.1 }}>
                <IconButton
                  sx={{ color: "var(--darkGray)" }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/swiggy-in/",
                      "_blank"
                    )
                  }
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  sx={{ color: "var(--darkGray)" }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/swiggyindia/?hl=en",
                      "_blank"
                    )
                  }
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  sx={{ color: "var(--darkGray)" }}
                  onClick={() =>
                    window.open("https://www.facebook.com/swiggy.in/", "_blank")
                  }
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{ color: "var(--darkGray)" }}
                  onClick={() =>
                    window.open(
                      "https://in.pinterest.com/swiggyindia/",
                      "_blank"
                    )
                  }
                >
                  <Pinterest />
                </IconButton>
                <IconButton
                  sx={{ color: "var(--darkGray)" }}
                  onClick={() => window.open("https://x.com/Swiggy", "_blank")}
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* App Download Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--darkGray)",
              fontFamily: "Gilroy, sans-serif",
            }}
          >
            For better experience, download the Swiggy app now
          </Typography>
          <Button
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                "_blank"
              )
            }
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt="App Store"
              width={180}
            />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                "_blank"
              )
            }
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt="Google Play"
              width={180}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
