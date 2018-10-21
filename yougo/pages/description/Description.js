import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Recommendation from '.././recommendation/Recommendation';

export default class Description extends React.Component {
	
	handleRecommendation=()=>{
		this.props.navigation.navigate('Recommendation')
	}
	
	render() {
		return (
      <View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.handleRecommendation}>
						<Image
							source={require('../.././assets/icon/left_arrow.png')}
							style={{width: 25, height: 25}}
							/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.body}>
						<Text style={styles.prefTitle}>Description</Text>
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
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 28,
		marginBottom: 20,
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