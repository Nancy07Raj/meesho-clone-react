import { Link as A } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'components/atom';
import searchIcon from 'assets/svg/search.svg';

const Container = styled(Flex)`
	margin: 0 auto;
	max-width: 1280px;
`;

const Content = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1000;
	background-color: ${(props) => props.theme.colors.white};
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
	font-weight: 600;
	padding: 0 1rem;
`;

const Links = styled(Flex)`
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;
`;

const LinkText = styled(HeaderText)`
	padding: 15px 0;
	border-bottom: 3px solid white;
	color: ${(props) => props.theme.colors.jet};
	font-family: 'Mier book';
	font-weight: 400;
	&:hover {
		color: ${(props) => props.theme.colors.primary};
		border-bottom: 3px solid ${(props) => props.theme.colors.primary};
	}
`;

const Menu = styled(Flex)`
	justify-content: space-between;
	margin: 0 10px;
	padding: 10px;
	border: 1px solid ${(props) => props.theme.colors.Cultured};
	box-shadow: rgb(0 0 0 / 5%) 2px 2px 4px 0px;
	border-width: 0px 0.5px 0.5px;
	align-items: flex-start;
	/* animation: 200ms ease-in 0s 1 normal none running fadeIn; */
`;

const SubMenu = styled(Flex)`
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const MenuTitle = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 1rem;
`;

const MenuLink = styled(A)`
	color: ${(props) => props.theme.colors.jet};
	cursor: pointer;
	font-weight: 400;
	font-family: 'Mier B Book';
	line-height: 20px;
	padding: 3px 0;
	text-decoration: none;
`;

export {
	Container,
	TopHeader,
	SearchBox,
	TopLink,
	SearchInput,
	HeaderText,
	Links,
	LinkText,
	Menu,
	SubMenu,
	MenuTitle,
	MenuLink,
	Content,
};
