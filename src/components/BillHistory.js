import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";

function BillHistory() {
  return (
    <ThemeProvider theme={theme}>
      <Divider>
        <Chip label="Tháng 08/2023" />
      </Divider>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: "10%", height: "125px" }}
          image="img/phim1.jpg"
          alt="Movie Image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" fontWeight={600}>
              Đất rừng phương Nam
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              2D Phụ Đề
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "6px",
            marginLeft: "auto",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              StarCinema Da Nang -{" "}
              <span style={{ fontWeight: 600 }}>Rap 6</span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Typography component="span" sx={{ fontWeight: 600 }}>
                20:15
              </Typography>{" "}
              - Thứ Sáu,{" "}
              <Typography component="span" sx={{ fontWeight: 600 }}>
                25/08/2024
              </Typography>
            </Typography>
          </CardContent>
        </Box>
        <Stack
          justifyContent={"center"}
          marginLeft={"100px"}
          marginBottom={"8px"}
          marginRight={"20px"}
        >
          <Link>Chi tiết</Link>
        </Stack>
      </Card>
      <Divider sx={{ margin: "10px" }}>
        <Chip label="Tháng 05/2023" />
      </Divider>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: "10%", height: "125px" }}
          image="img/phim9.jpg"
          alt="Movie Image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" fontWeight={600}>
              Chú hề ma quái
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              2D Phụ Đề
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "6px",
            marginLeft: "auto",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              StarCinema Da Nang -{" "}
              <span style={{ fontWeight: 600 }}>Rap 1</span>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Typography component="span" sx={{ fontWeight: 600 }}>
                13:15
              </Typography>{" "}
              - Thứ Sáu,{" "}
              <Typography component="span" sx={{ fontWeight: 600 }}>
                25/05/2024
              </Typography>
            </Typography>
          </CardContent>
        </Box>
        <Stack
          justifyContent={"center"}
          marginLeft={"100px"}
          marginBottom={"8px"}
          marginRight={"20px"}
        >
          <Link>Chi tiết</Link>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}

export default BillHistory;
