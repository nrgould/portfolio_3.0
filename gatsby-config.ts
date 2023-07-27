import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Nicholas Gould | Photographer & Filmmaker`,
		siteUrl: `https://www.nicholasgouldphoto.com`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-178459934-1',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Nicholas Gould',
				start_url: '/',
				description: `
I am a dedicated lifestyle photographer with a keen eye for detail and a passion for storytelling. Inspired by the beauty of the outdoors and fueled by coffee, I am on a mission to capture authentic moments that reflect the art of living and inspire awe. With a deep appreciation for nature and an innate ability to connect with people, I strive to create compelling visuals that resonate with audiences and evoke emotions. Let's collaborate to bring your vision to life through the art of photography.`,
				icon: 'src/images/icon.png',
				include_favicon: true,
				background_color: '#0A0909',
				theme_color: '#EFCB68',
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};

export default config;
