import { Link as A } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'components/atom';

export const Container = styled(Flex)`
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.Cultured2};
`;

export const ShopTitle = styled(Box)`
	color: ${(props) => props.theme.colors.jet};
	font-style: normal;
	font-weight: 700;
	font-size: ${(props) => (props.shop ? '32px' : '20px')};
	line-height: 40px;
	font-family: 'Mier bold';
	margin: 0;
	padding: 0;
`;

export const ContactUs = styled.span`
	font-size: 12px;
	color: ${(props) => props.theme.colors.GraniteGray};
	line-height: 20px;
	font-family: 'Mier bold';
`;

export const TrustPara = styled.p`
	color: ${(props) => props.theme.colors.GraniteGray};
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	font-family: 'Mier book';
	margin: 0px;
	padding: 0px;
`;

export const ShopLink = styled.span`
	color: ${(props) => props.theme.colors.GraniteGray};
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	font-family: 'Mier demi';
	margin: 5px 0;
	padding: 0px;
	cursor: pointer;
`;

export const FooterLink = styled(Flex)`
	flex-direction: column;
	margin: 300px 20px 40px;
	padding: 20px;
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.white};
`;

export const FooterTitle = styled(Box)`
	color: ${(props) => props.theme.colors.primary};
	font-size: 20px;
	font-weight: 600;
`;

export const Section = styled(Flex)`
	flex-direction: column;
	color: ${(props) => props.theme.colors.jet};
	font-size: 16px;
	font-weight: 600;
	padding: 10px 0;
`;

export const Links = styled(A)`
	color: ${(props) => props.theme.colors.primary};
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	&::after {
		content: '|';
		padding: 0 6px;
		color: ${(props) => props.theme.colors.jet};
	}
	&:last-child {
		&::after {
			content: '';
		}
	}
`;
