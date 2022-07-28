import { Link as A } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'components/atom';

export const FooterSection = styled(Flex)`
	flex-direction: column;
	margin-top: 300px;
	padding: 0 20px;
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
