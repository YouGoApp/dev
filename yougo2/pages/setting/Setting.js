import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

class Setting extends React.Component {
  
	state = {
		sorting: [
			true, false, false
		],
		isDisabled: false
	}
	
	handleSort=(i)=>{
		var t = 0;
		
		var arr = this.state.sorting;
		arr[i] = !arr[i];
		
		for (var i=0; i<arr.length; i++) {
			if(arr[i] == 1){
				t++;	
			}
		}
		
		for (var i=0; i<arr.length; i++) {
			if(t >= 1){
				this.setState({
					isDisabled: true
				})
			} else {
				this.setState({
					isDisabled: false
				})
			}
		}
		
		this.setState({
			sorting:arr
		})
	}
	
	render() {
    return (
      
			<View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
			  <View style={{flexDirection: 'row'}}>
					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 0)}
							disabled={this.state.isDisabled && !this.state.sorting[0]}
							value={this.state.sorting[0]}
							/>
						<Text style={{marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16}}>Distance</Text>
					</View>

					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 1)}
							disabled={this.state.isDisabled && !this.state.sorting[1]}
							value={this.state.sorting[1]}
							/>
						<Text style={{marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16}}>Price</Text>
					</View>

					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 2)}
							disabled={this.state.isDisabled && !this.state.sorting[2]} 
							value={this.state.sorting[2]}
							/>
						<Text style={{marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16}}>Rating</Text>
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

export default connect(grabVar)(Setting);
