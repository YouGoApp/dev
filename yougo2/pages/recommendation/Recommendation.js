import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Slider, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeDistance, ChangeRest, SetSelectedIndex } from '.././redux/action';

import Activity from '.././activity/Activity';
import Description from '.././description/Description';
import Setting from '.././setting/Setting';
import RecomRest from '.././recomRest/RecomRest';
import Profile from '.././profile/Profile';

class Recommendation extends React.Component {

	onoff = 0;

	state = {
		setting: false
	}

	constructor(props) {
		super(props);
		this.state = {
			switchValue: true,
			distance: 5,
			isLoading: false
		}
	}

	handleBack = () => {
		this.props.navigation.navigate('Activity')
	}

	handleProfile = () => {
		this.props.navigation.navigate('Profile')
	}

	handleSetting = () => {
		if (this.onoff === 0) {
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

	reloadData = async (distance) => {
		this.setState({ distance: distance, isLoading: true });
		var resp = await fetch(this.props.searchUrl + "&radius=" + distance * 1000);
		var json = await resp.json();
		this.props.dispatch(ChangeRest(json.results));
		this.setState({ isLoading: false });
	}

	onDistanceChange = (distance) => {
		this.reloadData(distance);
	}

	handleDescription = (obj, index) => {
		this.props.dispatch(SetSelectedIndex(index));
		this.props.navigation.navigate('Description')
	}

	render() {

		var setting = null;
		if (this.state.setting === true) {
			setting = (
				<View style={{ width: '100%' }}>
					<Setting />
				</View>
			)
		} else {
			setting = null;
		}

		return (

			<View style={styles.container}>

				<View style={styles.header}>
					<View style={{ paddingRight: 148, paddingTop: 42 }}>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ paddingTop: 42 }}>
						<TouchableOpacity onPress={this.handleProfile}>
							<Image
								source={require('../.././assets/icon/user.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ paddingLeft: 148, paddingTop: 42 }}>
						<TouchableOpacity onPress={this.handleSetting}>
							<Image
								source={require('../.././assets/icon/setting.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.body}>

					<View style={{ backgroundColor: 'rgba(26,46,53,0.85)' }}>
						{setting}
					</View>

					<View style={{ borderWidth: 0.5, borderColor: 'grey', paddingBottom: 10, backgroundColor: "#ffffff"}}>
						<View style={{ flexDirection: 'row', paddingTop: 10, width: "100%"}}>
							<View style={{width: "80%"}}>
								<Text style={{ paddingBottom: 10, paddingLeft: 15, fontSize: 17 }}>Distance</Text>
							</View>
							<View style={{width: "20%"}}>
								<Text
									style={{ width: 60, height: 25, paddingLeft: 10, paddingRight: 10, paddingTop: 2, marginTop: 1, borderWidth: 0.5, borderColor: '#45d8d5', justifyContent: 'center', alignItems: 'center' }}
								>{this.state.distance} km</Text>
							</View>
						</View>
						<Slider
							onValueChange={val => this.onDistanceChange(val)}
							minimumValue={0}
							maximumValue={25}
							step={1}
							value={this.state.distance}
							style={styles.distanceSlider}
							disabled={this.state.isLoading}
						/>
					</View>

					<ScrollView>
						<RecomRest handleDescription={this.handleDescription}/>
					</ScrollView>

				</View>

			</View>
		);
	}
}

function grabVar(state) {
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
		searchUrl: state.Page.searchUrl
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
		flex: 1,
		backgroundColor: '#ffffff',
		width: '100%',
		height: '88%',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '12%',
		justifyContent: "center",
		position: 'relative',
		top: 0,
	},
	distanceSlider: {
		width: '100%',
		backgroundColor: "#ffffff",
	}
});
