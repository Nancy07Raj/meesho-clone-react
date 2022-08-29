import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from 'components/common';
import Home from './Home';
import Detail from './Details';

const Container = styled.div`
	padding-top: 10rem;
	max-width: 1280px;
	margin: 0 auto;
`;

export default function AppRoute() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-detail" element={<Detail />} />
				</Routes>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}
