/** @format */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import Home from '../screens/Home';
import { createNavigationContainerRef } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Service from '../screens/Service';
import ServiceDetails from '../screens/ServiceDetails';
import TransparentModal from '../screens/Modal/TransparentModal';
import OrderCart from '../screens/OrderCart';
const Stack = createNativeStackNavigator<RootStackParamList>();
declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
export const navigationRef = createNavigationContainerRef();
const Routes = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='Splash'>
			<Stack.Screen
				name='Splash'
				component={Splash}
			/>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='Service'
				component={Service}
			/>
			<Stack.Screen
				name='ServiceDetails'
				component={ServiceDetails}
			/>
			<Stack.Screen
				name='TransparentModal'
				component={TransparentModal}
				options={{
					presentation: 'transparentModal',
					animation: 'fade',
				}}
			/>
			<Stack.Screen
				name='OrderCart'
				component={OrderCart}
			/>
		</Stack.Navigator>
	);
};

export default React.memo(Routes);
