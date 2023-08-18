import styled from 'styled-components';
import { Flex, Box } from 'components/atom';

export const Container = styled(Flex)`
	width: 85%;
	margin: 20px auto 0;
	background-color: ${(props) => props.theme.colors.Cultured};
	justify-content: center;
	align-items: center;
	border-radius: 4px;
`;

export const Info = styled(Flex)`
	flex-direction: column;
	padding: 20px;
	width: 611px;
	align-items: flex-start;
	min-height: 250px;
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
	width: 120px;
	margin: 0 3px;
	&::before {
		content: '';
		border-left: 1px solid ${(props) => props.theme.colors.jet};
		padding-left: 8px;
	}
	&:first-child {
		&::before {
			border-left: 0;
			padding-left: 0;
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

export const Download = styled(Flex)`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding: 10px 28px;
	background: ${(props) => props.theme.colors.primary};
	border-radius: 4px;
	color: rgb(255, 255, 255);
	cursor: pointer;
`;

export const DownloadText = styled(Box)`
	color: ${(props) => props.theme.colors.white};
	margin: 0 10px;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	font-family: 'Mier demi';
`;
