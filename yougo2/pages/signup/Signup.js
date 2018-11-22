import React from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, TextInput } from 'react-native';
import Preference from '.././preference/Preference';
import Login from '.././login/Login';

export default class Signup extends React.Component {
  
  username="";
  password="";
  email="";
  city="";
  	
	handleSignUp=()=>{
    if(this.username !== "" && this.password !== "" & this.email !== "" && this.city !== ""){
      var fd = new FormData();
    fd.append("username", this.username);
    fd.append("password", this.password);
    fd.append("email", this.email);
    fd.append("city", this.city);
    fetch("https://yougoapp.herokuapp.com/insertuser.php", {
      method: "POST",
      body: fd
      }).then((resp)=>{
        return resp.json();
      }).then((json)=>{
        if(json.length == 0 || "" || null){
          alert("Sign up Successful")
          this.props.navigation.navigate('Login')
        } else {
          console.log(json);
        }
      });
    } else {
      alert ("PLease fill in all fields")
    }
   // alert(this.username +":"+ this.password +":"+ this.email +":"+ this.city);
    //return false;
    
	}
	
	handleCancel=()=>{
		this.props.navigation.navigate('Login')
	}
	
	handleUsername=(text)=>{
		this.username = text;
	}
	
	handlePassword=(text)=>{
		this.password = text;
	}
	
	handleEmail=(text)=>{
		this.email = text;
	}
	
	handleCity=(text)=>{
		this.city = text;
	}
	
	render() {
    return (
      
			<View style={styles.container}>				
				
				<View style={styles.whitebox}>
					
					<Text style={{marginBottom: 35, fontSize: 25, fontWeight: "bold"}}>Sign Up</Text>
					
					<TextInput 
						style={styles.input}
						placeholder="Username (No space, Max. 10 chars)"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
						maxLength={10}
						onChangeText={this.handleUsername}
						/>
					
					<TextInput 
						style={styles.input}
						placeholder="Password (Max. 10 chars)"
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
		height: 525,
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