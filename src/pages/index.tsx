import * as React from 'react';
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

const ScrollSnapContainer = styled.div`
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
`;

// const ProgressBar = styled(motion.div)`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	height: 10px;
// 	background: ${COLORS.primary};
// 	transform-origin: 0%;
// `;

const IndexPage = ({ data }) => {
	// const ref = React.useRef(null);

	// const { scrollYProgress } = useScroll({ target: ref });
	// const scaleX = useSpring(scrollYProgress, {
	// 	stiffness: 100,
	// 	damping: 30,
	// 	restDelta: 0.001,
	// });

	// useMotionValueEvent(scrollYProgress, 'change', (latest) => {
	// 	console.log('Page scroll: ', latest);
	// });

	return (
		<>
			<Layout fullWidth>
				<Helmet htmlAttributes={{ lang: 'en' }}>
					<meta charSet='utf-8' />
					<title>
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
						content='Photographer based out of Raleigh, North Carolina.'></meta>
				</Helmet>
				<ScrollSnapContainer>
					<Hero />
					{/* <Test /> */}
					<About />
					<PortfolioImages data={data} />
					<Values />
					<Contact />
					<Footer />
					{/* <ProgressBar style={{ scaleX }} /> */}
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
