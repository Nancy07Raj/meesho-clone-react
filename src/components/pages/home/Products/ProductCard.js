import React from 'react';
import { Flex, Image } from 'components/atom';
import { products } from 'components/helper/static-data';
import * as S from './style';

export default function ProductCard() {
	return (
		<Flex flexWrap="wrap" width="80%" ml="10px">
			{products?.map((item) => (
				<S.Card key={item?.id}>
					<Image src={item?.image} width={220} height={232} />
					<S.CardName>{item?.title}</S.CardName>
					<Flex width="45%" justifyContent="space-between">
						<S.Rupee>{item?.offerPrice}</S.Rupee>
						<S.Onwards>onwards</S.Onwards>
					</Flex>
				</S.Card>
			))}
		</Flex>
	);
}
