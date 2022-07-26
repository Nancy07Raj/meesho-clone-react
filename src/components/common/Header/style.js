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
	width: 400px;
	height: 40px;
	border: 1px solid ${(props) => props.theme.colors.SpanishGray};
	border-radius: 4px;
	&:before {
		position: absolute;
		left: 20px;
		top: 10px;
		display: inline-block;
		content: ' ';
		width: 20px;
		height: 20px;
		background-image: url(${searchIcon});
		background-size: contain;
	}
`;

const SearchInput = styled.input.attrs((props) => ({
	placeholder: props.placeholder,
}))`
	font: 'Mier B Book';
	font-size: 1rem;
	font-style: normal;
	letter-spacing: 0.0025em;
	border: 0;
	margin-left: 50px;
	margin-top: 10px;
	width: 340px;
	color: ${(props) => props.theme.colors.jet};
	caret-color: ${(props) => props.theme.colors.primary};
	&:focus {
		outline: none;
	}
`;

export { Container, TopHeader, SearchBox, TopLink, SearchInput };
