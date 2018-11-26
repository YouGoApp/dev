import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRest } from '.././redux/action';

class Items extends React.Component {
  
	render() {
    return (
      <View>
        
          <View style={styles.container}>

            <View style={{flexDirection: 'row', paddingTop: 10}}>
              
              <View style={{width: '95%'}}>
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
              
              <View style={{flex: 1, width: '5%', justifyContent: "center", alignItems: "center"}}>
                <Image
                  source={require('../.././assets/icon/right_arrow_black.png')}
                  style={{width: 20}}
                  />
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
		backgroundColor: '#FFFFFF',
		width: '97%',
		height: 150,
		paddingLeft: 15,
		borderWidth: 0.75,
    borderRadius: 5,
		borderColor: '#45d8d5',
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    margin: 5,
  },
	images: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 125,
		height: 125,
	},
});