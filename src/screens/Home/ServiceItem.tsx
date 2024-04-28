/** @format */

import React from 'react';
import { Box, Pressable, Text, VStack, View } from 'native-base';
import Colors from '../../fixture/colors';
import Images from './../../fixture/images';
import Fonts from '../../fixture/fonts';
import { useNavigation } from '@react-navigation/native';
import { ServiceCategory } from '../../types/services';
type props = {
	data: ServiceCategory;
};
const iconMappings: { [key: string]: any } = {
	'cleaning.svg': Images.CleaningSVG,
	'vechicle.svg': Images.VehicleSVG,
	'repairing.svg': Images.RepairingSVG,
	'painting.svg': Images.PaintingSVG,
	'laundry.svg': Images.LaundrySVG,
	'mechanic.svg': Images.MechanicSVG,
	'plumbing.svg': Images.PlumbingSVG,
	'beauty.svg': Images.BeautySVG,
	'movers.svg': Images.MoverSVG,
	'ac-repair.svg': Images.ACRepairSVG,
	'electronics.svg': Images.ElectronicSVG,
	'massage.svg': Images.MassageSVG,
};
const ServiceItem: React.FC<props> = ({ data }) => {
	// fixed the issues here using require(data?.serviceIcon)
	const Icon = iconMappings[data?.serviceIcon || ''];
	const navigation = useNavigation();
	const handleNavigation = () => {
		navigation.navigate('Service', {
			_id: data?._id,
		});
	};
	return (
		<Pressable
			onPress={handleNavigation}
			_pressed={{ opacity: 0.5 }}
			mt={2}
			width={'25%'}
			justifyContent={'center'}
			alignItems={'center'}>
			<View
				rounded={'full'}
				p={3}
				justifyContent={'center'}
				alignItems={'center'}
				bgColor={Colors.black}>
				<Icon
					width={50}
					height={50}
				/>
			</View>
			<Text
				mt={2}
				numberOfLines={1}
				fontSize={'md'}
				fontFamily={Fonts.outfit.OutfitMedium}>
				{data?.service}
			</Text>
		</Pressable>
	);
};

export default React.memo(ServiceItem);
