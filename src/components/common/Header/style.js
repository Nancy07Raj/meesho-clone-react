import styled from 'styled-components';
import { Flex, Box } from 'components/atom';
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
	/* align-items: center; */
	justify-content: space-between;
	padding: 0.5rem 0;
	margin: 0 10px;
`;

const SearchBox = styled.nav`
	position: relative;
	width: 400px;
	height: 50px;
	margin-left: 20px;
	border: 1px solid ${(props) => props.theme.colors.SpanishGray};
	border-radius: 4px;
	&:before {
		position: absolute;
		left: 10px;
		top: 15px;
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
	font-size: 16px;
	letter-spacing: 0.0025em;
	border: 0;
	margin-left: 40px;
	margin-top: 15px;
	width: 340px;
	color: ${(props) => props.theme.colors.jet};
	caret-color: ${(props) => props.theme.colors.primary};
	&:focus {
		outline: none;
	}
`;

const HeaderText = styled(Box)`
	font-family: 'Mier B Book';
	color: ${(props) => props.theme.colors.jet};
	font-size: 16px;
	line-height: 20px;
	padding: 0 1rem;
`;

const SubHeader = styled.nav`
	border: 1px solid ${(props) => props.theme.colors.SpanishGray};
`;

export { Container, TopHeader, SearchBox, TopLink, SearchInput, HeaderText, SubHeader };
