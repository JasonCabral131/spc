/** @format */

import { HStack, Text, View } from 'native-base';
import React, { useState } from 'react';
import Fonts from '../../fixture/fonts';
import { TouchableOpacity } from 'react-native';
type props = {
	description: string;
};
const AboutMe: React.FC<props> = ({ description }) => {
	const [showFullText, setShowFullText] = useState(false);

	const renderReadMore = () => {
		if (description.split(' ').length > 30) {
			return (
				<Text
					underline
					onPress={() => setShowFullText(!showFullText)}
					color={'black'}
					fontFamily={Fonts.outfit.OutfitRegular}
					fontSize={'sm'}>
					{showFullText ? 'Read less' : 'Read more'}
				</Text>
			);
		}
		return null;
	};

	return (
		<View mt={2}>
			<Text
				fontFamily={Fonts.outfit.OutfitSemiBold}
				color={'black'}
				fontSize={'xl'}>
				About Me
			</Text>

			<Text
				color={'gray.500'}
				fontFamily={Fonts.outfit.OutfitRegular}
				fontSize={'sm'}
				numberOfLines={showFullText ? undefined : 3}>
				{description.slice(0, showFullText ? description.length : 150)}{' '}
				{renderReadMore()}
			</Text>
		</View>
	);
};

export default React.memo(AboutMe);
