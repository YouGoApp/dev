import React from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, } from 'react-native';

export default class Login extends React.Component {
  
	state={
		facebook: '',
		google: ''
	}
	
	handleFacebook=()=> {
		this.props.navigation.navigate('Preference')
	}
	
	handleGoogle=()=>{
		alert("This is working, I think, Hopefully, Love you Henry, Help us PLEASE");
	}
	
	render() {
    return (
      <View style={styles.container}>				
				<View style={styles.whitebox}>
					<Text style={{marginBottom: 45, fontSize: 25}}>Quick Sign In</Text>
					<View style={{width: 250, backgroundColor: "#45d8d5"}}>
						<Button 
							title="SIGN IN WITH FACEBOOK"
							onPress={this.handleFacebook}
							color="#45d8d5"
							/>
					</View>
					<Text style={{marginTop: 20, marginBottom: 20}}>----------------------        OR        ----------------------</Text>
					<View style={{width: 250, backgroundColor: "#45d8d5"}}>
						<Button 
						title="SIGN IN WITH GOOGLE"
						onPress={this.handleGoogle}
						color="#45d8d5"
						/>
					</View>
					<Text style={{marginTop: 30, fontSize: 16}}>By signing in, I agree to YouGo</Text>
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
  },
	whitebox: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		top: 260,
		width: 350,
		height: 380,
	}
});