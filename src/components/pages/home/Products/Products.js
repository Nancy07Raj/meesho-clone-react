import React from 'react';
import { Flex } from 'components/atom';
import * as S from './style';
import Filter from './Filter';
import ProductCard from './ProductCard';

export default function Products() {
	return (
		<S.Container>
			<S.Title>Product For You</S.Title>
			<Flex justifyContent="space-between">
				<Filter />
				<ProductCard />
			</Flex>
		</S.Container>
	);
}
