import React from 'react';
import { Flex } from 'components/atom';
import * as S from './style';
import Filter from './Filter';

export default function Products() {
	return (
		<S.Container>
			<S.Title>Product For You</S.Title>
			<Flex>
				<Filter />
			</Flex>
		</S.Container>
	);
}
