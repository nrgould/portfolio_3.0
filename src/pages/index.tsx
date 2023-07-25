import * as React from 'react';
import '../index.css';
import { graphql, type HeadFC } from 'gatsby';
import Layout from '../components/organisms/Layout';
import Helmet from 'react-helmet';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import ImageGrid from '../components/organisms/ImageGrid';
import PortfolioImages from '../components/organisms/PortfolioImages';

const IndexPage = ({ data }) => {
	console.log(data);
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
			<PortfolioImages data={data} />
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		portfolioPhotos: allFile(
			filter: {
				extension: { regex: "/(jpg)|(png)|(jpeg)/" }
				relativeDirectory: { eq: "portfolio_images" }
			}
			limit: 20
			sort: { base: ASC }
		) {
			edges {
				node {
					base
					id
					childImageSharp {
						fluid {
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

// query HomePageQuery {
// 	allFile(filter: { sourceInstanceName: { eq: "images" } }, limit: 18) {
// 		edges {
// 			node {
// 				childImageSharp {
// 					gatsbyImageData(
// 						layout: CONSTRAINED
// 						placeholder: BLURRED
// 						transformOptions: {
// 							fit: COVER
// 							cropFocus: ATTENTION
// 						}
// 					)
// 				}
// 			}
// 		}
// 	}
// }
