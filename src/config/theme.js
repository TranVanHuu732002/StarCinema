import { createTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export const ColorCode = {
	BG_COLOR: '#F9F9F9',
	TX_COLOR: '#0351B1'
};

export const theme = createTheme({
	components: {
		MuiTab: {
			styleOverrides: {},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					borderRadius: '80%',
				},
			},
		},
	},
});
