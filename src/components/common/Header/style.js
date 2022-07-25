import styled from 'styled-components';
import { Flex } from 'components/atom';
import searchIcon from 'assets/svg/search.svg';

const Container = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
`;

const TopHeader = styled.nav`
	border-bottom: 1px solid ${(props) => props.theme.colors.Cultured};
`;

const TopLink = styled(Flex)`
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0;
	max-width: 1280px;
	margin: 0 auto;
`;

const SearchBox = styled.nav`
	position: relative;
	&:before {
		position: absolute;
		left: 30px;
		top: 18px;
		display: inline-block;
		content: ' ';
		width: 20px;
		height: 20px;
		background-image: url(${searchIcon});
		background-size: contain;
	}
`;

export { Container, TopHeader, SearchBox, TopLink };
