import React, { useState } from 'react';
import { Image, Flex } from 'components/atom';
import * as Styled from './style';
import meeshoLogo from 'assets/svg/meesho-logo.svg';
import download from 'assets/svg/download.svg';
import cart from 'assets/svg/cart.svg';
import profile from 'assets/svg/profile.svg';
import { links } from 'components/helper/static-data';

function Header() {
	const [menu, setMenu] = useState([]);
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.TopHeader>
					<Styled.TopLink>
						<Flex>
							<Image src={meeshoLogo} alt="meesho-logo" />
							<Styled.SearchBox>
								<Styled.SearchInput placeholder="Try Saree, Kurti or Search by Product Code" />
							</Styled.SearchBox>
						</Flex>
						<Flex alignItems="center" justifyContent="flex-end">
							<Flex borderRight="2px solid #DFDFDF" alignItems="center" height="30px">
								<Image src={download} alt="mobile" height={20} />
								<Styled.HeaderText>Download App</Styled.HeaderText>
							</Flex>
							<Flex borderRight="2px solid #DFDFDF" alignItems="center" height="30px">
								<Styled.HeaderText>Become a Supplier</Styled.HeaderText>
							</Flex>
							<Flex borderRight="2px solid #DFDFDF" alignItems="center" height="30px">
								<Styled.HeaderText>Newsroom</Styled.HeaderText>
							</Flex>
							<Flex alignItems="center" justifyContent="center" height="30px">
								<Flex flexDirection="column" alignItems="center">
									<Image src={profile} alt="mobile" height={20} />
									<Styled.HeaderText>Profile</Styled.HeaderText>
								</Flex>
								<Flex flexDirection="column" alignItems="center">
									<Image src={cart} alt="mobile" height={20} />
									<Styled.HeaderText>Cart</Styled.HeaderText>
								</Flex>
							</Flex>
						</Flex>
					</Styled.TopLink>
				</Styled.TopHeader>
				<Styled.TopHeader>
					<Styled.Links>
						{links?.map((link) => (
							<Styled.LinkText
								key={link.id}
								onMouseEnter={() => setMenu(link?.subMenus)}
							>
								{link.text}
							</Styled.LinkText>
						))}
					</Styled.Links>
				</Styled.TopHeader>
				{menu?.length > 0 && (
					<Styled.Menu>
						{menu?.map((m) => (
							<Styled.SubMenu key={m.id}>
								<Styled.MenuTitle key={m.id}>{m?.menuTitle}</Styled.MenuTitle>
								{m?.menus?.map((item) => (
									<Styled.MenuLink
										key={item?.id}
										to={item?.to}
										onClick={() => setMenu('')}
									>
										{item?.text}
									</Styled.MenuLink>
								))}
							</Styled.SubMenu>
						))}
					</Styled.Menu>
				)}
			</Styled.Content>
		</Styled.Container>
	);
}

export default Header;
