import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions } from 'react-native';
import Activity from '.././activity/Activity';

export default class Preference extends React.Component {
 	
	state = {
		Activity: '',
	}
	
	updateActivity = (Activity) => {
		this.setState({Activity: Activity})
	}

	handleActivity=()=>{
		this.props.navigation.navigate('Activity')
	}
	
	render() {
		return (
      <View style={styles.container}>
        
				<View style={styles.header}>
				</View>
				
				<View style={styles.body}>
					<Text style={styles.prefTitle}>Let's find your locations</Text>
				
					<Text style={styles.prefSubTit}>We can personalized your result based on your location</Text>

					<Text style={{marginBottom: 20}}>-----------------------------------</Text>

					<TextInput
						style={styles.input}
						placeholder="Postal Code"
						placeholderTextColor="white"
						autoCapitalize="none"
						underlineColorAndroid='transparent'
						maxLength={6}
						/>

					<TouchableOpacity style={styles.button} onPress={this.handleActivity}>
						<Text style={{alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold"}}>
							CONTINUE
						</Text>
					</TouchableOpacity>
				</View>
				
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
  },
	body: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		backgroundColor: 'black',
		marginBottom: 20,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 30,
		marginBottom: 20,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 15,
		marginBottom: 20,
	},
	input: {
		marginBottom: 20,
		width: 250,
		height: 50,
		borderColor: '#45d8d5',
		borderWidth: 1,
		backgroundColor: '#45d8d5',
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},
	button: {
		width: 250,
		height: 50,
		backgroundColor: "#1a2e35", 
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	pickerActivity: {
		width: 250,
		height: 50,
    borderWidth: 1,
    borderColor: '#45d8d5',
    overflow: 'hidden',
    backgroundColor: '#45d8d5',
    marginBottom: 20,
  },
	header: {
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '10%',
		justifyContent: "center",
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 23,
	}
});