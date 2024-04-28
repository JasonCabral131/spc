/** @format */

import React from 'react';
import { Review } from '../../../types/services';
import { Avatar, Box, HStack, Text, VStack } from 'native-base';
import Fonts from '../../../fixture/fonts';
import StarSVG from './../../../assets/svgs/solar-star.svg';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
type props = {
	data: Review;
};
const Reviewer: React.FC<props> = ({ data }) => {
	return (
		<VStack
			width={'100%'}
			pt={4}>
			<HStack
				alignItems={'center'}
				justifyContent={'space-between'}>
				<HStack
					alignItems={'center'}
					space={2}>
					<Avatar
						source={{ uri: data?.profile }}
						width={'45px'}
						height={'45px'}
					/>
					<Text
						fontFamily={Fonts.outfit.OutfitSemiBold}
						fontSize={'md'}
						color={'black'}>
						{data?.name}
					</Text>
				</HStack>
				<Box
					borderWidth={'.5px'}
					borderColor={'black'}
					px={8}
					rounded={'full'}
					bgColor={'white'}
					justifyContent={'center'}
					py={1}>
					<HStack
						alignItems={'center'}
						space={1}>
						<StarSVG />
						<Text
							fontSize={'lg'}
							fontFamily={Fonts.outfit.OutfitMedium}
							color={'gray.500'}>
							{data?.review}
						</Text>
					</HStack>
				</Box>
			</HStack>

			<Text
				mt={3}
				fontFamily={Fonts.outfit.OutfitRegular}
				fontSize={'sm'}
				color={'gray.600'}>
				{data?.comments}
			</Text>
			<HStack
				space={1}
				mt={2}
				alignItems={'center'}>
				<Ionicons
					name='time-outline'
					size={19}
				/>
				<Text
					color={'gray.700'}
					fontSize={'sm'}
					fontFamily={Fonts.outfit.OutfitMedium}>
					{moment(data?.date, 'YYYY/MM/DD HH:mm:SS').fromNow()}
				</Text>
			</HStack>
		</VStack>
	);
};

export default React.memo(Reviewer);
