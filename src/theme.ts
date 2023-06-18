const palette = {
	pink: '#CE2D4F',

	blue: '#008BF8',
	darkBlue: '#094074',
	purple: '#6E6BC7',
	aqua: '#04A777',
	brown: '#FB8B24',

	lightPink: '#f4cdd5',
	lightBlue: '#e7f3fd',

	gray: '#E1dfe9',
	lightGray: '#dbdbdb',
	dimGray: '#666666',
	charcoal: '#3C474B',

	smokyBlack: '#161314',
	richBlack: '#0B090A',
	offBlack: '#211C1E',
	pureBlack: '#000',

	white: '#fff',
	offWhite: '#f9f9f9',

	darkLiver: '#4D4246',
	lightPeriwinkle: '#b4bdd7',

	secondaryText: '#9da4ba',
	secondaryTextSoft: '#e7e9ee',
	primaryTextSoft: '#d1d1d1',

	green: '#37bc64',
	lightGreen: '#E2f8E9',

	red: '#DE5050',
	lightRed: '#FFEBEB',

	yellow: '#F9AE3F',
	lightYellow: '#FFF8DE',

	black: '#0B0B0B',
	// white: '#F0F2F3',
};

export const theme = {
	colors: {
		//text
		primaryText: palette.offWhite,
		secondaryText: palette.gray,
		buttonText: palette.white,
		buttonTextBlack: palette.black,
		//primary / secondary
		primary: palette.pink,
		primarySoft: palette.lightPink,
		secondary: palette.blue,
		secondarySoft: palette.lightBlue,
		tertiary: palette.aqua,
		//status colors
		success: palette.green,
		successSoft: palette.lightGreen,
		warning: palette.yellow,
		warningSoft: palette.lightYellow,
		error: palette.red,
		errorSoft: palette.lightRed,
		disabled: palette.gray,
		//component colors
		icon: palette.gray,
		activeIcon: palette.offBlack,
		background: palette.smokyBlack,
		foreground: palette.offWhite,
		primaryCardBackground: palette.white,
		secondaryCardBackground: palette.offBlack,
		border: palette.lightGray,
		shadow: palette.black,
	},
	spacing: {
		none: 0,
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
		xxl: 60,
	},
};
