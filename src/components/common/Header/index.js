import React from 'react';
import { Image, Flex } from 'components/atom';
import * as Styled from './style';
import meeshoLogo from 'assets/svg/meesho-logo.svg';
import download from 'assets/svg/download.svg';
import cart from 'assets/svg/cart.svg';
import profile from 'assets/svg/profile.svg';

function Header() {
	return (
		<Styled.Container>
			<Styled.TopHeader>
				<Styled.TopLink>
					<Flex>
						<Image src={meeshoLogo} alt="meesho-logo" />
						<Styled.SearchBox>
							<Styled.SearchInput placeholder="Try Saree, Kurti or Search by Product Code" />
						</Styled.SearchBox>
					</Flex>
					<Flex alignItems="center">
						<Flex borderRight="2px solid #DFDFDF" alignItems="center" height="30px">
							<Image src={download} alt="mobile" width={20} height={20} />
							<Styled.HeaderText>Download</Styled.HeaderText>
						</Flex>
						<Flex borderRight="2px solid #DFDFDF" alignItems="center" height="30px">
							<Styled.HeaderText>Become a Supplier</Styled.HeaderText>
						</Flex>
						<Flex alignItems="center" justifyContent="center" height="30px">
							<Flex flexDirection="column" alignItems="center">
								<Image src={profile} alt="mobile" width={20} height={20} />
								<Styled.HeaderText>Profile</Styled.HeaderText>
							</Flex>
							<Flex flexDirection="column" alignItems="center">
								<Image src={cart} alt="mobile" width={20} height={20} />
								<Styled.HeaderText>Cart</Styled.HeaderText>
							</Flex>
						</Flex>
					</Flex>
				</Styled.TopLink>
			</Styled.TopHeader>
		</Styled.Container>
	);
}

export default Header;
