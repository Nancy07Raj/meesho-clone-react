import React from 'react';
import { Select, Checkbox, Collapse } from 'antd';
import DownArrow from 'assets/svg/down-arrow.svg';
import { Flex, Box, Image } from 'components/atom';
import * as S from './style';
import { productTypes } from 'components/helper/static-data';

const items = [
	{
		key: 1,
		label: 'Relevance',
		value: 'Relevance',
	},
	{
		key: 2,
		label: 'New Arrival',
		value: 'New Arrival',
	},
	{
		key: 3,
		label: 'Price High to Low',
		value: 'Price High to Low',
	},
	{
		key: 4,
		label: 'Price Low to High',
		value: 'Price Low to High',
	},
	{
		key: 5,
		label: 'Rating',
		value: 'Rating',
	},
];

const CheckboxList = [
	{
		id: 1,
		list: 'Checkbox1',
	},
	{
		id: 2,
		list: 'Checkbox2',
	},
	{
		id: 3,
		list: 'Checkbox3',
	},
];

const CollapseDropdown = [
	{
		key: 1,
		label: 'Category',
		children: CheckboxList?.map((c) => (
			<Flex key={c.id} flexDirection="column">
				<Checkbox>{c?.list}</Checkbox>
			</Flex>
		)),
	},
];
export default function Filter() {
	return (
		<S.FilterContainer>
			<S.FliterBorder>
				<Box fontSize="16px" color="#666666">
					Sort By :{' '}
				</Box>
				<Select
					defaultValue="Relevance"
					style={{ width: '75%', marginTop: '-4px', color: '#666666' }}
					variant="borderless"
					optionFontSize="12"
					suffixIcon={<Image src={DownArrow} />}
					// onChange={handleChange}
					options={items}
				/>
			</S.FliterBorder>
			<S.FliterBorder flexDirection="column">
				<S.FilterCategory>
					<Flex flexDirection="column">
						<S.FCategoryName>FILTER</S.FCategoryName>
						<Box fontSize="12px" color="#666666">
							1000+ Products
						</Box>
					</Flex>
				</S.FilterCategory>

				<S.FilterCategory>
					<Collapse items={CollapseDropdown} bordered={false} defaultActiveKey={['1']} />
				</S.FilterCategory>

				{productTypes.map((filter) => (
					<S.FilterCategory key={filter?.id}>
						<S.FCategoryName>{filter?.name}</S.FCategoryName>
						<Image src={DownArrow} />
					</S.FilterCategory>
				))}
			</S.FliterBorder>
		</S.FilterContainer>
	);
}
