import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './pages/navigation/Navigation';
import Event from './pages/event/Event';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Map from './pages/map/Map';
import Preference from './pages/preference/Preference';
import Setting from './pages/setting/Setting';
import Loading from './pages/loading/Loading';
import Navigation from './pages/navigation/Navigation';
//
//export default Navigator;

export default class App extends React.Component {
	
	render() {
		return (
      <View style={styles.container}>
				<Navigation />
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