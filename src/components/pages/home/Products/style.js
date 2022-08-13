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
	width: 20%;
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
	/* padding: 0 8px 8px; */
	flex-direction: column;
	max-width: 25%;
	margin: 0px 15px 20px 0px;
	padding: 0 10px;
	height: auto;
`;

export const CardName = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${(props) => props.theme.colors.SpanishGray};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	font-family: 'Mier book';
	max-width: 90%;
	margin-top: 10px;
`;

export const Rupee = styled.p`
	color: ${(props) => props.theme.colors.jet};
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	font-family: 'Mier bold';
`;

export const Onwards = styled.p`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier demi';
	padding: 2px;
	margin: 5px 0;
	margin-left: 10px;
`;
export const FreeDelivery = styled.p`
	background-color: ${(props) => props.theme.colors.Cultured};
	border-radius: 8px;
	padding-top: 12px;
`;
