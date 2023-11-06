import React, { useState } from "react";
import { FcAlarmClock, FcCalendar } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Paper,
  Stack,
  Tab,
  TableContainer,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

const countries = [
  { label: "Toàn Quốc" },
  { label: "Đà Nẵng" },
  { label: "Huế" },
  { label: "TP.Hồ Chí Minh" },
  { label: "hà Nội" },
];

const cinemas = [
  { label: "Galaxy Trần Phú " },
  { label: "Galaxy Đà Nẵng" },
  { label: "Galaxy Hà Đông" },
];

const itemData = [
  {
    id: "1",
    title: "20:15",
  },
  {
    id: "2",
    title: "20:15",
  },
  {
    id: "3",
    title: "20:15",
  },
  {
    id: "4",
    title: "20:15",
  },
  {
    id: "5",
    title: "20:15",
  },
  {
    id: "6",
    title: "20:15",
  },
  {
    id: "7",
    title: "20:15",
  },
  {
    id: "1",
    title: "20:15",
  },
  {
    id: "2",
    title: "20:15",
  },
  {
    id: "3",
    title: "20:15",
  },
  {
    id: "4",
    title: "20:15",
  },
  {
    id: "5",
    title: "20:15",
  },
  {
    id: "6",
    title: "20:15",
  },
  {
    id: "7",
    title: "20:15",
  },
];

const movies = [
  {
    title: "Đất Rừng Phương Nam",
    img: "img/phim1.jpg",
  },
  {
    title: "Quỷ Môn Quan: Gọi Hồn",
    img: "img/phim2.jpg",
  },
  {
    title: "Năm Đêm Kinh Hoàng",
    img: "img/phim3.jpg",
  },
];

function Details() {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack width={"100%"} p={"12px 32px 12px 32px"}>
      <Box>
        <img
          src="img/banner4.jpg"
          style={{ width: "100%", height: "400px" }}
          className="card-img-top rounded"
          alt="Banner"
        />
      </Box>
      <Grid container spacing={2}>
        <Grid xs={8} mt="18px" ml={"5%"}>
          <Card sx={{ maxWidth: "100%", margin: "8px 8px 8px 0" }}>
            <CardActionArea
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ maxHeight: "100%", width: "30%", objectFit: "cover" }}
                component="img"
                height="auto"
                image="img/phim1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Đất Rừng Phương Nam
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    justifyItems: "center",
                    marginBottom: "4px",
                  }}
                  variant="h7"
                  component="span"
                  color="text.secondary"
                >
                  <FcAlarmClock /> 132 phút <FcCalendar /> 11/10/2023
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  <FaStar fontSize={"16px"} /> 8.4(1706)
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Quốc gia : Việt Nam
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Nhà sản xuất : Đang cập nhật
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Thể loại : Tâm Lý , Tình Cảm
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Đạo diễn : Vidtor Vũ
                </Typography>
                <Typography
                  sx={{ justifyItems: "center", margin: "4px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Diễn viên : Kaity Nguyễn , Thuận Nguyễn , Đinh Ngọc Diệp ,
                  NSƯT Quang Thắng
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Box mt={"36px"} mb={"12px"}>
            <Typography gutterBottom variant="h5" component="div">
              <Divider>Nội Dung Phim</Divider>
            </Typography>
            <Typography fontSize={16} variant="p" component="div">
              Lấy cảm hứng từ tiểu thuyết Hồ Oán Hận, của nhà văn Hồng Thái,
              Người Vợ Cuối Cùng là một bộ phim tâm lý cổ trang, lấy bối cảnh
              Việt Nam vào triều Nguyễn. Linh - Người vợ bất đắc dĩ của một viên
              quan tri huyện, xuất thân là con của một gia đình nông dân nghèo
              khó, vì không thể hoàn thành nghĩa vụ sinh con nối dõi nên đã chịu
              sự chèn ép của những người vợ lớn trong gia đình. Sự gặp gỡ tình
              cờ của cô và người yêu thời thanh mai trúc mã của mình - Nhân đã
              dẫn đến nhiều câu chuyện bất ngờ xảy ra khiến cuộc sống cô hoàn
              toàn thay đổi.
            </Typography>
          </Box>

          <Box my={8}>
            <Typography variant="h5" component="div">
              <Divider>Lịch Chiếu</Divider>
            </Typography>
            <TableContainer component={Paper}>
              <Grid container my={1}>
                <Grid
                  xs={8}
                  mx={4}
                  sx={{
                    maxWidth: { xs: 320, sm: 480 },
                    bgcolor: "background.paper",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="Hôm nay (05/11)" />
                    <Tab label="Thứ Hai (06/11)" />
                    <Tab label="Thứ Ba (07/11)" />
                    <Tab label="Thứ Tư (08/11)" />
                    <Tab label="Thứ Năm (09/11)" />
                  </Tabs>
                </Grid>

                <Grid xs={2} mx={4}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 240 }}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Chọn Tỉnh/TP"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </TableContainer>
          </Box>

          {cinemas.map((cinema) => (
            <List>
              <ListItem>
                <TableContainer component={Paper}>
                  <Grid container>
                    <Grid xs={12} ml={2} mt={2}>
                      <Typography component="div" variant="h6">
                        {cinema.label}
                      </Typography>
                    </Grid>
                    <Grid ml={2} xs={2}>
                      <Typography componemt="div" variant="span">
                        2D Phụ Đề
                      </Typography>
                    </Grid>
                    <Grid xs={8} sx={{ mx: 4 }}>
                      <ImageList
                        sx={{ maxWidth: 500, height: 120, my: 1 }}
                        cols={5}
                        rowHeight={8}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.id}>
                            <Button
                              variant="contained"
                              sx={{ background: "#fff", color: "#000", mx: 1 }}
                            >
                              {item.title}
                            </Button>
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Grid>
                  </Grid>
                </TableContainer>
              </ListItem>
            </List>
          ))}
        </Grid>
        <Grid xs={3} sx={{ ml: "40px", mt: "32px" }}>
          <Typography sx={{mb: 2}} gutterBottom variant="h5" component="div">
            <Divider>
              <Chip sx={{ fontSize: 24 }} label="PHIM ĐANG CHIẾU" />
            </Divider>
          </Typography>

          {movies.map((movie) => (
            <List>
              <ListItem>
                <Card sx={{ width: "100%", my: "2px"}}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ objectFit: "cover" }}
                      loading="lazy"
                      component="img"
                      width="310px"
                      height="260px"
                      image={movie.img}
                      alt={movie.title}
                    />
                    <CardContent>
                      <Typography
                        sx={{ mx: "4px", my: "-4px" }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Details;
