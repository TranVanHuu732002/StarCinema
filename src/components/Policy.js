import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
function Policy() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: "90%",
          overflow: "auto",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Chính Sách Thành Viên StarCinema
        </Typography>
        <Typography variant="body1" paragraph>
          Tại StarCinema, chúng tôi cam kết mang đến trải nghiệm đặt vé xem phim
          tuyệt vời nhất cho các thành viên của chúng tôi. Chúng tôi hiểu rằng
          sự trung thành của bạn đáng giá và để bày tỏ lòng biết ơn, chúng tôi
          đã thiết lập các chính sách đặc biệt cho hạng thành viên của
          StarCinema.
        </Typography>
        <ol>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Combo U22 Độc Quyền:</strong> Mỗi lần bạn mua Combo U22,
              bạn sẽ nhận được điểm tích lũy ở mức 3% đặc biệt dành cho tất cả
              các hạng thành viên của chúng tôi. Điều này giúp bạn tiết kiệm và
              nhận những ưu đãi đặc biệt mỗi khi bạn chọn Combo U22.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Quà Tặng Sinh Nhật Độc Đáo:</strong> Sinh nhật là dịp đặc
              biệt, vì vậy chúng tôi muốn kỷ niệm cùng bạn. Thành viên hạng
              G-Star và X-Star sẽ nhận được món quà sinh nhật đặc biệt bao gồm
              Combo 2 và vé xem phim 2D. Quà tặng này sẽ được thả vào tài khoản
              của bạn và có giá trị sử dụng trong tháng sinh nhật của bạn, miễn
              là bạn đã thực hiện ít nhất một giao dịch (vé/bắp nước) với chi
              tiêu &gt; 0 trong vòng 12 tháng trở lại.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Vé 2D Tặng Cho Thành Viên VIP:</strong> Thành viên VIP
              hạng G-Star và X-Star sẽ nhận được vé xem phim 2D miễn phí trong
              tháng sinh nhật của mình. Vé này có hiệu lực sử dụng trong tháng
              sinh nhật của bạn, giúp bạn có một trải nghiệm xem phim không giới
              hạn vào ngày đặc biệt của mình.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Nâng Hạng Thành Viên Đặc Biệt:</strong> Chúng tôi đánh giá
              sự trung thành của bạn. Nếu bạn được nâng hạng thành viên từ
              G-Star lên X-Star trong năm 2023, bạn sẽ nhận được tối đa 04 vé
              xem phim 2D miễn phí. Đây là cách chúng tôi chúc mừng bạn với
              những trải nghiệm xem phim thú vị và không giới hạn.
            </Typography>
          </li>
        </ol>
      </Paper>
    </Box>
  );
}
export default Policy;
