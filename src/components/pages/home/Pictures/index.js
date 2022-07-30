import React from 'react';
import { Flex, Image } from 'components/atom';
import * as Styled from './style';
import WomensWear from 'assets/images/womens-wear.jpg';
import MensWear from 'assets/images/mens-wear.jpg';
import KidsWear from 'assets/images/kids-wear.jpg';

export default function Pictures() {
	return (
		<Styled.Container>
			<Flex alignItems="center">
				<Styled.Line />
				<Styled.Title>Top Categories to choose from</Styled.Title>
				<Styled.Line />
			</Flex>
			<Styled.Fashion>
				<Image src={WomensWear} width={350} height={400} />
				<Image src={MensWear} width={250} height={250} />
				<Image src={KidsWear} width={250} height={250} />
			</Styled.Fashion>
		</Styled.Container>
	);
}
