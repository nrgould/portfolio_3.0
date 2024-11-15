module.exports = {
	transform: {
		'^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
		'^.+\\.tsx?$': `babel-jest`,
	},
	moduleNameMapper: {
		'.+\\.(css|scss|sass|less)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|svg|webp|avif)$': `<rootDir>/__mocks__/file-mock.js`,
	},
	testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
	testEnvironment: `jest-environment-jsdom`,
};
