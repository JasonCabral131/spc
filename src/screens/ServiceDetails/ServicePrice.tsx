/** @format */

import { HStack, Text, View } from 'native-base';
import React from 'react';
import Fonts from '../../fixture/fonts';
type props = {
	price: string;
	discountType: string;
};
const ServicePrice: React.FC<props> = ({ price, discountType }) => {
	return (
		<View mt={4}>
			<HStack
				alignItems={'center'}
				space={2}>
				<Text
					fontFamily={Fonts.outfit.OutfitSemiBold}
					color={'black'}
					fontSize={'2xl'}>
					{price}
				</Text>
				<Text
					fontFamily={Fonts.outfit.OutfitMedium}
					color={'gray.500'}
					fontSize={'md'}>
					( {discountType} )
				</Text>
			</HStack>
		</View>
	);
};

export default React.memo(ServicePrice);
