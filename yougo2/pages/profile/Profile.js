import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Slider, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { SetUser } from '.././redux/action';

import Recommendation from '.././recommendation/Recommendation';
import HistoryRest from '.././historyRest/HistoryRest';
import Description from '.././description/Description';
import Login from '.././login/Login';
import { ImagePicker, Permissions } from 'expo';

class Profile extends React.Component {
	BASE_URL = 'https://yougoapp.herokuapp.com/';

	constructor(props) {
		super(props);
		this.state = {
			image: 'http://1.bp.blogspot.com/-YLXDiM7VATc/T9rqencOPLI/AAAAAAAACRQ/VMjDWJ3wOpI/s1600/06-15-12-ardencho.jpg',
			uploading: false
		};
	}

	componentDidMount() {
		console.log(this.props.user);
		if (this.props.user.avatar) {
			this.setState({ image: this.BASE_URL + this.props.user.avatar });
		}
	}

	handleBack = () => {
		this.props.navigation.navigate('Recommendation')
	}

	handleDescription = () => {
		this.props.navigation.navigate('Description')
	}

	handleSignOut = () => {
		this.props.navigation.navigate('Login')
	}

	pickImage = async () => {
		const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
		if (status !== 'granted') {
			await Permissions.askAsync(Permissions.CAMERA_ROLL);
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ uploading: true });
			// this.setState({ image: result.uri });
			const formData = new FormData();
			formData.append('username', this.props.user.username);
			const uriPart = result.uri.split('.');
			const fileExtension = uriPart[uriPart.length - 1];

			formData.append('avatar', {
				uri: result.uri,
				name: `photo.${fileExtension}`,
				type: `image/${fileExtension}`
			});

			// Production
			const api = this.BASE_URL + 'updateavatar.php';

			//API that use fetch to input data to database via backend php script
			fetch(api, {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData
			})
				.then((response) => response.json())
				.then((responseJson) => {
					const clonedUser = Object.assign({}, this.props.user);
					clonedUser.avatar = responseJson.avatar;
					this.props.dispatch(SetUser(clonedUser));
					this.setState({ image: this.BASE_URL + responseJson.avatar, uploading: false });
				})
				.catch((error) => {
					console.error(error);
					this.setState({ uploading: false })
					alert(error.error);
				})
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={{ paddingTop: 42, paddingRight: 160 }}>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ paddingTop: 42, paddingLeft: 160 }}>
						<TouchableOpacity onPress={this.handleSignOut}>
							<Image
								source={require('../.././assets/icon/sign_out.png')}
								style={{ width: 25, height: 25 }}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.profile}>
						<View style={styles.profImg}>
							<TouchableOpacity onPress={this.pickImage}>
								<Image
									style={{ width: 120, height: 120, borderRadius: 60 }}
									source={{ uri: this.state.image }}
								/>
							</TouchableOpacity>
						</View>
						{this.state.uploading && (<Text>Uploading...</Text>)}
						<Text style={styles.prefTitle}>{this.props.user.username}</Text>


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

function grabVar(state) {
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
		user: state.Page.user
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
		height: '88%',
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
		shadowOffset: { width: 0, height: 5 },
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
	subTitle: {
		color: '#1a2e35',
		fontSize: 18,
		paddingBottom: 15,
		paddingTop: 10,
	},
	profRest: {
		width: '100%',
		paddingTop: 2,
		elevation: 6,
	},
	profImg: {
		backgroundColor: '#1a2e35',
		width: 120,
		height: 120,
		borderRadius: 100,
		borderWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '12%',
		justifyContent: "center",
		position: 'relative',
		top: 0,
	},
});
