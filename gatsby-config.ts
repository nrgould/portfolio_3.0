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
Welcome to my world, where the art of lifestyle photography becomes a vessel for storytelling. I'm Nicholas Gould, a soul enamored by life's vibrant tapestry, a wanderer who seeks solace in the embrace of the great outdoors, a curious traveler with an insatiable thirst for exploration, a devoted coffee enthusiast, and above all, a passionate photographer. Through my lens, I capture moments that weave together the essence of human experiences, framed by the breathtaking landscapes and the intimate details of everyday life. Whether I'm sipping coffee in a bustling cafe, traversing distant lands in pursuit of new adventures, or simply reveling in the raw beauty of nature, photography is my faithful companion, immortalizing the laughter, the love, the fleeting moments that make life so extraordinary. Each frame tells a story, a snapshot of the joy, the emotions, and the boundless beauty that surrounds us. I invite you to join me on this visual journey, as we celebrate the art of living through the evocative art of lifestyle photography.`,
				icon: 'src/images/icon.png',
				include_favicon: true,
				background_color: '#0A0909',
				theme_color: '#EFCB68',
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
