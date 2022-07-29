import React from 'react';
import { Image } from 'components/atom';
import * as Styled from './style';
import COD from 'assets/images/cod.svg';
import EasyReturn from 'assets/images/esay-return.svg';
import FreeDelivery from 'assets/images/freeDelivery.svg';

export default function Categories() {
	return (
		<Styled.Container>
			<Styled.Info>
				<Styled.Title>Lowest Prices Best Quality Shopping</Styled.Title>
				<Styled.BCard>
					<Styled.Benefits>
						<Image
							src={FreeDelivery}
							circle
							heigth={25}
							width={35}
							background="#F7A8CA"
						/>
						<Styled.BText>Free Delivery</Styled.BText>
					</Styled.Benefits>
					<Styled.Benefits>
						<Image src={COD} circle heigth={25} width={35} background="#F7A8CA" />
						<Styled.BText>Cash on Delivery</Styled.BText>
					</Styled.Benefits>
					<Styled.Benefits>
						<Image
							src={EasyReturn}
							circle
							heigth={25}
							width={35}
							background="#F7A8CA"
						/>
						<Styled.BText>Easy Return</Styled.BText>
					</Styled.Benefits>
				</Styled.BCard>
			</Styled.Info>
		</Styled.Container>
	);
}
