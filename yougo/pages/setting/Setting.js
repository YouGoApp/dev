import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, Image } from 'react-native';

import Recommendation from '.././recommendation/Recommendation';

export default class Setting extends React.Component {
  
	state = {
		sorting: [
			true, false, false
		],
		isDisabled: false,
		setting: false
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
	
	handleBack=()=>{
		this.props.navigation.navigate('Recommendation')
	}
	
	handleProfile=()=>{
		this.props.navigation.navigate('')
	}
	
	handleSetting=()=>{
		
		var s = this.state.setting 
		
		for (var i=0; i<s.length; i++) {
			if(s === false){
					this.props.navigation.navigate('Setting')
			} else {
					this.props.navigation.navigate('Recommendation')
			}
		}
	}
	
	render() {
    return (
      <View style={styles.container}>
				
        <View style={styles.header}>
					<View>
						<TouchableOpacity onPress={this.handleBack}>
							<Image
								source={require('../.././assets/icon/left_arrow.png')}
								style={{width: 25, height: 25}}
								/>
						</TouchableOpacity>
					</View>
					
					<View style={{flex: 1, paddingLeft: 155}}>
						<TouchableOpacity onPress={this.handleProfile}>
							<Image
								source={require('../.././assets/icon/user.png')}
								style={{width: 25, height: 25}}
								/>
						</TouchableOpacity>
					</View>
					
					<View style={{flex: 1, paddingLeft: 130}}>
						<TouchableOpacity onPress={this.handleSetting}>
							<Image
								source={require('../.././assets/icon/setting.png')}
								style={{width: 25, height: 25}}
								/>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={styles.body}>
					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 0)}
							disabled={this.state.isDisabled && !this.state.sorting[0]}
							value={this.state.sorting[0]}
							/>
						<Text style={{marginTop: 6}}>Distance</Text>
					</View>

					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 1)}
							disabled={this.state.isDisabled && !this.state.sorting[1]}
							value={this.state.sorting[1]}
							/>
						<Text style={{marginTop: 6}}>Price</Text>
					</View>

					<View style={{flexDirection: 'row'}}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 2)}
							disabled={this.state.isDisabled && !this.state.sorting[2]} 
							value={this.state.sorting[2]}
							/>
						<Text style={{marginTop: 6}}>Rating</Text>
					</View>
				</View>
				
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
	body: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		flexDirection:'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '10%',
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 38,
	},
});