import React from 'react';
import * as Styled from './style';
import { footerLinks } from 'components/helper/static-data';

export default function Footer() {
	return (
		<Styled.FooterSection>
			<Styled.FooterTitle>Online Shopping</Styled.FooterTitle>
			{footerLinks?.map((link) => (
				<Styled.Section key={link?.id}>
					{link?.title}
					<span>
						{link?.links.map((item) => (
							<Styled.Links key={item?.id} to={item?.to}>
								{item?.title}
							</Styled.Links>
						))}
					</span>
				</Styled.Section>
			))}
		</Styled.FooterSection>
	);
}
