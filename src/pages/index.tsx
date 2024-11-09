import React, { useEffect, useRef, useState } from 'react';

import '../index.css';
import { graphql, type HeadFC } from 'gatsby';
import Layout from '../components/organisms/Layout';
import Helmet from 'react-helmet';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import PortfolioImages from '../components/organisms/PortfolioImages';
import styled from 'styled-components';
import Contact from '../components/organisms/Contact';
import Values from '../components/organisms/Values';
import Footer from '../components/organisms/Footer';
import Prints from '../components/organisms/Prints';

interface ScrollSnapContainerProps {
	snapEnabled: boolean;
}

const ScrollSnapContainer = styled.div<ScrollSnapContainerProps>`
	height: 100vh;
	max-width: 100vw;
	overflow-y: scroll;
	overflow-x: hidden;
	scroll-snap-type: ${({ snapEnabled }) =>
		snapEnabled ? 'y mandatory' : 'none'};
	scroll-behavior: smooth;
`;

const IndexPage = ({ data }) => {
	const [snapEnabled, setSnapEnabled] = useState(true);

	useEffect(() => {
		const portfolioSection = document.getElementById('portfolio-section');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setSnapEnabled(false);
						console.log('Snapping disabled');
					} else {
						setSnapEnabled(true);
						console.log('Snapping enabled');
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (portfolioSection) {
			observer.observe(portfolioSection);
		}

		return () => {
			if (portfolioSection) {
				observer.unobserve(portfolioSection);
			}
		};
	}, []);
	return (
		<>
			<Layout fullWidth>
				<Helmet htmlAttributes={{ lang: 'en' }}>
					<meta charSet='utf-8' />
					<title data-react-helmet='true'>
						Nicholas Gould | Brand Lifestyle Photographer &
						Filmmaker
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
						content='Photographer based out of Raleigh, North Carolina.'
					></meta>
				</Helmet>
				<ScrollSnapContainer snapEnabled={snapEnabled}>
					<Hero />
					<About />
					<div id='portfolio-section'>
						<PortfolioImages data={data} />
					</div>
					<Values />
					<Prints />
					<Contact />
					<Footer />
				</ScrollSnapContainer>
			</Layout>
		</>
	);
};

export const query = graphql`
	query HomePageQuery {
		portfolioPhotos: allFile(
			filter: {
				extension: { regex: "/(jpg)|(png)|(jpeg)/" }
				relativeDirectory: { eq: "optimized_images" }
			}
			sort: { base: DESC }
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
