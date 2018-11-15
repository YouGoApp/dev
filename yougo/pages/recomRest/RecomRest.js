import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Description from '.././description/Description';

class RecomRest extends React.Component {
 			
	render() {
			
		return (
			<View style={styles.container}>
        <View style={{flexDirection: 'row', paddingTop: 12}}>
					<Image
						style={styles.images}
						source={{uri:'https://goo.gl/QvGDjz'}}
						/>
					
					<View style={{paddingLeft: 15}}>
						<View style={{paddingBottom: 17}}>
							<Text style={{fontWeight: 'bold'}}>Restaurant Name</Text>
						</View>

						<View style={{paddingBottom: 17}}>
							<Text>$$$$</Text>
						</View>

						<View style={{paddingBottom: 17}}>
							<Text>4.0/5.0</Text>
						</View>

						<View>
							<Text>5 km</Text>
						</View>
					</View>
				</View>
      </View>
    );
  }
}

function grabVar(state){
	return {
		mainPage: state.Page.page,
		mainList: state.Page.listRest
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