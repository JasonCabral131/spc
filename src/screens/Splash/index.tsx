/** @format */

import React, { useEffect } from 'react';
import BaseScreen from '../../components/BaseScreen';
import { Spinner, VStack } from 'native-base';
import Logo from '../../components/Logo';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Splash = () => {
	const isFocused = useIsFocused();
	const navigation = useNavigation();
	useEffect(() => {
		if (isFocused) {
			setTimeout(() => {
				navigation.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				});
			}, 1500);
		}
	}, [isFocused]);
	return (
		<BaseScreen>
			<VStack
				flex={1}
				justifyContent={'center'}
				alignItems={'center'}>
				<Logo />
				<Spinner
					mt={4}
					size={'lg'}
				/>
			</VStack>
		</BaseScreen>
	);
};

export default Splash;
