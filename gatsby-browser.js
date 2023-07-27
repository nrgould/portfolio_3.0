import '@fontsource/josefin-sans';
import './styles.css';

import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const onServiceWorkerUpdateReady = () => {
	const answer = window.confirm(
		`This application has been updated. ` +
			`Reload to display the latest version?`
	);
	if (answer === true) {
		window.location.reload();
	}
};

export const wrapPageElement = ({ element }) => (
	<AnimatePresence mode='wait'>{element}</AnimatePresence>
);
