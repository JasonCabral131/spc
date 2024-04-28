/** @format */

import React, { useCallback, useState } from 'react';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import Fonts from '../../fixture/fonts';
import { hitSlop } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import ImageView from 'react-native-image-viewing';

type props = {
	imgs: string[];
};
const Gallery: React.FC<props> = ({ imgs }) => {
	const [selected, setSelected] = useState(imgs[0]);
	const navigation = useNavigation();
	const handlePress = useCallback((item: string) => {
		setSelected(item);
	}, []);

	const handleNavigation = () => {
		navigation.navigate('TransparentModal', {
			content: (
				<ImageView
					images={[{ uri: selected }]}
					imageIndex={0}
					visible={true}
					onRequestClose={() => navigation.goBack()}
				/>
			),
		});
	};
	const handleViewAll = () => {
		navigation.navigate('TransparentModal', {
			content: (
				<ImageView
					images={imgs.map((el) => ({ uri: el }))}
					imageIndex={2}
					visible={true}
					onRequestClose={() => navigation.goBack()}
				/>
			),
		});
	};

	return (
		<HStack
			width={'100%'}
			space={2}>
			<Box width={'75%'}>
				<Pressable
					_pressed={{ opacity: 0.5 }}
					onPress={handleNavigation}>
					<Image
						source={{ uri: selected }}
						resizeMode='cover'
						height={'250px'}
						width={'100%'}
						alt='selected images'
						rounded={'md'}
						bgColor={'gray.200'}
					/>
				</Pressable>
			</Box>
			<Box width={'25%'}>
				{imgs?.slice(0, 3).map((el, index) => {
					return (
						<Pressable
							mt={index == 0 ? 0 : 1}
							onPress={() => handlePress(el)}
							key={index}
							height={'80px'}
							_pressed={{ opacity: 0.5 }}
							position={'relative'}>
							{index === 2 && imgs?.length > 3 ? (
								<Pressable
									hitSlop={hitSlop}
									opacity={0.5}
									_pressed={{ opacity: 0.3 }}
									zIndex={1}
									position={'absolute'}
									top={1}
									rounded={'md'}
									width={'100%'}
									height={'100%'}
									onPress={handleViewAll}
									justifyContent={'center'}
									alignItems={'center'}
									bgColor={'black'}>
									<Text
										fontFamily={Fonts.outfit.OutfitMedium}
										fontSize={'lg'}
										color={'white'}>
										{imgs.length - 3} +
									</Text>
								</Pressable>
							) : null}
							<Image
								alt={'image list' + index}
								height={'80px'}
								mt={1}
								source={{ uri: el }}
								width={'100%'}
								rounded={'md'}
								bgColor={'red.600'}
							/>
						</Pressable>
					);
				})}
			</Box>
		</HStack>
	);
};

export default React.memo(Gallery);
