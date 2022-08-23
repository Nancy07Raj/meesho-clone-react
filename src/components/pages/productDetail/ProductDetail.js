import React from 'react';
import { Flex, Image } from 'components/atom';
import TShirt from 'assets/images/tshirt-black.jpg';
import * as S from './style';
import {
	Card,
	CardName,
	Rupee,
	Onwards,
	FreeDelivery,
	Rating,
	Review,
} from 'components/pages/home/Products/style';

export default function ProductDetail() {
	return (
		<S.container>
			<Image src={TShirt} height={50} width={40} />
			<S.ImageView>
				<Flex border="1px solid #dfdfdf" alignItems="center" justifyContent="center">
					<Image src={TShirt} height={400} width={350} />
				</Flex>
				<Flex mt="20px" justifyContent="space-between">
					<S.CartBtn>Add to Cart</S.CartBtn>
					<S.BuyNow>Buy Now</S.BuyNow>
				</Flex>
			</S.ImageView>
			<Card width="500px" padding="20px" height="150px">
				<CardName>T-SHIRT</CardName>
				<Flex mt="10px">
					<Rupee>598</Rupee>
					<Onwards>onwards</Onwards>
				</Flex>
				<FreeDelivery>Free Delivery</FreeDelivery>
				<Flex my="10px" alignItems="center" bg="white">
					<Rating>3.5</Rating>
					<Review>63 Reviews, 23 Rating</Review>
				</Flex>
			</Card>
		</S.container>
	);
}
