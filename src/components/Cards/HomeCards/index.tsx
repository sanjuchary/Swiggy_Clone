import { Box, Card, CardContent, Typography } from "@mui/material";

interface HomeCardProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  discount?: string;
}

const HomeCards: React.FC<HomeCardProps> = ({
  title,
  description,
  icon,
  discount,
}) => {
  return (
    <Card
      sx={{
        // width: "screen/4",
        height: "18rem",
        backgroundColor: "var(--whiteText)",
        padding: 1,
        boxShadow: 3,
        borderRadius: 10,
        textAlign: "center",
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.75rem",
              fontFamily: "Gilroy, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "var(--darkGray)",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                fontSize: "1.35rem",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "var(--lightGray)",
              }}
            >
              {description}
            </Typography>
          )}
          {discount && (
            <Typography
              sx={{
                fontSize: "1rem",
                backgroundColor: "var(--lightOrange)",
                padding: 1,
                paddingX: 2,
                borderRadius: 5,
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "var(--orangeBackground)",
                mt: 1,
              }}
            >
              Upto {discount} Off
            </Typography>
          )}
        </Box>
        <Box>
          {icon && (
            <Box
              sx={{
                fontSize: "35px",
                color: "var(--whiteText)",
                marginBottom: 3,
                backgroundColor: "var(--orangeBackground)",
                borderRadius: "100%",
                // height: "40px",
                width: "38px",
                padding: 1,
              }}
            >
              {icon}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCards;
