import React from 'react';
import * as Styled from './style';
import { footerLinks } from 'components/helper/static-data';
import { Flex, Image } from 'components/atom';
import GooglePlay from 'assets/images/google-play.png';
import AppStore from 'assets/images/appstore.png';
import LinkedIn from 'assets/images/linkedin.png';
import Facebook from 'assets/images/facebook.png';
import Twitter from 'assets/images/twitter.png';
import Youtube from 'assets/images/youtube.png';
import Instagram from 'assets/images/instagram.png';

export default function Footer() {
	return (
		<Styled.Container>
			<Flex m="40px 20px 0">
				<Flex flexDirection="column">
					<Styled.ShopTitle shop>Shop Non-Stop on Meesho</Styled.ShopTitle>
					<Styled.TrustPara>Trusted by more than 1 Crore Indians</Styled.TrustPara>
					<Styled.TrustPara>Cash on Delivery | Free Delivery</Styled.TrustPara>
					<Flex justifyContent="space-between" width="420px" mt="30px">
						<Image src={GooglePlay} width={200} height={50} />
						<Image src={AppStore} width={200} height={50} />
					</Flex>
				</Flex>
				<Flex flexDirection="column" ml="3%">
					<Styled.ShopLink>Careers</Styled.ShopLink>
					<Styled.ShopLink>Become a supplier</Styled.ShopLink>
					<Styled.ShopLink>Our Influencer Program</Styled.ShopLink>
					<Styled.ShopLink>Hall of Fame</Styled.ShopLink>
				</Flex>
				<Flex flexDirection="column" ml="3%">
					<Styled.ShopLink>Legal and Policies</Styled.ShopLink>
					<Styled.ShopLink>Meesho Tech Blog</Styled.ShopLink>
					<Styled.ShopLink>Notices and Returns</Styled.ShopLink>
				</Flex>
				<Flex flexDirection="column" ml="3%">
					<Styled.ShopTitle>Reach out to us</Styled.ShopTitle>
					<Flex width="180px" justifyContent="space-between" mt="10px">
						<Image src={Facebook} height={25} />
						<Image src={Instagram} />
						<Image src={Youtube} />
						<Image src={LinkedIn} />
						<Image src={Twitter} />
					</Flex>
				</Flex>
				<Flex flexDirection="column" ml="3%">
					<Styled.ShopTitle>Contact Us</Styled.ShopTitle>
					<Styled.ContactUs>Fashnear Technologies Private Limited,</Styled.ContactUs>
					<Styled.ContactUs>CIN: U74900KA2015PTC082263</Styled.ContactUs>
					<Styled.ContactUs>06-105-B, 06-102, (138 Wu)</Styled.ContactUs>
					<Styled.ContactUs>Vaishnavi Signature, No. 78/9</Styled.ContactUs>
					<Styled.ContactUs>Outer Ring Road, Bellandur,</Styled.ContactUs>
					<Styled.ContactUs>Varthur Hobli, Bengaluru-560103,</Styled.ContactUs>
					<Styled.ContactUs>Karnataka, India</Styled.ContactUs>
					<Styled.ContactUs>E-mail address: query@meesho.com</Styled.ContactUs>
					<Styled.ContactUs>© 2015-2022 Meesho.com</Styled.ContactUs>
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
