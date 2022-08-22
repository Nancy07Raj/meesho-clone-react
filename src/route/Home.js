import React from 'react';
import * as Pages from 'components/pages';

export default function Home() {
	return (
		<>
			<Pages.Categories />
			<Pages.Pictures />
			<Pages.Products />
		</>
	);
}
