import React from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, TextInput } from 'react-native';
import Preference from '.././preference/Preference';
import Signup from '.././signup/Signup';

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=h&location=lat,lng&radius=0&type=wat

export default class Login extends React.Component {
	
	state = {
    username:"",
    password:""
  }

  handleUsername=(val)=>{
    this.setState({
      username:val
    })
  }
  
  handlePassword=(val)=>{
    this.setState({
      password:val
    })
  }
  
  handleLogin=()=>{
    var fd = new FormData();
    fd.append("username", this.state.username);
    fd.append("password", this.state.password);
    fetch("https://yougoapp.herokuapp.com/selectusers.php", {
      method: "POST",
      body: fd
    }).then((resp)=>{
      return resp.json();
    }).then((json)=>{
      console.log(json);
      if(json.length == 0 || "" || null){
        alert("Incorrect username/password, please try again")
      } else {
        this.props.navigation.navigate('Preference');
      }
    });
	}

	render() {
    return (
      
			<View style={styles.container}>				
				
				<View style={styles.whitebox}>
					
					<Text style={{marginBottom: 35, fontSize: 25, fontWeight: "bold"}}>Sign in to your account</Text>
					
					<TextInput 
						style={styles.input}
						placeholder="Username"
						placeholderTextColor="grey"
						autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={(val)=>{
              this.handleUsername(val)
            }}></TextInput>
					
					<TextInput 
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="grey"
						autoCapitalize="none"
						underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={(val)=>{
              this.handlePassword(val)
            }}></TextInput>
					
					<View style={styles.button}>
						<Button 
							title="LOG IN"
							onPress={this.handleLogin}
							color="#45d8d5"
							/>
					</View>
					
					<View style={{marginBottom: 20, flexDirection: "row"}}>
						<Text style={{fontSize: 16}}>Don't have an account? </Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
							<Text style={{color: "#45d8d5", fontWeight: "bold", fontSize: 16}}>Sign Up</Text>
						</TouchableOpacity>
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
		height: 400,
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