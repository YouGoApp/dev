import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import { connect } from 'react-redux';
import { ChangePage } from '.././redux/action';

export default class Home extends React.Component {
  
	handlePage=(page)=>{
		this.props.dispatch(ChangePage(page));
	}
	
	render() {
    
		var curpage = <Preference />
				
		switch (this.props.page){
			case 1:
				curpage = <Preference />
				break;
			
			case 2:
				curpage: <Activity />
				break;
		}
		
		return (
      <View style={styles.container}>
        
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