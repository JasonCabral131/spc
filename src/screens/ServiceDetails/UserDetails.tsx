/** @format */

import React from 'react';
import { Avatar, HStack, Text } from 'native-base';
import { ServiceType } from '../../types/services';
import Fonts from '../../fixture/fonts';
import SolorStarSVG from './../../assets/svgs/solar-star.svg';
import { getTotalReviews } from '../../utils';

type props = {
	data: ServiceType;
};
const UserDetails: React.FC<props> = ({ data }) => {
	const { rating, totalReviews } = getTotalReviews(data);

	return (
		<HStack
			alignItems={'center'}
			space={1}>
			<Avatar
				source={{ uri: data?.profile }}
				width={'45px'}
				height={'45px'}
			/>
			<Text
				fontFamily={Fonts.outfit.OutfitSemiBold}
				fontSize={'md'}
				color={'black'}>
				{data?.name} |
			</Text>
			<SolorStarSVG />
			<Text
				color={'gray.500'}
				fontSize={'md'}
				fontFamily={Fonts.outfit.OutfitMedium}>
				{`${rating} ( ` +
					totalReviews +
					`${totalReviews > 1 ? ' reviews' : ' review'} )`}
			</Text>
		</HStack>
	);
};

export default React.memo(UserDetails);
