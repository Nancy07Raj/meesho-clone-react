import styled from 'styled-components';
import { Flex } from 'components/atom';
import Resell from 'assets/images/reseller.jpeg';
import supply from 'assets/images/supply_banner.jpg';
import Tick from 'assets/images/tick.svg';
import FBackground from 'assets/images/fashion-store-new.jpg';
import EBackground from 'assets/images/essential-bg-new.jpg';

export const Container = styled(Flex)`
	flex-direction: column;
	width: 95%;
	margin: 3.5rem auto 0;
	justify-content: center;
	align-items: center;
`;

export const Title = styled(Flex)`
	font-family: 'Mier Bold';
	font-size: 36px;
	line-height: 54px;
	letter-spacing: 0.7px;
	color: ${(props) => props.theme.colors.jet};
	text-align: center;
	margin: 0 10px;
`;

export const Line = styled(Flex)`
	background: ${(props) => props.theme.colors.primary};
	width: 24%;
	height: 1px;
`;

export const Fashion = styled(Flex)`
	justify-content: flex-start;
	align-items: flex-end;
	gap: 15px;
	background-image: url(${FBackground});
	background-repeat: no-repeat;
	background-size: stretch;
	margin: 30px auto;
	padding: 90px 24px 35px;
	margin: 48px 0px 60px;
	// width: 85%;
	background-size: 100% 100%;
	border-radius: 4px;
`;

export const Electronics = styled(Fashion)`
	background-image: url(${EBackground});
`;

export const Reseller = styled(Flex)`
	justify-content: flex-end;
	align-items: center;
	background-image: url(${Resell});
	margin: 30px auto;
	height: 430px;
	width: 100%;
	background-size: contain no-repeat;
	border-radius: 4px;
`;

export const Supplier = styled(Flex)`
	justify-content: flex-start;
	align-items: center;
	background-image: url(${supply});
	margin: 48px auto 60px;
	height: 280px;
	width: 100%;
	background-size: contain no-repeat;
	border-radius: 4px;
`;

export const SupplierSpan = styled(Flex)`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	margin: 0px;
	&::before {
		content: url(${Tick});
		padding-right: 10px;
	}
	&::after {
		content: '|';
		padding-left: 30px;
		padding-right: 30px;
	}
	&:last-child {
		&::after {
			content: '';
		}
	}
`;

export const Signup = styled(Flex)`
	background-color: white;
	color: ${(props) => props.theme.colors.primary};
	padding: 4%;
	width: 108px;
	border-radius: 4px;
	padding: 10px 28px;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
`;
