import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, ScrollView } from 'react-native';
import Voice from 'react-native-voice';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import VoiceRecord from './components/voice_record';

const Stack = createStackNavigator();

class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
					<Stack.Screen name="Record" component={VoiceRecord} options={{ title: 'Record' }} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;
