import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Activity extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hope It's working</Text>
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