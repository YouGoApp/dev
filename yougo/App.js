import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Event from './pages/event/Event';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Map from './pages/map/Map';
import Preference from './pages/preference/Preference';
import Setting from './pages/setting/Setting';
import Loading from './pages/loading/Loading';
import { createStackNavigator, } from 'react-navigation';

//class 

export default class App extends React.Component {
	
	constructor() {
		super()
		this.state = {
			showLogin: true
		}
	}
	
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				showLogin: false
			})
		},
			1000)
	}
	
	render() {
		return (
      <View style={styles.container}>
				{
					this.state.showLogin ?
						<Loading />:
						<Login />
				}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2e35',
    alignItems: 'center',
    justifyContent: 'center',
  }
});