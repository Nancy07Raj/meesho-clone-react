import React from 'react';
import BeautyBtn from 'assets/images/beauty-btn.jpg';
import { Flex, Image } from 'components/atom';
import * as Styled from './style';
import WomensWear from 'assets/images/womens-wear.jpg';
import MensWear from 'assets/images/mens-wear.jpg';
import KidsWear from 'assets/images/kids-wear.jpg';
import FBackground from 'assets/images/home-banner.jpg';
import EBackground from 'assets/images/essentials-bg1.jpg';
import Beauty from 'assets/images/beauty.jpg';
import Home from 'assets/images/home.jpg';
import Electronics from 'assets/images/electronics.jpg';
import ViewAll from 'assets/images/view-all.jpg';
import HomeBtn from 'assets/images/home-btn.jpg';
import ElectronicsBtn from 'assets/images/electronics-btn.jpg';

export default function Pictures() {
	return (
		<Styled.Container>
			<Flex alignItems="center">
				<Styled.Line />
				<Styled.Title>Top Categories to choose from</Styled.Title>
				<Styled.Line />
			</Flex>
			<Styled.Fashion background={FBackground}>
				<Image src={WomensWear} width={350} height={400} />
				<Image src={MensWear} width={250} height={250} />
				<Image src={KidsWear} width={250} height={250} />
			</Styled.Fashion>
			<Styled.Fashion background={EBackground}>
				<Image src={ViewAll} width={150} height={50} mb={180} ml="60px" />
				<Flex>
					<Flex flexDirection="column" m="0 8px 45px" alignItems="center">
						<Image src={Beauty} width={180} height={300} />
						<Image src={BeautyBtn} width={150} height={50} />
					</Flex>
					<Flex flexDirection="column" alignItems="center" mx="8px">
						<Image src={Home} width={180} height={300} />
						<Image src={HomeBtn} width={150} height={50} />
					</Flex>
					<Flex flexDirection="column" alignItems="center" mx="8px">
						<Image src={Electronics} width={180} height={300} />
						<Image src={ElectronicsBtn} width={150} height={50} />
					</Flex>
				</Flex>
			</Styled.Fashion>
		</Styled.Container>
	);
}
