/** @format */

import React, { useCallback, useState } from 'react';
import BaseScreen from '../../components/BaseScreen';
import { Box, HStack, Image, VStack, Text, View, Pressable } from 'native-base';
import Header from '../../components/Header';
import Fonts from '../../fixture/fonts';
import { Dimensions } from 'react-native';

const OrderCart = () => {
	const [item, setItem] = useState(1);
	const handleAdd = useCallback((val: number) => {
		setItem((prev) => prev + val);
	}, []);
	return (
		<BaseScreen>
			<VStack
				flex={1}
				px={2}>
				<Header title='Cart Order' />
				<Box
					mt={2}
					px={3}>
					<Box
						p={4}
						rounded={'lg'}
						width={'100%'}
						borderColor={'gray.300'}
						borderWidth={'1px'}>
						<HStack>
							<View>
								<Image
									source={{ uri: 'https://i.pravatar.cc/300' }}
									rounded={'md'}
									width={'50px'}
									height={'50px'}
									alt='image order-cart'
								/>
							</View>
							<View>
								<Text
									fontFamily={Fonts.outfit.OutfitBold}
									fontSize={'md'}>
									Swedish Message
								</Text>
								<Text
									fontFamily={Fonts.outfit.OutfitBold}
									fontSize={'xs'}
									color={'gray.300'}>
									Service
								</Text>
								<HStack
									justifyContent={'space-between'}
									alignItems={'center'}
									width={Dimensions.get('window').width * 0.6}>
									<View>
										<Text
											fontFamily={Fonts.outfit.OutfitBold}
											fontSize={'md'}>
											$ 14.0
											<Text
												ml={2}
												fontFamily={Fonts.outfit.OutfitBold}
												fontSize={'md'}
												strikeThrough>
												$ 8.0
											</Text>
										</Text>
									</View>
									<View>
										<HStack
											width={'100%'}
											space={2}
											justifyContent={'center'}>
											<Pressable
												rounded={'md'}
												borderColor={'gray.300'}
												borderWidth={'1px'}
												py={1}
												px={2}
												onPress={() => handleAdd(-1)}>
												<Text
													fontFamily={Fonts.outfit.OutfitBold}
													fontSize={'md'}>
													-
												</Text>
											</Pressable>
											<Text>{item}</Text>
											<Pressable
												rounded={'md'}
												backgroundColor={'red.400'}
												borderColor={'gray.300'}
												borderWidth={'1px'}
												py={1}
												onPress={() => handleAdd(+1)}
												px={2}>
												<Text
													fontFamily={Fonts.outfit.OutfitBold}
													fontSize={'md'}
													color={'red.500'}>
													+
												</Text>
											</Pressable>
										</HStack>
									</View>
								</HStack>
							</View>
						</HStack>
					</Box>
				</Box>
			</VStack>
		</BaseScreen>
	);
};

export default OrderCart;
