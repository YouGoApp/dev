import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions, Image, CheckBox, ScrollView, Platform } from 'react-native';

import Recommendation from '.././recommendation/Recommendation';
import Preference from '.././preference/Preference';

import { connect } from 'react-redux';
import { ChangePeople, ChangeList, ChangeRest, ChangeDistance, ChangeSearchUrl } from '.././redux/action';
import { Constants, Location, Permissions } from 'expo';

class Activity extends React.Component {

	state = {
		checked: [
			false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
		],
		isDisabled: false,
		cuisine: [
			"japanese", "korean", "chinese", "greek", "italian", "mexican", "thai", "vietnamese", "indonesian", "indian", "persian", "french", "spanish", "filipino", "taiwanese", "ukrainian", "jamaican", "swedish", "fast+food", "bbq", "singaporean", "malaysian", "vegetarian", "vegan", "turkish"
		],
		result: [],
		// latitude,longitude
		location: '49.2499076,-122.9991312',
	}

	componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			alert('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
		} else {
			this._getLocationAsync();
		}
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			alert('Permission to access location was denied');
		}

		let location = await Location.getCurrentPositionAsync({});

		if (location.coords && location.coords.longitude && location.coords.latitude) {
			const loc = location.coords.latitude + ',' + location.coords.longitude;
			this.setState({ location: loc });
		}
	};

	handleChecked = (i) => {
		var t = 0;

		var arr = this.state.checked;
		arr[i] = !arr[i];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == 1) {
				t++;
			}
		}

		for (var i = 0; i < arr.length; i++) {
			if (t >= 5) {
				this.setState({
					isDisabled: true
				})
			} else {
				this.setState({
					isDisabled: false
				})
			}
		}

		this.setState({
			checked: arr
		})

		this.props.dispatch(ChangeList(i));

	}

	handleContinue = async () => {

		var cuis = [];
		for (var i = 0; i < this.state.checked.length; i++) {
			if (this.state.checked[i] === true) {
				cuis.push(
					this.state.cuisine[i]
				)
			}
		}

		var searchUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=&keyword=" + cuis.join(",") + "&type=restaurant&location=" + this.state.location;
		var resp = await fetch(searchUrl + "&radius=5000");
		var json = await resp.json();
		console.log(json.results);
		this.props.dispatch(ChangeRest(json.results));
		this.props.dispatch(ChangeSearchUrl(searchUrl));

		this.props.navigation.navigate('Recommendation');
	}


	handleBack = () => {
		this.props.navigation.navigate('Preference')
	}

	render() {

		return (

			<View style={styles.container}>
				<View style={styles.header}>
					<View style={{ paddingTop: 15, paddingLeft: 20 }}>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>

				</View>

				<View style={styles.body}>

					<Text style={styles.prefTitle}>Select the cuisines that you prefer</Text>

					<Text style={styles.prefSubTit}>Select up to 5 cuisines</Text>

					<ScrollView contentContainerStyle={styles.contentContainer}>
						<View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[0]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 0)}
									disabled={this.state.isDisabled && !this.state.checked[0]}
									value={this.state.checked[0]}
								/>
								<Text style={{ marginTop: 6 }}>Japanese</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[1]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 1)}
									disabled={this.state.isDisabled && !this.state.checked[1]}
									value={this.state.checked[1]}
								/>
								<Text style={{ marginTop: 6 }}>Korean</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[2]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 2)}
									disabled={this.state.isDisabled && !this.state.checked[2]}
									value={this.state.checked[2]}
								/>
								<Text style={{ marginTop: 6 }}>Chinese</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[3]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 3)}
									disabled={this.state.isDisabled && !this.state.checked[3]}
									value={this.state.checked[3]}
								/>
								<Text style={{ marginTop: 6 }}>Greek</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[4]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 4)}
									disabled={this.state.isDisabled && !this.state.checked[4]}
									value={this.state.checked[4]}
								/>
								<Text style={{ marginTop: 6 }}>Italian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[5]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 5)}
									disabled={this.state.isDisabled && !this.state.checked[5]}
									value={this.state.checked[5]}
								/>
								<Text style={{ marginTop: 6 }}>Mexican</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[6]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 6)}
									disabled={this.state.isDisabled && !this.state.checked[6]}
									value={this.state.checked[6]}
								/>
								<Text style={{ marginTop: 6 }}>Thai</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[7]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 7)}
									disabled={this.state.isDisabled && !this.state.checked[7]}
									value={this.state.checked[7]}
								/>
								<Text style={{ marginTop: 6 }}>Vietnamese</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[8]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 8)}
									disabled={this.state.isDisabled && !this.state.checked[8]}
									value={this.state.checked[8]}
								/>
								<Text style={{ marginTop: 6 }}>Indonesian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[9]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 9)}
									disabled={this.state.isDisabled && !this.state.checked[9]}
									value={this.state.checked[9]}
								/>
								<Text style={{ marginTop: 6 }}>Indian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[10]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 10)}
									disabled={this.state.isDisabled && !this.state.checked[10]}
									value={this.state.checked[10]}
								/>
								<Text style={{ marginTop: 6 }}>Persian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[11]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 11)}
									disabled={this.state.isDisabled && !this.state.checked[11]}
									value={this.state.checked[11]}
								/>
								<Text style={{ marginTop: 6 }}>French</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[12]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 12)}
									disabled={this.state.isDisabled && !this.state.checked[12]}
									value={this.state.checked[12]}
								/>
								<Text style={{ marginTop: 6 }}>Spanish</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[13]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 13)}
									disabled={this.state.isDisabled && !this.state.checked[13]}
									value={this.state.checked[13]}
								/>
								<Text style={{ marginTop: 6 }}>Philipino</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[14]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 14)}
									disabled={this.state.isDisabled && !this.state.checked[14]}
									value={this.state.checked[14]}
								/>
								<Text style={{ marginTop: 6 }}>Taiwanese</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[15]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 15)}
									disabled={this.state.isDisabled && !this.state.checked[15]}
									value={this.state.checked[15]}
								/>
								<Text style={{ marginTop: 6 }}>Ukrainian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[16]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 16)}
									disabled={this.state.isDisabled && !this.state.checked[16]}
									value={this.state.checked[16]}
								/>
								<Text style={{ marginTop: 6 }}>Jamaican</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[17]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 17)}
									disabled={this.state.isDisabled && !this.state.checked[17]}
									value={this.state.checked[17]}
								/>
								<Text style={{ marginTop: 6 }}>Swedish</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[18]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 18)}
									disabled={this.state.isDisabled && !this.state.checked[18]}
									value={this.state.checked[18]}
								/>
								<Text style={{ marginTop: 6 }}>Fast Food</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[19]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 19)}
									disabled={this.state.isDisabled && !this.state.checked[19]}
									value={this.state.checked[19]}
								/>
								<Text style={{ marginTop: 6 }}>BBQ</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[20]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 20)}
									disabled={this.state.isDisabled && !this.state.checked[20]}
									value={this.state.checked[20]}
								/>
								<Text style={{ marginTop: 6 }}>Singaporean</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[21]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 21)}
									disabled={this.state.isDisabled && !this.state.checked[21]}
									value={this.state.checked[21]}
								/>
								<Text style={{ marginTop: 6 }}>Malaysian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[22]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 22)}
									disabled={this.state.isDisabled && !this.state.checked[22]}
									value={this.state.checked[22]}
								/>
								<Text style={{ marginTop: 6 }}>Vegetarian</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[23]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 23)}
									disabled={this.state.isDisabled && !this.state.checked[23]}
									value={this.state.checked[23]}
								/>
								<Text style={{ marginTop: 6 }}>Vegan</Text>
							</View>

							<View style={{ flexDirection: 'row' }} value={this.state.cuisine[24]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 24)}
									disabled={this.state.isDisabled && !this.state.checked[24]}
									value={this.state.checked[24]}
								/>
								<Text style={{ marginTop: 6 }}>Turkish</Text>
							</View>

						</View>
					</ScrollView>

					<TouchableOpacity style={styles.button} onPress={this.handleContinue}>
						<Text style={{ alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>
							CONTINUE
						</Text>
					</TouchableOpacity>

				</View>



			</View>
		);
	}
}

function grabVar(state) {
	return {
		numPeople: state.Page.numPeople,
		sliderDistance: state.Page.sliderDistance
	}
}

export default connect(grabVar)(Activity);

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
		height: '88%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 25,
	},
	button: {
		borderRadius: 10,
		width: 250,
		height: 50,
		backgroundColor: "#1a2e35",
		marginTop: 20,
		marginBottom: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		backgroundColor: 'black',
		marginBottom: 20,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 23,
		marginBottom: 20,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 20,
		marginBottom: 20,
	},
	contentContainer: {
		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 20,
	},
	header: {
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '12%',
		justifyContent: "center",
		position: "relative",
		top: 0,
	}
});
