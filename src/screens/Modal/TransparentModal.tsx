/** @format */

import React from 'react';
import { Pressable } from 'react-native';

import BaseScreen from '../../components/BaseScreen';

import { useRoute } from '@react-navigation/native';

const TransparentModal = () => {
	const { content, fullScreen }: any = useRoute().params || {};
	return (
		<BaseScreen
			backgroundColor='transparent'
			fullScreen={fullScreen}>
			<Pressable style={{ flex: 1}} onPress={() => console.log()}>
				{content}
			</Pressable>
		</BaseScreen>
	);
};

export default TransparentModal;
