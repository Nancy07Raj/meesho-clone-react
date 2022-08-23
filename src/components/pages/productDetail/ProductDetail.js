import React from 'react';
import { Flex, Image } from 'components/atom';
import TShirt from 'assets/images/tshirt-black.jpg';
import * as S from './style';

export default function ProductDetail() {
	return (
		<S.container>
			<Image src={TShirt} height={50} width={40} />
			<S.ImageView>
				<Flex border="1px solid #f0f0f0" alignItems="center" justifyContent="center">
					<Image src={TShirt} height={400} width={350} />
				</Flex>
				<Flex mt="20px" justifyContent="space-between">
					<S.CartBtn>Add to Cart</S.CartBtn>
					<S.BuyNow>Buy Now</S.BuyNow>
				</Flex>
			</S.ImageView>
		</S.container>
	);
}
