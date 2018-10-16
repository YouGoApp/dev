import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Activity from '.././activity/Activity';

export default class Preference extends React.Component {
 	
	handleActivity=()=>{
		this.props.navigation.navigate('Activity')
	}
	
	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.prefTitle}>Let's find your preference</Text>
				<Text style={styles.prefSubTit}>Tell us a little bit more about you</Text>
				<Text>-----------------------------------</Text>
				<TextInput
					keyboardType="default"
					placeholder="Postal Code"
					underlineColorAndroid='transparent'
					style={{color: "#45d8d5"}}
					maxLength={6}
					/>
				<Button
					title="CONTINUE"
					onPress={this.handleActivity}
					/>
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
	title: {
		backgroundColor: 'black',
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 35,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 20,
	}
});