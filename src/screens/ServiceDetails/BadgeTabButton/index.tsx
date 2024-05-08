/** @format */

import React, { useCallback, useState } from 'react';
import { HStack, Pressable, ScrollView, Text } from 'native-base';
import Fonts from '../../../fixture/fonts';
import SVG1 from '../../../assets/svgs/solar-star.svg';
import SVG2 from '../../../assets/svgs/solar_star-white.svg';
type props = {
	onPress: (val: string) => void;
	labels: string[];
	active: string;
};

const BadgeTabButton: React.FC<props> = ({
	onPress,
	labels,
	active = 'All',
}) => {
	const [activeTab, setActive] = useState(active);
	const handleCallBack = useCallback((val: string) => {
		setActive(val);
		onPress(val);
	}, []);
	return (
		<ScrollView showsHorizontalScrollIndicator={false}>
			<HStack space={2}>
				{labels?.map((el) => {
					return (
						<Pressable
							onPress={() => handleCallBack(el)}
							_pressed={{ opacity: 0.5 }}
							key={el}
							borderWidth={'.5px'}
							borderColor={'black'}
							px={8}
							rounded={'full'}
							bgColor={activeTab === el ? 'black' : 'white'}
							justifyContent={'center'}
							py={1}>
							<HStack alignItems={'center'}>
								{activeTab === el ? <SVG2 /> : <SVG1 />}
								<Text
									fontSize={'lg'}
									fontFamily={Fonts.outfit.OutfitMedium}
									color={activeTab === el ? 'white' : 'gray.500'}>
									{el}
								</Text>
							</HStack>
						</Pressable>
					);
				})}
			</HStack>
		</ScrollView>
	);
};

export default React.memo(BadgeTabButton);
