import styled from 'styled-components';
import { Flex, Box } from 'components/atom';

export const Container = styled(Flex)`
	width: 80%;
	margin: 150px auto 0;
	background-color: ${(props) => props.theme.colors.Cultured};
`;

export const Info = styled(Flex)`
	flex-direction: column;
	padding: 20px;
	width: 611px;
	justify-content: flex-start;
	align-items: flex-start;
	min-height: 336px;
	padding: 40px 67px 40px 48px;
`;

export const Title = styled(Box)`
	font-size: 38px;
	line-height: 50px;
	font-family: 'Mier Book';
	text-align: left;
	font-weight: 400;
	font-weight: bold;
	color: ${(props) => props.theme.colors.jet};
`;

export const BCard = styled(Flex)`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	margin-top: 28px;
	padding: 9px 16px;
`;

export const Benefits = styled(Flex)`
	height: 30px;
	width: 120px;
	&::before {
		border-left: 1px solid ${(props) => props.theme.colors.jet};
	}
	&:first-child {
		&::before {
			border-left: 0;
		}
	}
`;

export const BText = styled.span`
	color: ${(props) => props.theme.colors.jet};
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	width: 60px;
	font-family: 'Mier demi';
	margin: 0px;
	padding: 0px 0px 0px 8px;
`;
