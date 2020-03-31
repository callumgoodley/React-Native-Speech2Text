import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View>
				<Text class={styles.LoginButton}>hello this is home screen.</Text>
			</View>
			<View>
				<Button title="Let's go record" onPress={() => navigation.navigate('Record')} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	LoginButton: {
		textAlign: 'center'
	}
});

export default Home;
