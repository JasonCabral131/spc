/** @format */

import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from './src/fixture/colors';
import { NavigationContainer } from '@react-navigation/native';
import Routes, { navigationRef } from './src/routes';
import { useFonts } from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';

import { SafeAreaProvider } from 'react-native-safe-area-context';
LogBox.ignoreLogs([
	'In React 18, SSRProvider is not necessary',
	'Non-serializable values were found in the navigation state. Check:',
	'Warning: Each child in a list should have a unique',
]);
const App = () => {
	const [fontsLoaded, fontError] = useFonts({
		'Outfit-Black': require('./src/assets/fonts/outfit/Outfit-Black.ttf'),
		'Outfit-Bold': require('./src/assets/fonts/outfit/Outfit-Bold.ttf'),
		'Outfit-ExtraBold': require('./src/assets/fonts/outfit/Outfit-ExtraBold.ttf'),
		'Outfit-ExtraLight': require('./src/assets/fonts/outfit/Outfit-ExtraLight.ttf'),
		'Outfit-Medium': require('./src/assets/fonts/outfit/Outfit-Medium.ttf'),
		'Outfit-Regular': require('./src/assets/fonts/outfit/Outfit-Regular.ttf'),
		'Outfit-SemiBold': require('./src/assets/fonts/outfit/Outfit-SemiBold.ttf'),
		'Outfit-Thin': require('./src/assets/fonts/outfit/Outfit-Thin.ttf'),
	});
	if (!fontsLoaded && !fontError) {
		return;
	}
	return (
		<GestureHandlerRootView>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}>
					<NavigationContainer ref={navigationRef}>
						<NativeBaseProvider>
							<SafeAreaProvider>
								<Routes />
							</SafeAreaProvider>
						</NativeBaseProvider>
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</GestureHandlerRootView>
	);
};
export default React.memo(App);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
