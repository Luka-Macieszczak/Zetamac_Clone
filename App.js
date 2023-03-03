/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Settings';
import PlayScreen from './screens/PlayScreen';
import FinalScreen from './screens/FinalScreen';
import { Provider } from './Context';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					<Stack.Screen  name="Settings" component={Settings} />
					<Stack.Screen name="PlayScreen" component={PlayScreen} />
					<Stack.Screen name="FinalScreen" component={FinalScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}


export default App;
