import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Recommendation from '.././recommendation/Recommendation';
import Profile from '.././profile/Profile';

class Description extends React.Component {
	BASE_URL = 'https://yougoapp.herokuapp.com/';

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			details: {
				address: '',
				phone: '',
				email: '',
				description: '',
				openingHours: []
			},
			name: '',
			longitude: '',
			latitude: ''
		}
	}

	componentDidMount() {
		const { navigation } = this.props;
		const history = navigation.getParam('history', null);

		// Come from history page
		if (history) {
			this.getImages(JSON.parse(history.photo_references));
			const selectedItem = { place_id: history.place_id };
			this.getDetails(selectedItem, false);
			this.setState({ longitude: history.longitude, latitude: history.latitude, name: history.name });
		} else {
			const selectedItem = this.props.restList[this.props.selectedIndex];
			this.getImages(selectedItem.photos);
			this.getDetails(selectedItem, true);
			this.setState({
				longitude: selectedItem.geometry.location.lng,
				latitude: selectedItem.geometry.location.lat,
				name: selectedItem.name });
		}
	}

	saveHistory = (selectedItem, details, place_id) => {
		const api = this.BASE_URL + 'inserthistories.php';

		var fd = new FormData();
		fd.append("username", this.props.user.username);
		fd.append("name", selectedItem.name);
		fd.append("address", details.address);
		fd.append("latitude", selectedItem.geometry.location.lat);
		fd.append("longitude", selectedItem.geometry.location.lng);
		fd.append("place_id", place_id);
		fd.append("price", selectedItem.price_level);

		let images = [];

		for (let i = 0; i < selectedItem.photos.length; i++) {
			images.push(selectedItem.photos[i].photo_reference);
		}

		fd.append("photo_references", JSON.stringify(images));

		fetch(api, {
			method: "POST",
			body: fd
		}).then((resp) => {
			return resp.json();
		}).then((json) => {
			console.log(json);
		}).catch((error) => {
			console.error(error);
		});
	}

	handleBack = () => {
		this.props.navigation.navigate('Recommendation')
	}

	handleMap = (lat, lng, label) => {
		const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'http://maps.google.com/maps?daddr=' });
		const latLng = `${lat},${lng}`;
		const url = Platform.select({
			ios: `${scheme}${label}@${latLng}`,
			android: `${scheme}${latLng}(${label})`
		});

		Linking.openURL(url);
	}

	getImages = (photos) => {
		if (!photos || !photos.length) {
			return [];
		}

		let images = [];

		for (let i = 0; i < photos.length; i++) {
			let photoId = photos[i].photo_reference;

			if (!photoId) {
				photoId = photos[i];
			}

			var searchUrl = "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyADB35yIzQPJnk692vgv-_Iq5ORZgsWr9k&maxwidth=400&photoreference=" + photoId;
			images.push(searchUrl);
		}

		this.setState({ images: images });
	}

	getDetails = async (selectedItem, logHistory) => {
		const id = selectedItem.place_id;
		var searchUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + id + "&fields=name,vicinity,formatted_phone_number,reviews,opening_hours,formatted_address&key=AIzaSyADB35yIzQPJnk692vgv-_Iq5ORZgsWr9k";
		var resp = await fetch(searchUrl);
		var json = await resp.json();
		const result = json.result;

		if (result) {
			let details = {
				address: result.formatted_address,
				phone: result.formatted_phone_number,
				description: result.reviews.length > 0 ? result.reviews[0].text : 'No description',
				openingHours: result.opening_hours.weekday_text
			};

			this.setState({ details: details });

			if (logHistory) {
				this.saveHistory(selectedItem, details, id);
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={{ paddingTop: 42, paddingRight: 345 }}>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.imgSlider}>
						<ImageSlider
							images={
								this.state.images
							}
						/>
					</View>
					<ScrollView>
						<Text style={styles.prefTitle}>{this.state.name}</Text>
						<View style={{ alignItems: "center" }}>
							<View
								style={styles.descLines}
							/>
						</View>
						<Text style={styles.subTitle}><Text style={{ fontWeight: 'bold' }}>Address:</Text> {this.state.details.address}</Text>
						<Text style={styles.subTitle}><Text style={{ fontWeight: 'bold' }}>Phone:</Text> {this.state.details.phone}</Text>
						<View>
							<Text style={styles.subTitleWrapper}>Opening Hours:</Text>
							{
								this.state.details.openingHours.map((hour, index) => (
									<View style={{ flex: 1, flexDirection: "row" }} key={index}><Text style={styles.subTitle}>{hour}</Text></View>
								))
							}
						</View>
						<View style={{ alignItems: "center" }}>
							<View
								style={styles.descLines}
							/>
						</View>
						<Text style={styles.subTitle}><Text style={{ fontWeight: 'bold' }}>Top Reviews:</Text></Text>
						<Text style={{ paddingLeft: 15, paddingRight: 15 }}>{this.state.details.description}</Text>
					</ScrollView>
				</View>

				<View style={styles.footer}>
					<View>
						<TouchableOpacity onPress={() => this.handleMap(this.state.longitude, this.state.latitude, this.state.name)}>
							<Text style={styles.CTA}>Get Directions</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		);
	}
}

function grabVar(state) {
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
		selectedIndex: state.Page.selectedIndex,
		restList: state.Page.result,
		user: state.Page.user
	}
}

export default connect(grabVar)(Description);

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
		paddingBottom: 100
	},
	imgSlider: {
		width: '100%',
		height: 300,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 28,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingTop: 10,
		paddingRight: 15,
	},
	subTitle: {
		color: '#1a2e35',
		fontSize: 14,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingTop: 5,
		paddingRight: 15,
	},
	subTitleWrapper: {
		fontWeight: "bold",
		fontSize: 14,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingTop: 5,
		paddingRight: 15,
	},
	descLines: {
		width: '95%',
		borderBottomColor: '#1a2e35',
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5,
		marginBottom: 5,
	},
	CTA: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 25,
		paddingLeft: 125,
		paddingTop: 15,
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
	footer: {
		flexDirection: 'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '8%',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
});
