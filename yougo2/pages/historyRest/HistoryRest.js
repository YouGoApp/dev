import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Description from '.././description/Description';

class HistoryRest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			thumbnail: ''
		};
	}

	componentDidMount() {
		const thumbnail = this.getImageFirstPhotoUrl(this.props.history.photo_references);
		this.setState({ thumbnail: thumbnail });
	}

	getImageFirstPhotoUrl = (photoReferences) => {
		if (!photoReferences || !photoReferences.length) {
			return '';
		}

		const photoIds = JSON.parse(photoReferences);
		const firstReference = photoIds[0];
		return "https://maps.googleapis.com/maps/api/place/photo?key=&maxwidth=100&photoreference=" + firstReference;
	}

	render() {

		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					{
						this.state.thumbnail ? <Image
							style={styles.images}
							source={{ uri: this.state.thumbnail }}
						/> : null
					}

					<View style={{ paddingLeft: 15 }}>
						<View style={{ paddingBottom: 10 }}>
							<Text style={{ fontWeight: 'bold' }}>{this.props.history.name}</Text>
						</View>

						<View>
							<Text>Price Level: {this.props.history.price}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

function grabVar(state) {
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest
	}
}

export default connect(grabVar)(HistoryRest);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: '97%',
		height: 75,
		paddingLeft: 15,
		paddingTop: 7,
		borderWidth: 0.75,
		borderColor: 'grey',
		borderRadius: 5,
		borderRadius: 5,
		borderColor: '#45d8d5',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5,
		margin: 7,
	},
	images: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
	},
});
