import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Slider, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Activity from '.././activity/Activity';
import Description from '.././description/Description';
import Setting from '.././setting/Setting';
import RecomRest from '.././recomRest/RecomRest';
import Profile from '.././profile/Profile';

class Recommendation extends React.Component {
 	
	onoff= 0;
	
	state={
		setting: false
	}
	
	constructor(props){
		super(props);
		this.state = {
			switchValue: true,
			distance: 5
		}
	}
	
	handleBack=()=>{
		this.props.navigation.navigate('Activity')
	}
	
	handleProfile=()=>{
		this.props.navigation.navigate('Profile')
	}
	
	handleSetting=()=>{	
		if(this.onoff === 0){
			this.setState({
				setting: true
			});
			this.onoff = 1;
		}
		else {
			this.setState({
				setting: false
			})
			this.onoff = 0;
		}	
	}
	
	handleDescription=()=>{
		this.props.navigation.navigate('Description');
	}
		
	render() {
		
		var setting = null;
		if(this.state.setting === true){
			setting = (
				<View style={{width: '100%'}}>
					<Setting />
				</View>
			)
		} else {
			setting = null;
		}
		
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
					
					<View style={{flex: 1, paddingLeft: 155}}>
						<TouchableOpacity onPress={this.handleProfile}>
							<Image
								source={require('../.././assets/icon/user.png')}
								style={{width: 25, height: 25}}
								/>
						</TouchableOpacity>
					</View>
					
					<View style={{flex: 1, paddingLeft: 130}}>
						<TouchableOpacity onPress={this.handleSetting}>
							<Image
								source={require('../.././assets/icon/setting.png')}
								style={{width: 25, height: 25}}
								/>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={styles.body}>
					
					<View style={{backgroundColor: 'rgba(26,46,53,0.85)'}}>
						{setting}
					</View>
					
					<View style={{borderWidth: 0.5, borderColor: 'grey', paddingBottom: 10}}>
						<View style={{flexDirection: 'row', paddingTop: 10}}>
							<Text style={{paddingBottom: 10, paddingLeft: 15, fontSize: 17}}>Distance</Text>
							<Text
								style={{width: 60, height: 25, paddingLeft: 10, paddingRight: 10, paddingTop: 2, marginTop: 1, marginLeft: 247, borderWidth: 0.5, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'}}
								>{this.state.distance} km</Text>
						</View>
						<Slider
							onValueChange={val => this.setState({ distance: val })}
							minimumValue={0}
							maximumValue={25}
							step={1}
							value={this.state.distance}
							style={styles.distanceSlider}
							/>
					</View>
					
					<ScrollView>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleDescription}>
							<RecomRest />
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

export default connect(grabVar)(Recommendation);

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
	distanceSlider: {
		width: 405,
	}
});