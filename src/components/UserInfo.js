import React from 'react';
import { Card, CardContent, TextField, Checkbox, FormControlLabel, Button, Grid, Stack} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { theme } from '../config/theme';

function UserInfo() {
	return (
		<ThemeProvider theme={theme}>
			<Card variant="outlined">
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField label="Họ và tên" fullWidth variant="outlined" name="name" margin="normal" />
						</Grid>
						<Grid item xs={6}>
							<TextField label="Sinh nhật" fullWidth variant="outlined" name="birthday" margin="normal" />
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Email"
								fullWidth
								variant="outlined"
								name="email"
								type="email"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Số điện thoại"
								fullWidth
								variant="outlined"
								name="phoneNumber"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel control={<Checkbox name="Nam" />} label="Male" />
							<FormControlLabel control={<Checkbox name="Nữ" />} label="Female" />
						</Grid>
						<Grid item xs={6}>
							<TextField
								label="Mật khẩu"
								fullWidth
								variant="outlined"
								name="password"
								type="password"
								margin="normal"
							/>
						</Grid>
					</Grid>
					<Stack margin={'10px'}>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</ThemeProvider>
	);
}

export default UserInfo;
