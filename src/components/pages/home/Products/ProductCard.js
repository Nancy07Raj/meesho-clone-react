import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Image } from 'components/atom';
import { products } from 'components/helper/static-data';
import * as S from './style';

export default function ProductCard() {
	const navigate = useNavigate();
	return (
		<Flex flexWrap="wrap" width="80%" ml="10px" height="20%">
			{products?.map((item) => (
				<S.Card key={item?.id} onClick={() => navigate('/product-detail')}>
					<Image src={item?.image} width={220} height={232} />
					<S.CardName>{item?.title}</S.CardName>
					<Flex mt="10px">
						<S.Rupee>{item?.offerPrice}</S.Rupee>
						<S.Onwards>onwards</S.Onwards>
					</Flex>
					<S.FreeDelivery>Free Delivery</S.FreeDelivery>
					<Flex my="10px" alignItems="center" bg="white">
						<S.Rating>{item?.rating}</S.Rating>
						<S.Review>{item?.totalReviews} Reviews</S.Review>
					</Flex>
				</S.Card>
			))}
		</Flex>
	);
}
