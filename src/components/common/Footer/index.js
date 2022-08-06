import React from 'react';
import * as Styled from './style';
import { footerLinks } from 'components/helper/static-data';
import { Flex, Image } from 'components/atom';
import GooglePlay from 'assets/images/google-play.png';
import AppStore from 'assets/images/appstore.png';

export default function Footer() {
	return (
		<Styled.Container>
			<Flex m="40px 20px 0">
				<Flex flexDirection="column">
					<Styled.ShopTitle>Shop Non-Stop on Meesho</Styled.ShopTitle>
					<Styled.TrustPara>Trusted by more than 1 Crore Indians</Styled.TrustPara>
					<Styled.TrustPara>Cash on Delivery | Free Delivery</Styled.TrustPara>
					<Flex justifyContent="space-between" width="420px" mt="30px">
						<Image src={GooglePlay} width={200} height={50} />
						<Image src={AppStore} width={200} height={50} />
					</Flex>
				</Flex>
			</Flex>
			<Styled.FooterLink>
				<Styled.FooterTitle>Online Shopping</Styled.FooterTitle>
				{footerLinks?.map((link) => (
					<Styled.Section key={link?.id}>
						{link?.title}
						<span>
							{link?.links.map((item) => (
								<Styled.Links key={item?.id} to={item?.to}>
									{item?.title}
								</Styled.Links>
							))}
						</span>
					</Styled.Section>
				))}
			</Styled.FooterLink>
		</Styled.Container>
	);
}
