import { createTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export const ColorCode = {
	BG_COLOR: '#F9F9F9',
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
