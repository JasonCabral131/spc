/** @format */

import { HStack, Text, View } from 'native-base';
import React from 'react';
import Fonts from '../../fixture/fonts';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
type props = {
	address: string;
};
const LocationService: React.FC<props> = ({ address }) => {
	return (
		<View mt={4}>
			<HStack alignItems={'center'}>
				<Ionicons
					name={'location-outline'}
					size={30}
				/>
				<Text
					width={Dimensions.get('window').width * 0.85}
					fontFamily={Fonts.outfit.OutfitMedium}
					color={'gray.500'}
					fontSize={'md'}>
					{address}
				</Text>
			</HStack>
		</View>
	);
};

export default React.memo(LocationService);
