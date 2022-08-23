import styled from 'styled-components';
import { Flex } from 'components/atom';

export const container = styled(Flex)`
	margin: 150px auto 0;
	width: 80%;
`;

export const ImageView = styled(Flex)`
	width: 400px;
	margin: 0 20px;
	/* border: 1px solid ${(props) => props.theme.colors.Cultured}; */
	justify-content: center;
	flex-direction: column;
`;

export const CartBtn = styled(Flex)`
	flex: 1 1 0%;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.black};
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	font-family: 'Mier demi';
	border: 1px solid black;
	padding: 12px;
	border-radius: 4px;
	margin-right: 10px;
`;

export const BuyNow = styled(Flex)`
	flex: 1 1 0%;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.primary};
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	font-family: 'Mier demi';
	padding: 12px;
	border-radius: 4px;
`;

export const PInfo = styled(Flex)`
	width: 500px;
	margin: 0 20px;
	padding: 20px;
	height: 150px;
	border: 1px solid ${(props) => props.theme.colors.Cultured};
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	border-radius: 8px;
`;

export const PTitle = styled.span`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Mier demi';
	letter-spacing: 1px;
`;
