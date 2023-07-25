import { Title } from '../atoms/Title';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../molecules/ContactForm';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
`;

export default function Contact() {
	return (
		<Container>
			<Title
				as={motion.h2}
				initial={{ opacity: 0, y: 30, scaleX: 0.75 }}
				whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				CONTACT
			</Title>
			<ContactForm />
		</Container>
	);
}
