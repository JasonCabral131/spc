/** @format */

import { Pressable } from 'native-base';
import React from 'react';
import SVG from './../../assets/svgs/back_icon.svg';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../fixture/colors';
type props = {
	onPress?: () => any;
};
const BackButton: React.FC<props> = ({ onPress }) => {
	const navigation = useNavigation();
	const handleBack = () => {
		if (navigation.canGoBack()) navigation.goBack();
	};
	return (
		<Pressable
			_pressed={{ opacity: 0.5 }}
			rounded={'md'}
			p={3}
			bgColor={Colors.black}
			onPress={onPress ? onPress : handleBack}>
			<SVG />
		</Pressable>
	);
};

export default React.memo(BackButton);
