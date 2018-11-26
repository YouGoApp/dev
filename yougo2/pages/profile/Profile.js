import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Slider, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Recommendation from '.././recommendation/Recommendation';
import HistoryRest from '.././historyRest/HistoryRest';
import Description from '.././description/Description';
import Login from '.././login/Login';

class Profile extends React.Component {
  
	handleBack=()=>{
		this.props.navigation.navigate('Recommendation')
	}
	
	handleDescription=()=>{
		this.props.navigation.navigate('Description')
	}
  
  handleSignOut=()=>{
    this.props.navigation.navigate('Login')
  }
	
	render() {
    		
		return (
      <View style={styles.container}>
				<View style={styles.header}>
					<View>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{width: 25, height: 25}}
								/>	
						</TouchableOpacity>
					</View>
					<View style={styles.LogOut}>
					<TouchableOpacity onPress={this.handleSignOut}>
					<Image 
								source={require('../.././assets/icon/sign_out.png')}
								style={{width:28, height: 28,}}
							/>		
					</TouchableOpacity>
					</View>
				</View>
				
				<View style={styles.body}>
					<View style={styles.profile}>
            <View style={styles.profImg}>
              <Image
                source={{uri: 'https://goo.gl/yXUpAJ'}}
                style={{width: '100%', height: '100%', borderRadius: 150}}
                />
            </View>

            <Text style={styles.prefTitle}>@username</Text>
				
					
					</View>
          
					<ScrollView style={styles.profRest}>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<HistoryRest />
						</TouchableOpacity>
					</ScrollView>
				</View>
			</View>
    );
  }
}

function grabVar(state){
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest
	}
}

export default connect(grabVar)(Profile);

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
		backgroundColor: 'white',
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profile: {
		backgroundColor: "#ffffff", 
		justifyContent: 'center',
		alignItems: 'center', 
		width: '97%',
		borderRadius: 5,
		borderColor: '#45d8d5',
    borderWidth: 0.75,
		shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
		marginTop: 5,
	},
	prefTitle: {
		color: 'black',
		fontWeight: '500',
		fontSize: 21,
		paddingBottom: 20,
		paddingTop: 15,
		paddingRight: 4,
	},
	subTitle:{
		color: '#1a2e35',
		fontSize: 18,
		paddingBottom: 15,
		paddingTop: 10,
	},
	profRest:{
		width: '100%', 
		paddingTop: 2,
		elevation: 6,
	},
	profImg: {
		backgroundColor: '#1a2e35',
		width:  120,
		height: 120,
		borderRadius: 100,
		borderWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
	},
	CTA: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 28,
		paddingLeft: 150,
		paddingTop: 10,
	},
	header: {
		flexDirection:'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '10%',
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 38,
	},
	footer: {
		flexDirection:'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '8%',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	LogOut: {
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
		paddingBottom: 10,
		paddingRight: 15,
	}
});