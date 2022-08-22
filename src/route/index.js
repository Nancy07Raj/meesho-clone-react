import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'components/common';
import Home from './Home';
import { ProductDetail } from 'components/pages/productDetail';

export default function AppRoute() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product-detail" element={<ProductDetail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
