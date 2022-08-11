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

export const FilterContainer = styled(Flex)`
	flex-direction: column;
	padding: 20px;
	width: 280px;
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	border-radius: 8px;
`;

export const FilterCategory = styled(Flex)`
	justify-content: space-between;
	border-bottom: 1px solid ${(props) => props.theme.colors.Gainsboro};
	padding: 15px 0;

	&:last-child {
		border-bottom: none;
		padding-top: 15;
		padding-bottom: 0;
	}
`;

export const FCategoryName = styled(Box)`
	color: ${(props) => props.theme.colors.jet};
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	font-family: 'Mier demi';
`;

export const Card = styled(Flex)`
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	border-radius: 8px;
`;
