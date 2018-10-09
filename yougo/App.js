import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Event from './pages/event/Event';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Map from './pages/map/Map';
import Preference from './pages/preference/Preference';
import Setting from './pages/setting/Setting';
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
				<Preference />
				<Home />
				<Map />
				<Event />
				<Setting />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});