import React from 'react';
import { Flex, Image } from 'components/atom';
import { products } from 'components/helper/static-data';
import * as S from './style';

export default function ProductCard() {
	return (
		<Flex flexWrap="wrap" width="70%">
			{products?.map((item) => (
				<S.Card key={item?.id}>
					<Image src={item?.image} width={150} />
					<S.CardName>{item?.title}</S.CardName>
					<Flex>
						<S.Rupee>{item?.offerPrice}</S.Rupee>
						<S.Onwards>onwards</S.Onwards>
					</Flex>
				</S.Card>
			))}
		</Flex>
	);
}
