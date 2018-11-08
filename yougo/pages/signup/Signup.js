import React from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, TextInput } from 'react-native';
import Preference from '.././preference/Preference';
import Login from '.././login/Login';

export default class Signup extends React.Component {
  	
	handleSignUp=()=>{
		this.props.navigation.navigate('Preference')
	}
	
	handleCancel=()=>{
		this.props.navigation.navigate('Login')
	}
	
	handleUsername=(text)=>{
		
	}
	
	handlePassword=(text)=>{
		password => this.setState({
			password
		})
	}
	
	handleEmail=(text)=>{
		email => this.setState({ 
			email 
		})
	}
	
	handleCity=(text)=>{
		
	}
	
	render() {
    return (
      
			<View style={styles.container}>				
				
				<View style={styles.whitebox}>
					
					<Text style={{marginBottom: 35, fontSize: 25, fontWeight: "bold"}}>Sign Up</Text>
					
					<TextInput 
						style={styles.input}
						placeholder="Username"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						maxLength={10}
						onChangeText={this.handleUsername}
						/>
					
					<TextInput 
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						maxLength={10}
						onChangeText={this.handlePassword}
						secureTextEntry={true}
						/>
					
					<TextInput 
						style={styles.input}
						placeholder="Email"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						maxLength={100}
						onChangeText={this.handleEmail}
						/>
					
					<TextInput 
						style={styles.input}
						placeholder="City"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						maxLength={20}
						onChangeText={this.handleCity}
						/>
					
					<View style={styles.button}>
						<Button 
							title="SIGN UP"
							onPress={this.handleSignUp}
							color="#45d8d5"
							/>
					</View>
					
					<View style={styles.button}>
						<Button 
							title="CANCEL"
							onPress={this.handleCancel}
							color="#45d8d5"
							/>
					</View>
													
					<Text style={{fontSize: 16}}>By signing in, I agree to YouGo</Text>
					
					<Text style={{fontSize: 16}}>
						<Text onPress={() => Linking.openURL('https://www.google.com')} style={{color: '#45d8d5'}}>Privacy Policy</Text> and <Text onPress={() => Linking.openURL('https://www.google.com')} style={{color: '#45d8d5'}}>Terms of Service</Text>
					</Text>	
				
				</View>
      
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e35',
    alignItems: 'center',
		justifyContent: 'center',
  },
	whitebox: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		width: 325,
		height: 500,
	},
	input: {
		marginBottom: 20,
		width: 250,
		borderColor: '#45d8d5',
		borderWidth: 1,
		backgroundColor: 'white',
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
	},
	button: {
		width: 250, 
		backgroundColor: "#45d8d5", 
		marginBottom: 20,
	}
});