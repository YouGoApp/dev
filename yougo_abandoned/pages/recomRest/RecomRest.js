import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRest } from '.././redux/action';

import Description from '.././description/Description';
import Items from '.././items/Items';

class RecomRest extends React.Component {
  
  handleDescription=()=>{
    this.props.navigation.navigate('Description');
	}
  
	render() {
		
    var allResults = this.props.restList.map((obj, index)=>{
      console.log(obj.price_level, obj.photo_reference);
      return (
        <Items obj={obj} />
      )
    })
    
		return (
      <View>
        {allResults}
      </View>
    );
  }
}

function grabVar(state){
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest,
    restList: state.Page.result
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