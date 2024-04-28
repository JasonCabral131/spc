/** @format */

import React from 'react';
import { ServiceType } from '../../types/services';
import { HStack, Text, View } from 'native-base';
import Fonts from '../../fixture/fonts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getTotalReviews } from '../../utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
type props = {
	data: ServiceType;
};
const ServiceName: React.FC<props> = ({ data }) => {
	const book = useSelector((state: RootState) => state?.book.items);
	const { rating, totalReviews } = getTotalReviews(data);
	const isBooked = book.find(
		(el) => el.toString() === (data?._id as unknown as string)
	);
	return (
		<View mt={4}>
			<HStack
				alignItems={'center'}
				justifyContent={'space-between'}>
				<Text
					fontFamily={Fonts.outfit.OutfitSemiBold}
					color={'black'}
					fontSize={'2xl'}>
					{data?.service}
				</Text>
				<MaterialCommunityIcons
					name={isBooked ? 'bookmark-check' : 'bookmark-outline'}
					size={35}
				/>
			</HStack>
		</View>
	);
};

export default React.memo(ServiceName);
