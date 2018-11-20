import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRestName, ChangeRestRating } from '.././redux/action';

import Description from '.././description/Description';

class RecomRest extends React.Component {

	render() {
		var allResults = this.props.result.map((obj, index)=>{
      console.log(obj.name, obj.rating);
      return (
        <View style={styles.container}>
        
          <View style={{flexDirection: 'row', paddingTop: 12}}>
            <Image
              style={styles.images}
              source={{uri:'https://goo.gl/QvGDjz'}}
              />
            
            <View style={{paddingLeft: 15}}>
              <View style={{paddingBottom: 17}}>
                <Text style={{fontWeight: 'bold'}}>{this.props.restNames}</Text>
              </View>
              
              <View style={{paddingBottom: 17}}>
                <Text>{this.props.restRatings}</Text>
              </View>
              
              <View style={{paddingBottom: 17}}>
                <Text>TEST</Text>
              </View>
            </View>
          </View>
          
        </View> 
        
      )
    })
    
		return (
      
      {allResults}
      
    );
  }
}

function grabVar(state){
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
    restNames: state.Page.restName,
    restRatings: state.Page.restRating
	}
}

export default connect(grabVar)(RecomRest);

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