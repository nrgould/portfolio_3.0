const palette = {
	pink: '#CE2D4F',

	blue: '#008BF8',
	darkBlue: '#094074',
	purple: '#6E6BC7',
	aqua: '#04A777',
	brown: '#FB8B24',

	mint: '#E1EFE6',

	primYellow: '#EFCB68',
	saffron: '#EAB934',

	lightPink: '#f4cdd5',
	lightBlue: '#e7f3fd',

	gray: '#E1dfe9',
	lightGray: '#dbdbdb',
	dimGray: '#666666',
	charcoal: '#3C474B',
	placeholder: '#757575',

	smokyBlack: '#0A0909',
	richBlack: '#0B090A',
	offBlack: '#211C1E',
	pureBlack: '#000',
	foregroundBlack: '#141414',

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

export const COLORS = {
	//text
	primaryText: palette.primYellow,
	secondaryText: palette.offWhite,
	buttonText: palette.white,
	buttonTextBlack: palette.black,

	placeholderText: palette.placeholder,

	//primary / secondary
	primary: palette.primYellow,
	primarySoft: palette.saffron,

	secondary: palette.mint,
	secondarySoft: palette.lightBlue,

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
	foreground: palette.foregroundBlack,
	border: palette.lightGray,
	shadow: palette.black,

	white: palette.white,
};

export const SHADOW = {
	normal: `2px 4px 16px 0 rgba(0, 0, 0, 0.08);`,
};

export const SIZES = {
	lengthSm1: '0.25rem',
	lengthSm2: '0.375rem',
	lengthSm3: '0.5rem',
	lengthMd1: '1rem',
	lengthMd2: '1.25rem',
	lengthMd3: '1.5rem',
	lengthLg1: '2rem',
	lengthLg2: '3rem',
	lengthLg3: '4rem',
};

export const breakpoint = 767;
