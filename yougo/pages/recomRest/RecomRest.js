import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Activity from '.././activity/Activity';
import Description from '.././description/Description';
import Setting from '.././setting/Setting';

export default class Recommendation extends React.Component {
 	
	render() {
			
		return (
			<View style={styles.container}>
        <TouchableOpacity style={{flexDirection: 'row', paddingTop: 12}}>
					<Image
						style={styles.images}
						source={require('../.././assets/imgs/eat.jpeg')}
						/>
					
					<View style={{paddingLeft: 15}}>
						<View>
							<Text>Restaurant Name</Text>
						</View>

						<View>
							<Text>$$$$</Text>
						</View>

						<View>
							<Text>4.0/5.0</Text>
						</View>

						<View>
							<Text>5 km</Text>
						</View>
					</View>
					
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: '100%',
		height: 150,
		paddingLeft: 15,
		borderWidth: 0.5,
		borderColor: 'grey'
  },
	images: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 125,
		height: 125,
	},
});