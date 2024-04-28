/** @format */

import React from 'react';
import { HStack, Text } from 'native-base';
import StarSVG from './../../assets/svgs/solar-star.svg';
import Fonts from '../../fixture/fonts';
import { TouchableOpacity } from 'react-native';
const Ratings = ({
	rating,
	totalReviews,
}: {
	rating: string;
	totalReviews: number;
}) => {
	return (
		<HStack
			justifyContent={'space-between'}
			alignItems={'center'}
			mb={4}>
			<HStack
				mt={2}
				alignItems={'center'}
				space={1}>
				<StarSVG />
				<Text
					color={'gray.600'}
					fontSize={'md'}
					fontFamily={Fonts.outfit.OutfitMedium}>
					{`${rating} ( ` +
						totalReviews +
						`${totalReviews > 1 ? ' reviews' : ' review'} )`}
				</Text>
			</HStack>
			<TouchableOpacity>
				<Text
					fontFamily={Fonts.outfit.OutfitMedium}
					fontSize={'md'}
					color={'gray.600'}>
					See All
				</Text>
			</TouchableOpacity>
		</HStack>
	);
};

export default Ratings;
