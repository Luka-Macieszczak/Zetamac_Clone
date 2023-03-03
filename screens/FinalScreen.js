import React, {useState, useContext} from 'react'
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	useColorScheme,
	View,
} from 'react-native';
import { Context } from '../Context';

 
const FinalScreen = ({ navigation }) => {   
    const context = useContext(Context)

    return (
        <View style={styles.container}>
			<View style={{flex:10}}></View>

			<View style={styles.horizontalDiv}>
				<Text style={{marginRight: 15, fontSize: 48}}>
					{`Final Score: ${context.score}`}
				</Text>
			</View>
			
            <Button onPress={() => navigation.navigate('Settings')} title='Restart'>
				
			</Button>

			<View style={{flex:10}}></View>
		</View>
    );
}
 
const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		justifyContent:'center',
		flex: 1
	},
});

export default FinalScreen;
 