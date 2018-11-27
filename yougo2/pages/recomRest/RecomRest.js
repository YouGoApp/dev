import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRest } from '.././redux/action';

import Description from '.././description/Description';
import Items from '.././items/Items';

class RecomRest extends React.Component {
  render() {
    var allResults = this.props.restList.map((obj, index) => {
      console.log(obj.price_level, obj.photo_reference);
      return (
        <TouchableOpacity onPress={() => this.props.handleDescription(obj, index)} key={index}>
          <Items obj={obj} />
        </TouchableOpacity>

      )
    })

    return (
      <View>
        {allResults}
      </View>
    );
  }
}

function grabVar(state) {
  return {
    mainPage: state.Page.page,
    mainList: state.Page.listRest,
    restList: state.Page.result
  }
}

export default connect(grabVar)(RecomRest);
