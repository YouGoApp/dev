import React from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, TextInput } from 'react-native';
import Preference from '.././preference/Preference';

export default class Login extends React.Component {
  
	state={
		facebook: Preference,
		google: Preference
	}

	handleFacebook=()=> {
		this.props.navigation.navigate('Preference')
	}
	
	handleGoogle=()=>{
		alert("This button is pressable");
	}
	
	render() {
    return (
      
			<View style={styles.container}>				
				
				<View style={styles.whitebox}>
					
					<Text style={{marginBottom: 35, fontSize: 23, fontWeight: "bold"}}>Sign in to your account</Text>
					
					<TextInput 
						style={styles.input}
						placeholder="Username"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						/>
					
					<TextInput 
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						/>
					
					<View style={styles.button}>
						<Button 
							title="LOG IN"
							onPress={this.handleFacebook}
							color="#45d8d5"
							/>
					</View>
					
					<View style={{marginBottom: 20, flexDirection: "row"}}>
						<Text>Don't have an account? </Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
							<Text style={{color: "#45d8d5", fontWeight: "bold"}}>Sign Up</Text>
						</TouchableOpacity>
					</View>
					
					<Text style={{marginBottom: 20}}>----------------------        OR        ----------------------</Text>
					
					<View style={styles.button}>
						<Button 
							title="SIGN IN WITH FACEBOOK"
							onPress={this.handleFacebook}
							color="#45d8d5"
							/>
					</View>
					
					<View style={styles.button}>
						<Button 
						title="SIGN IN WITH GOOGLE"
						onPress={this.handleGoogle}
						color="#45d8d5"
						/>
					</View>
					
					<Text>By signing in, I agree to YouGo</Text>
					
					<Text>
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
		height: 600,
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