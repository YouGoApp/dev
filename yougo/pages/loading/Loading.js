import React from 'react';
import { StyleSheet, Text, View, Animated, Image, ProgressBarAndroid } from 'react-native';

export default class Loading extends React.Component {
	
	componentWillMount()
	{
		setTimeout(()=>{
			this.props.navigation.navigate('Login');
		}, 5)
	}
	
	render() {
    return (
			<View style={styles.loading}>
				<Image
					style={styles.logo}
					source={require('../.././assets/logo/PNG/logo03_COLOR_C.png')}
					/>
				<ProgressBarAndroid 
					styleAttr='Large'
					color='#45d8d5'
					/>
			</View>	
    );
  }
}

const styles = StyleSheet.create({
  loading: {
		flex: 1,
    backgroundColor: '#1a2e35',
    alignItems: 'center',
    justifyContent: 'center',
		padding: 10,
		height: '100%',
  },
	logo: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 500,
		height: 500,
	},
	
});