import React from 'react';
import { Flex, Image } from 'components/atom';
import TShirt from 'assets/images/tshirt-black.jpg';

export default function ProductDetail() {
	return (
		<Flex alignItems="center">
			<Image src={TShirt} height={200} width={100} />
		</Flex>
	);
}
