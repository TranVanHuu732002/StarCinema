import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Card, CardHeader, Divider, Grid, IconButton, Slider, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ColorCode } from '../../config/theme';
import UserInfo from '../../components/UserInfo';
import BillHistory from '../../components/BillHistory';
import { CiEdit } from 'react-icons/ci';
import Policy from '../../components/Policy';

const marks = [
	{
		value: 0,
		label: '0đ',
	},
	{
		value: 2000000,
		label: '2000000đ',
	},
	{
		value: 4000000,
		label: '4000000đ',
	},
	{
		value: 6000000,
		label: '6000000đ',
	},
];

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function valuetext(value) {
	return `${value}đ`;
}

function valueLabelFormat(value) {
	return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function Profile() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Stack justifyContent={'space-between'} direction="row" height={'100vh'} bgcolor={ColorCode.BG_COLOR} p={'10%'}>
			<Card sx={{ flex: 1, maxWidth: '30%', marginRight: '10%' }}>
				<Stack marginBottom={'35px'}>
				<CardHeader
					avatar={
						<IconButton onClick={''} component="span">
							<Avatar aria-label="recipe">
								<CiEdit />
							</Avatar>
						</IconButton>
					}
					title={
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Typography marginBottom={'15px'} variant="body2">
									Họ và tên
								</Typography>
								<Typography marginBottom={'-10px'} variant="body2">
									Star
								</Typography>
							</Grid>
						</Grid>
					}
				/>
				</Stack>
				<Divider sx={{ opacity: 1 }} />
				<Stack marginTop={'20px'} marginBottom={'70px'}>
					<CardContent>
						<Typography variant="body1" fontWeight={700}>
							Tổng chi tiêu 2023
						</Typography>
						<Stack marginTop={'85px'}>
							<Slider
								aria-label="Restricted values"
								defaultValue={0}
								valueLabelFormat={valueLabelFormat}
								getAriaValueText={valuetext}
								step={null}
								valueLabelDisplay="auto"
								marks={marks}
							/>
						</Stack>
					</CardContent>
				</Stack>
				<Divider sx={{ opacity: 1 }} />
				<CardContent>
					<Typography variant="body2" fontWeight={700} display={'inline'}>
						HOTLINE hỗ trợ:
					</Typography>
					<Typography variant="body2" fontWeight={700} color={ColorCode.TX_COLOR} display={'inline'}>
						19002224 (9:00 - 22:00)
					</Typography>
				</CardContent>
				<Divider sx={{ opacity: 1 }} />
				<CardContent>
					<Typography variant="body2" fontWeight={700} display={'inline'}>
						Email:
					</Typography>
					<Typography variant="body2" fontWeight={700} color={ColorCode.TX_COLOR} display={'inline'}>
						supply@starcinema.vn
					</Typography>
				</CardContent>
				<Divider sx={{ opacity: 1 }} />
				<CardContent>
					<Typography variant="body2" fontWeight={700} display={'inline'}>
						Facebook:
					</Typography>
					<Typography variant="body2" fontWeight={700} color={ColorCode.TX_COLOR} display={'inline'}>
						facebook.com/StarCinema
					</Typography>
				</CardContent>
			</Card>
			<Box sx={{ flex: 1 }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Lịch sử giao dịch" {...a11yProps(0)} />
						<Tab label="Thông tin cá nhân" {...a11yProps(1)} />
						<Tab label="Chính sách" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					{<BillHistory></BillHistory>}
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					{<UserInfo></UserInfo>}
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<Policy></Policy>
				</CustomTabPanel>
			</Box>
		</Stack>
	);
}
