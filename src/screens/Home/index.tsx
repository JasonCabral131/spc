/** @format */

import React, { useCallback } from 'react';
import BaseScreen from '../../components/BaseScreen';
import { Circle, FlatList, Pressable, VStack } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import data from './../../mock/data.json';
import ServiceItem from './ServiceItem';
import Header from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { ServiceCategory } from '../../types/services';

const Home = () => {
	const inset = useSafeAreaInsets();
	const render = useCallback(({ item }: { item: ServiceCategory }) => {
		return <ServiceItem data={item} />;
	}, []);
	return (
		<BaseScreen>
			<VStack
				px={3}
				flex={1}
				paddingBottom={inset.bottom + 'px'}>
				<Header
					title='All Service'
					rightContent={
						<Pressable
							_pressed={{ opacity: 0.5 }}
							rounded={'md'}
							p={3}
							borderWidth={0.5}
							borderColor={'blueGray.600'}>
							<Circle
								borderWidth={1}
								borderColor={'black'}
								p={1}>
								<AntDesign
									name='ellipsis1'
									size={10}
								/>
							</Circle>
						</Pressable>
					}
				/>
				<FlatList
					mt={2}
					renderItem={render}
					keyExtractor={(item) => item._id.toString()}
					data={data}
					numColumns={4}
				/>
			</VStack>
		</BaseScreen>
	);
};

export default React.memo(Home);
