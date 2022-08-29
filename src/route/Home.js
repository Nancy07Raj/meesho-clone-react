import React from 'react';
import styled from 'styled-components';
import * as Pages from 'components/pages';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function Home() {
	return (
		<Container>
			<Pages.Categories />
			<Pages.Pictures />
			<Pages.Products />
		</Container>
	);
}
