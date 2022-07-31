import styled from 'styled-components';
import { Flex } from 'components/atom';
import Resell from 'assets/images/reseller.jpeg';

export const Container = styled(Flex)`
	flex-direction: column;
	width: 75%;
	margin: 3.5rem auto 0;
`;

export const Title = styled(Flex)`
	font-family: 'Mier Bold';
	font-size: 36px;
	line-height: 54px;
	letter-spacing: 0.7px;
	color: ${(props) => props.theme.colors.jet};
	text-align: center;
	margin: 0 50px;
`;

export const Line = styled(Flex)`
	background: ${(props) => props.theme.colors.primary};
	width: 22%;
	height: 1px;
`;

export const Fashion = styled(Flex)`
	justify-content: space-between;
	align-items: flex-end;
	background-image: url(${(props) => props.background});
	margin: 48px auto 60px;
	padding: 20px 24px 22px;
	height: 430px;
	width: 90%;
	background-size: contain;
	border-radius: 4px;
`;

export const Reseller = styled(Flex)`
	justify-content: flex-end;
	align-items: center;
	background-image: url(${Resell});
	margin: 48px auto 60px;
	height: 430px;
	width: 100%;
	background-size: contain no-repeat;
	border-radius: 4px;
`;
