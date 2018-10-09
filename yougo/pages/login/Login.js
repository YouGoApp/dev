import React from 'react';
import { StyleSheet, Text, View, Button, Linking} from 'react-native';

export default class Login extends React.Component {
  
	state={
		facebook: null,
		google: null
	}
	
	render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 45, fontSize: 25}}>Quick Sign In</Text>
				<View style={{width: 250, backgroundColor: "#45d8d5"}}>
					<Button 
						title="SIGN IN WITH FACEBOOK"
						onPress={this.state.facebook}
						color="#45d8d5"
						/>
				</View>
				<Text style={{marginTop: 20, marginBottom: 20}}>----------------------        OR        ----------------------</Text>
				<View style={{width: 250, backgroundColor: "#45d8d5"}}>
					<Button 
					title="SIGN IN WITH GOOGLE"
					onPress={this.state.google}
					color="#45d8d5"
					/>
				</View>
				<Text style={{marginTop: 30, fontSize: 16}}>By signing in, I agree to YouGo</Text>
				<Text style={{fontSize: 16}}>
					<Text onPress={() => Linking.openURL('https://www.google.com')} style={{color: '#45d8d5'}}>Privacy Policy</Text> and <Text onPress={() => Linking.openURL('https://www.google.com')} style={{color: '#45d8d5'}}>Terms of Service</Text>
				</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		width: 350,
		height: 375,
  },
});