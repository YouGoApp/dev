import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Recommendation from '.././recommendation/Recommendation';
import Profile from '.././profile/Profile';

class Description extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			details: {
				address: '',
				phone: '',
				email: '',
				description: ''
			}
		}
	}

	componentDidMount() {
		const selectedItem = this.props.restList[this.props.selectedIndex];
		this.getImages(selectedItem.photos);
		this.getDetails(selectedItem.place_id);
	}

	handleBack = () => {
		this.props.navigation.navigate('Recommendation')
	}

	handleMap = (lat, lng, label) => {
		const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
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
			var searchUrl = "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyADB35yIzQPJnk692vgv-_Iq5ORZgsWr9k&maxwidth=400&photoreference=" + photos[i].photo_reference;
			images.push(searchUrl);
		}

		this.setState({ images: images });
	}

	getDetails = async (id) => {
		var searchUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + id + "&fields=name,formatted_address,formatted_phone_number,reviews&key=AIzaSyADB35yIzQPJnk692vgv-_Iq5ORZgsWr9k";
		var resp = await fetch(searchUrl);
		var json = await resp.json();
		const result = json.result;

		if (result) {
			let details = {
				address: result.formatted_address,
				phone: result.formatted_phone_number,
				address: result.formatted_address,
				description: result.reviews.length > 0 ? result.reviews[0].text : 'No description'
			};

			this.setState({ details: details });
		}
	}

	render() {
		const selectedItem = this.props.restList[this.props.selectedIndex];

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
						<Text style={styles.prefTitle}>{selectedItem.name}</Text>
						<Text style={styles.subTitle}>{this.state.details.address}</Text>
						<Text style={styles.subTitle}>{this.state.details.phone}</Text>
						<Text style={styles.subTitle}>{this.state.details.email}</Text>
						<Text style={styles.subTitle}>{this.state.details.description}</Text>
					</ScrollView>
				</View>

				<View style={styles.footer}>
					<View>
						<TouchableOpacity onPress={() => this.handleMap(selectedItem.geometry.location.lat, selectedItem.geometry.location.lng, selectedItem.name)}>
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
		restList: state.Page.result
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
	},
	imgSlider: {
		width: '100%',
		height: 300,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 28,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingTop: 10,
	},
	subTitle: {
		color: '#1a2e35',
		fontSize: 18,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingTop: 10,
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
