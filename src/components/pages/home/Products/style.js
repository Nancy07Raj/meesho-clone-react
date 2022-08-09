import styled from 'styled-components';
import { Flex, Box } from 'components/atom';

export const Container = styled(Flex)`
	flex-direction: column;
	margin: 20px 20px 0;
`;

export const Title = styled(Box)`
	color: ${(props) => props.theme.colors.jet};
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	font-family: 'Mier bold';
	text-align: left;
	margin: 0px;
	padding: 0px 0px 28px;
`;