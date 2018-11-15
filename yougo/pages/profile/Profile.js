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
				</View>
				
				<View style={styles.body}>
					<View style={styles.profImg}>
						<Image
							source={{uri: 'https://goo.gl/yXUpAJ'}}
							style={{width: '100%', height: '100%', borderRadius: 150}}
							/>
					</View>
						
					<Text style={styles.prefTitle}>@username</Text>
					<ScrollView style={{width: '100%', paddingTop: 1}}>
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
				
				<View style={styles.footer}>
          <TouchableOpacity onPress={this.handleSignOut}>
            <Text style={styles.CTA}>Sign Out</Text>
          </TouchableOpacity>
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
		backgroundColor: '#ffffff',
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 28,
		paddingBottom: 20,
		paddingTop: 25,
	},
	subTitle:{
		color: '#1a2e35',
		fontSize: 18,
		paddingBottom: 15,
		paddingTop: 10,
	},
	profImg: {
		backgroundColor: '#1a2e35',
		width: 150,
		height: 150,
		borderRadius: 100,
		borderWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
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
});