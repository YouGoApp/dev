import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions, Image } from 'react-native';
import Recommendation from '.././recommendation/Recommendation';
import Preference from '.././preference/Preference';

export default class Activity extends React.Component {
 	
	state = {
		Activity: '',
	}
	
	updateActivity = (Activity) => {
		this.setState({Activity: Activity})
	}

	handleRecommendation=()=>{
		this.props.navigation.navigate('Recommendation')
	}
	
	handlePreference=()=>{
		this.props.navigation.navigate('Preference')
	}
	
	render() {
			
		return (
			
			<View style={styles.container}>
        
				<View style={styles.header}>
					<TouchableOpacity onPress={this.handlePreference}>
						<Image
							source={require('../.././assets/icon/left_arrow.png')}
							style={{width: 25, height: 25}}
							/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.body}>
					<Text style={styles.prefTitle}>Select an activity that you like</Text>
				
					<Text style={styles.prefSubTit}>You can change it in the settings</Text>

					<Text style={{marginBottom: 20}}>-----------------------------------</Text>

					<View style={{flexDirection: "row"}}>
						<TouchableOpacity style={styles.button} onPress={this.handleRecommendation}>
							<Image 
								source={require('../.././assets/imgs/eat.jpeg')}
								style={styles.image}
								/>
							<Text style={{color: "white", paddingTop: 5, paddingBottom: 5, fontWeight: "bold"}}>Eat &amp; Drink</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button} onPress={this.handleRecommendation}>
							<Image 
								source={require('../.././assets/imgs/concert.jpg')}
								style={styles.image}
								/>
							<Text style={styles.selectionText}>Indoor Activities</Text>
						</TouchableOpacity>
					</View>

					<View style={{flexDirection: "row"}}>
						<TouchableOpacity style={styles.button} onPress={this.handleRecommendation}>
							<Image 
								source={require('../.././assets/imgs/nightlife.jpg')}
								style={styles.image}
								/>
							<Text style={styles.selectionText}>Nightlife</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button} onPress={this.handleRecommendation}>
							<Image 
								source={require('../.././assets/imgs/outdoor.jpg')}
								style={{width: 180, height: 180}}
								/>
							<Text style={styles.selectionText}>Outdoor Activities</Text>
						</TouchableOpacity>
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
		fontSize: 28,
		marginBottom: 20,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 20,
		marginBottom: 20,
	},
	button: {
		width: 180,
		height: 206,
		backgroundColor: "#45d8d5", 
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	image: {
		width: 180, 
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
	}
});