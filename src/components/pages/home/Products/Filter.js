import React from 'react';
import DownArrow from 'assets/svg/down-arrow.svg';
import { Flex, Box, Image } from 'components/atom';
import * as S from './style';
import { productTypes } from 'components/helper/static-data';

export default function Filter() {
	return (
		<S.FilterContainer>
			<S.FilterCategory>
				<Flex>
					<h3>Sort By</h3>
				</Flex>
			</S.FilterCategory>
			<S.FilterCategory>
				<Flex flexDirection="column">
					<S.FCategoryName>FILTER</S.FCategoryName>
					<Box fontSize="10px" color="#666666">
						1000+ Products
					</Box>
				</Flex>
			</S.FilterCategory>

			{productTypes.map((filter) => (
				<S.FilterCategory key={filter?.id}>
					<S.FCategoryName>{filter?.name}</S.FCategoryName>
					<Image src={DownArrow} />
				</S.FilterCategory>
			))}
		</S.FilterContainer>
	);
}
