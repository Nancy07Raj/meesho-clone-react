import React from 'react';
import BeautyBtn from 'assets/images/beauty-btn.jpg';
import { Flex, Image, Box } from 'components/atom';
import * as Styled from './style';
import WomensWear from 'assets/images/womens-wear.jpg';
import MensWear from 'assets/images/mens-wear.jpg';
import KidsWear from 'assets/images/kids-wear.jpg';
// import FBackground from 'assets/images/home-banner.jpg';
// import EBackground from 'assets/images/essentials-bg1.jpg';
import Beauty from 'assets/images/beauty.jpg';
import Home from 'assets/images/home.jpg';
import Electronics from 'assets/images/electronics.jpg';
import ViewAll from 'assets/images/view-all.jpg';
import HomeBtn from 'assets/images/home-btn.jpg';
import ElectronicsBtn from 'assets/images/electronics-btn.jpg';
import GooglePlay from 'assets/images/google-play.png';
import AppStore from 'assets/images/appstore.png';

export default function Pictures() {
	return (
		<Styled.Container>
			<Flex alignItems="center">
				<Styled.Line />
				<Styled.Title>Top Categories to choose from</Styled.Title>
				<Styled.Line />
			</Flex>
			<Styled.Fashion>
				<Image src={WomensWear} width={320} height={400} />
				<Image src={MensWear} width={230} height={250} />
				<Image src={KidsWear} width={230} height={250} />
			</Styled.Fashion>
			<Styled.Electronics>
				<Image src={ViewAll} width={150} height={50} mb={180} ml="60px" />
				<Flex>
					<Flex flexDirection="column" m="0 8px 45px" alignItems="center">
						<Image src={Beauty} width={180} height={270} />
						<Image src={BeautyBtn} width={150} height={50} />
					</Flex>
					<Flex flexDirection="column" alignItems="center" mx="8px">
						<Image src={Home} width={180} height={270} />
						<Image src={HomeBtn} width={150} height={50} />
					</Flex>
					<Flex flexDirection="column" alignItems="center" mx="8px">
						<Image src={Electronics} width={180} height={270} />
						<Image src={ElectronicsBtn} width={150} height={50} />
					</Flex>
				</Flex>
			</Styled.Electronics>
			<Styled.Reseller>
				<Flex m="0 20px" flexDirection="column" alignItems="flex-end">
					<Box color="#5585F8" fontSize="38px" fontWeight={400} fontFamily="Mier Book">
						Become a Reseller and
					</Box>
					<Box
						color="#F43397"
						fontSize="48px"
						fontWeight={600}
						fontFamily="Mier Book"
						lineHeight="52px"
					>
						Start your Online Business
					</Box>
					<Box
						color="#F43397"
						fontSize="48px"
						fontWeight={600}
						fontFamily="Mier Book"
						lineHeight="52px"
					>
						with Zero Investment
					</Box>
					<Flex>
						<Image src={GooglePlay} width={150} height={40} m="3.125rem 10px" />
						<Image src={AppStore} width={150} height={40} m=" 3.125rem 10px" />
					</Flex>
				</Flex>
			</Styled.Reseller>
			<Styled.Supplier>
				<Flex flexDirection="column" color="white" px="10%">
					<Box fontSize="32px" lineHeight="40px" fontWeight="bold">
						Register as a Meesho Customer
					</Box>
					<Box fontSize="16px" lineHeight="20px" fontWeight="400" mt="16px">
						Sell your products to crores of customers at 0% commission
					</Box>
					<Flex my="5%">
						<Styled.SupplierSpan>Grow your business 10x</Styled.SupplierSpan>
						<Styled.SupplierSpan>Enjoy 100% Profit</Styled.SupplierSpan>
						<Styled.SupplierSpan>Sell all over India</Styled.SupplierSpan>
					</Flex>
					<Styled.Signup>Sign up Now</Styled.Signup>
				</Flex>
			</Styled.Supplier>
		</Styled.Container>
	);
}
