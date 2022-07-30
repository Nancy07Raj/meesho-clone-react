import React from 'react';
import { Header, Footer } from 'components/common';
import * as Pages from 'components/pages';

export default function Home() {
	return (
		<>
			<Header />
			<Pages.Categories />
			<Pages.Pictures />
			<Footer />
		</>
	);
}
