import { Box, Card, CardContent, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface HomeCardProps {
  title: string;
  image: string;
  rating: string;
  description: string;
  price: string;
  address: string;
  distance: string;
  discount: string;
  discountType: string;
}

const HomeCards: React.FC<HomeCardProps> = ({
  title,
  image,
  rating,
  description,
  price,
  address,
  distance,
  discount,
  discountType,
}) => {
  return (
    <Card
      sx={{
        // width: "screen/4",
        width: "20vw",
        height: "21rem",
        backgroundColor: "var(--whiteText)",
        // padding: 1,
        cursor: "pointer",
        boxShadow: 3,
        borderRadius: 5,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt="Image Not Found"
            style={{
              height: "19vh",
              width: "20vw",
              objectFit: "cover",
            }}
          />
          <Box>
            <Typography
              sx={{
                position: "absolute",
                top: "15vh",
                left: "1vw",
                width: "50%",
                fontSize: "1.25rem",
                fontWeight: 600,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--whiteText)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: "15vh",
                right: "1vw",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <StarsIcon
                sx={{
                  color: "var(--darkGreen)",
                  backgroundColor: "var(--whiteText)",
                  borderRadius: "100%",
                  fontSize: "1rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: "Gilroy, sans-serif",
                  color: "var(--whiteText)",
                }}
              >
                {rating}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              paddingY: 1,
              display: "flex",
              flexDirection: "column",
              gap: 0.25,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "19vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: 500,
                  color: "var(--blackText)",
                }}
              >
                {description}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: 500,
                  color: "var(--blackText)",
                }}
              >
                ₹{price} for two
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "19vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: 500,
                  color: "var(--blackText)",
                }}
              >
                {address}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: 500,
                  color: "var(--blackText)",
                }}
              >
                {distance}
              </Typography>
            </Box>
            <Box
              sx={{
                background: "var(--grayButton)",
                borderRadius: 2,
                paddingX: 1,
                width: "35%",
                marginY: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <BeenhereIcon
                sx={{ fontSize: "10px", color: "var(--lightGray)" }}
              />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "var(--lightGray)",
                }}
              >
                Table booking
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "var(--darkGreen)",
                borderRadius: 1,
                py: 1,
                p: 0.75,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,

                mt: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <LocalOfferIcon
                  sx={{
                    fontSize: "0.75rem",
                    color: "var(--whiteText)",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 500,
                    color: "var(--whiteText)",
                  }}
                >
                  Flat {discount} off on {discountType}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 500,
                    color: "var(--whiteText)",
                  }}
                >
                  3 more
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "var(--lightGreen)",
                borderRadius: 1,
                p: 0.75,
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                my: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 500,
                    color: "var(--darkGreen)",
                  }}
                >
                  Upto 10% off with bank
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCards;
