import styled from 'styled-components';
import { Flex, Box } from 'components/atom';
import ratingStar from 'assets/svg/rating-star.svg';

export const Container = styled(Flex)`
	flex-direction: column;
	margin: 20px 0;
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
	width: 25%;
	gap: 20px;
`;

export const FliterBorder = styled(Flex)`
	border: 1px solid ${(props) => props.theme.colors.Gainsboro};
	border-radius: 4px;
	padding: 10px 20px;
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
	.ant-collapse {
		width: 100%;
		.ant-collapse-item {
			margin: 10px 0;
			padding-bottom: 10px;
		}
		.ant-collapse-header {
			padding: 0;
		}
		.ant-collapse-content-box {
			padding: 0;
			.ant-checkbox-wrapper {
				color: #666666;
				font-size: 16px;
			}
			.ant-input-wrapper {
				.ant-input-group-addon {
					display: none;
				}
				.ant-input-affix-wrapper {
					border-radius: 4px;
					margin: 10px 0;
				}
			}
		}
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
	max-width: ${(props) => props.width || '21%'};
	min-width: ${(props) => props.width || '21%'};
	margin: 0px 15px 20px 0px;
	width: ${(props) => props.width};
	padding: ${(props) => props.padding || '0 10px'};
	height: ${(props) => props.height || 'auto'};
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
	&::before {
		content: '₹';
	}
`;

export const Onwards = styled.p`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier demi';
	padding: 8px 0;
	margin-left: 10px;
`;
export const FreeDelivery = styled.p`
	background-color: ${(props) => props.theme.colors.Cultured2};
	border-radius: 12px;
	padding: 3px 10px;
	font-size: 12px;
	width: 80px;
	color: ${(props) => props.theme.colors.jet};
	font-weight: 600;
	margin-top: 10px;
`;

export const Rating = styled.span`
	background-color: ${(props) => props.theme.colors.MediumSeaGreen};
	color: ${(props) => props.theme.colors.white};
	padding: 5px 22px 3px 8px;
	font-weight: ${(props) => props.theme.fontWeight.semiBold};
	font-size: 16px;
	line-height: 20px;
	font-family: 'Mier A Demi';
	border-radius: 1rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	&::after {
		position: absolute;
		top: 9px;
		right: 6px;
		display: inline-block;
		content: ' ';
		width: 10px;
		height: 10px;
		background-image: url(${ratingStar});
		background-size: contain;
	}
`;

export const Review = styled.span`
	color: ${(props) => props.theme.colors.SpanishGray};
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	font-family: 'Mier demi';
	padding: 0px 5px;
`;
