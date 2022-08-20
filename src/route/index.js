import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { ProductDetail } from 'components/pages/productDetail';

export default function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product-detail" element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}
