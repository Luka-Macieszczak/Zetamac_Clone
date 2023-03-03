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

 
const Settings = ({ navigation }) => {   
    const context = useContext(Context)

    const onPressHandler = () => {
        console.log(context.time)
        navigation.navigate('PlayScreen')
    }

    return (
        <View style={styles.container}>
			<View style={{flex:10}}></View>

			<View style={styles.horizontalDiv}>
				<Text style={{marginRight: 15}}>
					Choose time: 
				</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setTime(text)} style={styles.inputSecondsStyle}>120</TextInput>
			</View>

			<View style={styles.horizontalDiv}>
				<Text >
					{"Addition: [  "}
				</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setAdd1(text)} style={styles.inputNumbersStyle}>2</TextInput>
				<Text>{"  , "}</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setAdd2(text)}  style={styles.inputNumbersStyle}>100</TextInput>
				<Text>
					{"  ] + [  "}
				</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setAdd3(text)} style={styles.inputNumbersStyle}>2</TextInput>
				<Text>{"  , "}</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setAdd4(text)} style={styles.inputNumbersStyle}>100</TextInput>
				<Text>
					{"  ]"}
				</Text>
			</View>

			<View style={styles.horizontalDiv}>
				<Text >
					{"Multiplication: [  "}
				</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setMul1(text)} style={styles.inputNumbersStyle}>2</TextInput>
				<Text>{"  , "}</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setMul2(text)} style={styles.inputNumbersStyle}>12</TextInput>
				<Text>
					{"  ] X [  "}
				</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setMul3(text)} style={styles.inputNumbersStyle}>2</TextInput>
				<Text>{"  , "}</Text>
				<TextInput keyboardType = 'numeric' onChangeText={(text) => context.setMul4(text)} style={styles.inputNumbersStyle}>100</TextInput>
				<Text>
					{"  ]"}
				</Text>
			</View>
			
			<Button onPress={() => onPressHandler()} title='Start'>
				Start
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
	inputSecondsStyle:{
		width:30,
		flex:1/10,
		borderWidth:1,
		borderRadius:5,
		height: 25,
	},
	horizontalDiv:{
		flex: 1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	},
	inputNumbersStyle:{
		width:30,
		flex:1/7,
		height: 20,
		borderWidth:1
	}
});

export default Settings;
 