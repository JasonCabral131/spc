/** @format */

import React, { useCallback, useState } from 'react';
import BaseScreen from '../../components/BaseScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/routes';
import {
	Box,
	Circle,
	Divider,
	FlatList,
	Pressable,
	VStack,
	View,
} from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import data from './../../mock/data.json';
import Header from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import Gallery from '../../components/Gallery';
import UserDetails from './UserDetails';
import { Review, ServiceType } from '../../types/services';
import ServiceName from './ServiceName';
import LocationService from './LocationService';
import ServicePrice from './ServicePrice';
import AboutMe from './AboutMe';
import BadgeTabButton from './BadgeTabButton';
import { getTotalReviews } from '../../utils';
import Ratings from './Ratings';
import Reviewer from './Reviewer';
import Footer from './Footer';
type props = NativeStackScreenProps<RootStackParamList, 'ServiceDetails'>;
type AllReviewType = { review: string; reviews: Review[] };
const ServiceDetailsScreen: React.FC<props> = ({ route }) => {
	const inset = useSafeAreaInsets();
	const { serviceID, serviceTypeID } = route?.params;
	const [current, setCurrent] = useState('All');
	const service = (
		data.find((el) => el?._id == serviceID)?.services || []
	)?.find((el) => el?._id === serviceTypeID) as ServiceType;

	const reviews: AllReviewType[] = [];
	if (service?.reviews) {
		Object.keys(service?.reviews).forEach((review) => {
			const reviewScore = parseInt(review);
			reviews.push({
				review: reviewScore.toString(),
				reviews: service?.reviews[review]?.map((el) => ({ ...el, review })),
			});
		});
	}
	const allReviews: Review[] = reviews.reduce((acc, cur: any) => {
		return acc.concat(cur.reviews);
	}, []);
	const { rating, totalReviews } = getTotalReviews(service);
	const handleBadgePress = useCallback((label: string) => {
		setCurrent(label);
	}, []);
	let userReviews =
		current === 'All'
			? allReviews
			: reviews.find((el) => el?.review === current)?.reviews || [];
	const render = useCallback(({ item }: { item: Review }) => {
		return <Reviewer data={item} />;
	}, []);
	const handleBook = () => {};
	userReviews = userReviews.sort(
		(a: any, b: any) => parseInt(b.review) - parseInt(a.review)
	);
	return (
		<BaseScreen>
			<VStack
				pb={inset.bottom + 'px'}
				flex={1}
				px={3}>
				<Header
					title='Details'
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
					ListHeaderComponent={
						<VStack>
							<Box
								width={'100%'}
								mt={4}>
								<Gallery imgs={service?.images as string[]} />
							</Box>
							<ServiceName data={service} />
							<View mt={3}>
								<UserDetails data={service} />
							</View>
							<LocationService address={service?.address as string} />
							<ServicePrice
								price={service?.price as string}
								discountType={service?.discountType as string}
							/>
							<Divider
								bgColor={'gray.500'}
								width={'100%'}
								height={'0.5px'}
								mt={4}
							/>
							<AboutMe description={service?.description as string} />
							<Divider
								bgColor={'gray.500'}
								width={'100%'}
								height={'0.5px'}
								mt={4}
							/>
							<View mt={2}>
								<Ratings
									totalReviews={totalReviews}
									rating={rating}
								/>
								<BadgeTabButton
									onPress={handleBadgePress}
									labels={[{ review: 'All' }, ...reviews].map(
										(el) => el?.review
									)}
									active={current}
								/>
							</View>
						</VStack>
					}
					data={userReviews}
					renderItem={render}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => {
						return (
							<Divider
								bgColor={'gray.500'}
								width={'100%'}
								height={'0.5px'}
								mt={4}
							/>
						);
					}}
					ListFooterComponent={<Footer onPress={handleBook} />}
				/>
			</VStack>
		</BaseScreen>
	);
};

export default React.memo(ServiceDetailsScreen);
