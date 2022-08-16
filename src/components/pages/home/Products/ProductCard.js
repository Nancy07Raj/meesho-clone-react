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
					<Flex mt="10px">
						<S.Rupee>{item?.offerPrice}</S.Rupee>
						<S.Onwards>onwards</S.Onwards>
					</Flex>
					<S.FreeDelivery>Free Delivery</S.FreeDelivery>
					<Flex mt="10px">
						<S.Rating>{item?.rating}</S.Rating>
					</Flex>
				</S.Card>
			))}
		</Flex>
	);
}
