/** @format */

import React from 'react';
import { HStack, Pressable, Text, VStack } from 'native-base';
import Fonts from '../../../fixture/fonts';
type props = {
	onPress: () => any;
};
const Footer: React.FC<props> = ({ onPress }) => {
	return (
		<VStack
			mt={4}
			borderTopWidth={'0.5px'}
			borderTopColor={'gray.600'}
			py={8}
			justifyContent={'center'}
			alignItems={'center'}>
			<HStack
				justifyContent={'center'}
				alignItems={'center'}
				space={3}>
				<Pressable
					bgColor={'#CCCCCC'}
					_pressed={{ opacity: 0.5 }}
					rounded={'full'}
					px={7}
					py={2}>
					<Text
						color={'white'}
						fontFamily={Fonts.outfit.OutfitRegular}
						fontSize={'2xl'}>
						Message
					</Text>
				</Pressable>
				<Pressable
					bgColor={'black'}
					_pressed={{ opacity: 0.5 }}
					rounded={'full'}
					px={7}
					py={2}>
					<Text
						color={'white'}
						fontFamily={Fonts.outfit.OutfitRegular}
						fontSize={'2xl'}>
						Book Now
					</Text>
				</Pressable>
			</HStack>
		</VStack>
	);
};

export default React.memo(Footer);
