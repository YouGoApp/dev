import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions } from 'react-native';
import Activity from '.././activity/Activity';

import { connect } from 'react-redux';
import { ChangePeople } from '.././redux/action';

class Preference extends React.Component {
 	
	handlePeople=(text)=>{
		this.props.dispatch(ChangePeople(text));
	}
	
	handleContinue=()=>{
		this.props.navigation.navigate('Activity');
	}
	
	render() {
		return (
      <View style={styles.container}>
        
				<View style={styles.header}>
				</View>
				
				<View style={styles.body}>
					<Text style={styles.prefTitle}>How many people are in your group?</Text>

					<TextInput
						style={styles.input}
						placeholder=""
						placeholderTextColor="white"
						autoCapitalize="none"
						underlineColorAndroid='transparent'
						maxLength={2}
						keyboardType='numeric'
						onChangeText={this.handlePeople}
						/>

					<TouchableOpacity style={styles.button} onPress={this.handleContinue}>
						<Text style={{alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold"}}>
							CONTINUE
						</Text>
					</TouchableOpacity>
				</View>
				
      </View>
    );
  }
}

function grabVar(state){
	return {
		numPeople: state.Page.numPeople
	}
}

export default connect(grabVar)(Preference);

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
		fontSize: 23,
		marginBottom: 30,
	},
	input: {
		marginBottom: 30,
		width: 100,
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