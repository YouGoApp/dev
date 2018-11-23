import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRest } from '.././redux/action';

class Items extends React.Component {
  
	render() {
    return (
      <View>
        
          <View style={styles.container}>

            <View style={{flexDirection: 'row', paddingTop: 11}}>
              
              <View>
                <View style={{paddingBottom: 17}}>
                  <Text style={{fontWeight: 'bold'}}>{this.props.obj.name}</Text>
                </View>

                <View style={{paddingBottom: 17}}>
                  <Text>Ratings: {this.props.obj.rating}</Text>
                </View>

                <View style={{paddingBottom: 17}}>
                  <Text>Price Level: {this.props.obj.price_level}</Text>
                </View>
                
                <View>
                  <Text>Address: {this.props.obj.vicinity}</Text>
                </View>
              </View>

            </View>

          </View> 
        
      </View>
    )
  }
}

function grabVar(state){
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
    restList: state.Page.result
	}
}

export default connect(grabVar)(Items);

const styles = StyleSheet.create({
  container: {
		flex: 1,
    flexDirection: 'row',
		backgroundColor: '#ffffff',
		width: '100%',
		height: 150,
		paddingLeft: 15,
		borderWidth: 1,
    borderRadius: 10,
		borderColor: 'grey',
    margin: 0,
  },
	images: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 125,
		height: 125,
	},
});