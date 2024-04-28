/** @format */

import { useWindowDimensions } from 'react-native';
import React from 'react';
import { ServiceType } from '../../types/services';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import Colors from '../../fixture/colors';
import Fonts from '../../fixture/fonts';
import StarSVG from './../../assets/svgs/solar-star.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getTotalReviews, hitSlop } from '../../utils';
import { useNavigation } from '@react-navigation/native';
type props = {
	data: ServiceType;
	serviceID: string;
};
const ServiceList: React.FC<props> = ({ data, serviceID }) => {
	const dimension = useWindowDimensions();
	const book = useSelector((state: RootState) => state?.book.items);

	const navigation = useNavigation();
	const { rating, totalReviews } = getTotalReviews(data);
	const isBooked = book.find(
		(el) => el.toString() === (data?._id as unknown as string)
	);
	const handleNavigation = () => {
		navigation.navigate('ServiceDetails', {
			serviceID: serviceID,
			serviceTypeID: data?._id,
		});
	};
	return (
		<Box
			mt={2}
			alignItems={'center'}
			justifyContent={'center'}
			width={dimension.width + 'px'}>
			<Pressable
				_pressed={{ opacity: 0.5 }}
				position={'relative'}
				width={'92%'}
				bgColor={Colors.white}
				rounded={'md'}
				shadow={2}
				onPress={handleNavigation}
				p={2}>
				<Pressable
					hitSlop={hitSlop}
					position={'absolute'}
					top={'10px'}
					p={2}
					_pressed={{ opacity: 0.5 }}
					zIndex={1}
					right={'10px'}>
					<MaterialCommunityIcons
						name={isBooked ? 'bookmark-check' : 'bookmark-outline'}
						size={25}
					/>
				</Pressable>
				<HStack space={1}>
					<Box>
						<Image
							rounded={'md'}
							resizeMode='contain'
							width={'100px'}
							height={'100px'}
							source={{ uri: data?.profile }}
							alt={data?.name + data?._id + 'avatar'}
						/>
					</Box>
					<Box ml={2}>
						<Text
							fontSize={'xs'}
							fontFamily={Fonts.outfit.OutfitMedium}
							color={'gray.500'}>
							{data?.name}
						</Text>
						<Text
							mt={3}
							fontSize={'md'}
							fontFamily={Fonts.outfit.OutfitRegular}
							color={'black'}>
							{data?.service}
						</Text>
						<Text
							mt={1}
							fontSize={'sm'}
							fontFamily={Fonts.outfit.OutfitRegular}
							color={'black'}>
							{data?.price}
						</Text>
						<HStack
							mt={2}
							alignItems={'center'}
							space={1}>
							<StarSVG />
							<Text
								fontSize={'10px'}
								fontFamily={Fonts.outfit.OutfitExtraLight}>
								{`${rating} | ` +
									totalReviews +
									`${totalReviews > 1 ? ' reviews' : ' review'}`}
							</Text>
						</HStack>
					</Box>
				</HStack>
			</Pressable>
		</Box>
	);
};

export default React.memo(ServiceList);
