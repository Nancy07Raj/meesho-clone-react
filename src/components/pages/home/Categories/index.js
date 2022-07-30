import React from 'react';
import { Image } from 'components/atom';
import * as Styled from './style';
import COD from 'assets/images/cod.svg';
import EasyReturn from 'assets/images/esay-return.svg';
import FreeDelivery from 'assets/images/freeDelivery.svg';
import PlayStore from 'assets/images/playstore.png';
import LowPrice from 'assets/images/lowest-prices.jpg';

export default function Categories() {
	return (
		<Styled.Container>
			<Styled.Info>
				<Styled.Title>Lowest Prices </Styled.Title>
				<Styled.Title>Best Quality Shopping</Styled.Title>
				<Styled.BCard>
					<Styled.Benefits>
						<Image
							src={FreeDelivery}
							circle
							heigth={22}
							width={30}
							background="#F7A8CA"
						/>
						<Styled.BText>Free Delivery</Styled.BText>
					</Styled.Benefits>
					<Styled.Benefits>
						<Image src={COD} circle heigth={22} width={30} background="#F7A8CA" />
						<Styled.BText>Cash on Delivery</Styled.BText>
					</Styled.Benefits>
					<Styled.Benefits>
						<Image
							src={EasyReturn}
							circle
							heigth={22}
							width={30}
							background="#F7A8CA"
						/>
						<Styled.BText>Easy Return</Styled.BText>
					</Styled.Benefits>
				</Styled.BCard>
				<Styled.Download>
					<Image src={PlayStore} heigth={25} width={25} />
					<Styled.DownloadText>Download the Meesho App</Styled.DownloadText>
				</Styled.Download>
			</Styled.Info>
			<Image src={LowPrice} />
		</Styled.Container>
	);
}
