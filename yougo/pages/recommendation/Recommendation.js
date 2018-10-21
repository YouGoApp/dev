import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions, Image } from 'react-native';
import Activity from '.././activity/Activity';
import Description from '.././description/Description';

export default class Recommendation extends React.Component {
 	
	handleActivity=()=>{
		this.props.navigation.navigate('Activity')
	}
	
	handleDescription=()=>{
		this.props.navigation.navigate('Description')
	}
	
	render() {
			
		return (
			
			<View style={styles.container}>
        
				<View style={styles.header}>
					<TouchableOpacity onPress={this.handleActivity}>
						<Image
							source={require('../.././assets/icon/left_arrow.png')}
							style={{width: 25, height: 25}}
							/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.body}>
					<Text style={styles.prefTitle}>Here are some recommendation</Text>
				
					<Text style={styles.prefSubTit}>Check out what you can do!</Text>

					<Text style={{marginBottom: 20}}>-----------------------------------</Text>
					
					<View style={styles.slider}>
						<View style={{justifyContent: "center", alignItems: "center", padding: 25}}>
							<TouchableOpacity>
								<Image
									source={require("../.././assets/icon/left_arrow_black.png")}
									/>
							</TouchableOpacity>
						</View>
						
						<View>
							<TouchableOpacity style={styles.list}>
								<Image 
									source={require('../.././assets/imgs/miku.jpg')}
									style={styles.image}
									/>
								<Text style={{color: "black", padding: 5, fontWeight: "bold"}}>Miku Restaurant</Text>
								<Text style={{color: "black", padding: 5}}>2100 metres</Text>
								<Text style={{color: "black", padding: 5}}>Vancouver</Text>
								<Text style={{color: "black", padding: 5}}>604 123 4567</Text>
								<Text style={{color: "black", padding: 5}}>11 AM - 11 PM</Text>
								<Button
									title="SEE DETAIL"
									color="#1a2e35"
									onPress={this.handleDescription}
									/>
							</TouchableOpacity>
						</View>
						
						<View style={{justifyContent: "center", alignItems: "center", padding: 25}}>
							<TouchableOpacity>
								<Image
									source={require("../.././assets/icon/right_arrow_black.png")}
									/>
							</TouchableOpacity>
						</View>
					</View>
					
				</View>
					
      </View>
    );
  }
}

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
	title: {
		backgroundColor: 'black',
		marginBottom: 20,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 25,
		marginBottom: 20,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 20,
		marginBottom: 20,
	},
	list: {
		width: 200,
		height: 359,
		backgroundColor: "#e6e6e6", 
		marginBottom: 20,
		margin: 5,
	},
	image: {
		width: '100%', 
		height: 180,
	},
	selectionText: {
		color: "white", 
		paddingTop: 5, 
		paddingBottom: 5, 
		fontWeight: "bold"
	},
	header: {
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '10%',
		justifyContent: "center",
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 23,
	},
	slider: {
		flexDirection: "row",
	}
});