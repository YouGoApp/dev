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
				
				<View style={styles.body}>
          <Text style={styles.extraTitle}>WELCOME TO YOUGO</Text>
          
          <Text style={styles.smallTitle}>WE GIVE THE BEST{"\n"}RESTAURANT RECOMMENDATIONS{"\n"}______________________</Text>
          
          <Text style={styles.startTitle}>LETS GET STARTED!</Text>
                    
					<Text style={styles.prefTitle}>How many people are there?</Text>

					<TextInput
						style={styles.input}
						placeholder="0"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid='transparent'
						maxLength={2}
						keyboardType='numeric'
						textContentType='none'
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
		backgroundColor: '#1a2e35',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		backgroundColor: 'black',
		marginBottom: 20,
	},
    startTitle: {
		color: '#ffffff',
		fontWeight: '500',
		fontSize: 22,
		marginBottom: 30,
        textAlign:'center',
	},
    smallTitle: {
		color: '#ffffff',
		fontWeight: '300',
		fontSize: 16,
		marginBottom: 30,
        textAlign:'center',
	},
    extraTitle: {
		color: '#ffffff',
		fontWeight: '300',
		fontSize: 26,
		marginBottom: 30,
	},
	prefTitle: {
		color: '#ffffff',
		fontWeight: '400',
		fontSize: 26,
		marginBottom: 30,
		marginTop: 40,
	},
	input: {
        borderRadius: 10,
		fontSize: 42,
		marginBottom: 30,
		marginTop: 30,
		width: 75,
		height: 75,
		borderColor: '#45d8d5',
		borderWidth: 4,
		backgroundColor: 'white',
		paddingRight: 20,
		paddingLeft: 25,
		paddingTop: 5,
		paddingBottom: 5,
	},
	button: {
    borderRadius: 10,
		width: 250,
		height: 50,
		backgroundColor: "#45d8d5",
		marginTop: 80,
		marginBottom: 10,
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
		//backgroundColor: "rgba(26, 46, 53, 1.0)",
		width: '100%',
		height: '15%',
		justifyContent: "center",
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 23,
	}
});