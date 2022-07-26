import React from 'react';
import { Image } from 'components/atom';
import * as Styled from './style';
import meeshoLogo from 'assets/svg/meesho-logo.svg';

function Header() {
	return (
		<Styled.Container>
			<Styled.TopHeader>
				<Styled.TopLink>
					<Image src={meeshoLogo} alt="meesho-logo" />
					<Styled.SearchBox>
						<Styled.SearchInput placeholder="Try Saree, Kurti or Search by Product Code" />
					</Styled.SearchBox>
				</Styled.TopLink>
			</Styled.TopHeader>
		</Styled.Container>
	);
}

export default Header;
