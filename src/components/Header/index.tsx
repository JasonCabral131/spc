/** @format */

import { Box, HStack, Text } from 'native-base';
import React from 'react';
import BackButton from '../../components/BackButton';
import Fonts from '../../fixture/fonts';

import Colors from '../../fixture/colors';
type props = {
	title: string;
	onBackPress?: () => any;
	rightContent?: React.ReactElement;
};
const HomeHeader: React.FC<props> = ({ title, onBackPress, rightContent }) => {
	return (
		<HStack
			width={'100%'}
			justifyContent={'space-between'}
			alignItems={'center'}
			space={1}>
			<BackButton onPress={onBackPress} />
			<Box>
				<Text
					fontSize={'md'}
					color={Colors.black}
					fontFamily={Fonts.outfit.OutfitMedium}>
					{title ? title : 'All Services'}
				</Text>
			</Box>
			<Box>{rightContent}</Box>
		</HStack>
	);
};

export default React.memo(HomeHeader);
