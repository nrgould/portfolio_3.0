import * as React from 'react';
import '../index.css';
import { graphql, type HeadFC } from 'gatsby';
import Layout from '../components/organisms/Layout';
import Helmet from 'react-helmet';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import ImageGrid from '../components/organisms/ImageGrid';

const IndexPage = ({ data }) => {
	return (
		<Layout fullWidth>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<meta charSet='utf-8' />
				<title>
					Nicholas Gould | Brand Lifestyle Photographer & Filmmaker
				</title>
				<link
					rel='canonical'
					href='https://www.nicholasgouldphoto.com'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='theme-color' content='#fff533' />
				<link rel='manifest' href='/manifest.json' />
				<meta
					name='description'
					content='Photographer based out of Raleigh, North Carolina.'></meta>
			</Helmet>
			{/* <Hero /> */}
			{/* <About /> */}
			<ImageGrid data={data} />
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		allFile(filter: { sourceInstanceName: { eq: "images" } }, limit: 18) {
			edges {
				node {
					childImageSharp {
						fliud {
							aspectRatio
						}
						gatsbyImageData(
							layout: CONSTRAINED
							placeholder: BLURRED
							transformOptions: {
								fit: COVER
								cropFocus: ATTENTION
							}
						)
					}
				}
			}
		}
	}
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
