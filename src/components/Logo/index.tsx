/** @format */

import { HStack, View, Text } from 'native-base';
import React from 'react';
import SVG from './../../assets/svgs/logo.svg';
import Fonts from '../../fixture/fonts';
const Logo = () => {
	return (
		<HStack
			space={1}
			alignItems={'center'}>
			<SVG
				width={100}
				height={80}
			/>
			<View>
				<Text
					fontSize={'2xl'}
					fontFamily={Fonts.outfit.OutfitBold}>
					Service+
				</Text>
				<Text
					fontSize={'2xl'}
					fontFamily={Fonts.outfit.OutfitBold}>
					Connect
				</Text>
			</View>
		</HStack>
	);
};

export default Logo;
