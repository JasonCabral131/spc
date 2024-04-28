/** @format */

import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import BaseScreen from '../../components/BaseScreen';
import Header from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/routes';
import data from './../../mock/data.json';
import { Box, FlatList, Pressable, VStack } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { ServiceType } from '../../types/services';
import ServiceList from './ServiceList';
type serviceProps = NativeStackScreenProps<RootStackParamList, 'Service'>;
const Service: React.FC<serviceProps> = ({ route }) => {
	const id = route.params._id;
	const services = data?.find((el) => el?._id === id);
	const inset = useSafeAreaInsets();
	const render = useCallback(
		({ item }: { item: ServiceType }) => {
			return (
				<ServiceList
					data={item}
					serviceID={services?._id as unknown as string}
				/>
			);
		},
		[services]
	);
	return (
		<BaseScreen>
			<VStack
				flex={1}
				paddingBottom={inset.bottom + 'px'}>
				<Box px={3}>
					<Header
						title={services?.service as string}
						rightContent={
							<Pressable
								_pressed={{ opacity: 0.5 }}
								rounded={'md'}
								p={3}
								borderWidth={0.5}
								borderColor={'blueGray.600'}>
								<AntDesign
									name='search1'
									size={20}
								/>
							</Pressable>
						}
					/>
				</Box>
				<FlatList
					data={services?.services || []}
					renderItem={render}
					numColumns={1}
					mt={2}
					showsVerticalScrollIndicator={false}
				/>
			</VStack>
		</BaseScreen>
	);
};

export default React.memo(Service);
