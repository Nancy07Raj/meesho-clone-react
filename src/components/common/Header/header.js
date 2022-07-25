import React from 'react';
import { Image } from 'components/atom';
import * as Styled from './style';
import meeshoLogo from 'assets/svg/meesho-logo.svg';

function Header() {
	return (
		<Styled.Container>
			<Image src={meeshoLogo} alt="meesho-logo" />
		</Styled.Container>
	);
}

export default Header;
