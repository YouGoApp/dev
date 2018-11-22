import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker, Dimensions, Image, CheckBox, ScrollView } from 'react-native';

import Recommendation from '.././recommendation/Recommendation';
import Preference from '.././preference/Preference';

import { connect } from 'react-redux';
import { ChangePeople, ChangeList, ChangeRest } from '.././redux/action';

class Activity extends React.Component {
	
	state = {
		checked: [
			false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false 
		],
		isDisabled: false,
    cuisine: [
      "chinese", "canadian", "african", "american", "belgian"
    ],
    result: []
	}
	
	handleChecked=(i)=>{
		var t = 0;
		
		var arr = this.state.checked;
		arr[i] = !arr[i];
		
		for (var i=0; i<arr.length; i++) {
			if(arr[i] == 1){
				t++;	
			}
		}
		
		for (var i=0; i<arr.length; i++) {
			if(t >= 10){
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
			checked:arr
		})
		
		this.props.dispatch(ChangeList(i));
		
	}
		
	handleContinue=async()=>{
		
    var cuis = [];
    for (var i=0; i<this.state.checked.length; i++){
      if(this.state.checked[i] === true){
        cuis.push(
          this.state.cuisine[i]
        )
      }
    }
    
    var resp = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=&keyword="+cuis.join(",")+"&type=restaurant&location=49.2499076,-122.9991312&radius=5000");
    var json = await resp.json();
    console.log(json.results);
    this.props.dispatch(ChangeRest(json.results));
    this.props.navigation.navigate('Recommendation');
	}
  
	handleBack=()=>{
		this.props.navigation.navigate('Preference')
	}
	
	render() {
		
		return (
			
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={this.handleBack}>
						<Image
							source={require('../.././assets/icon/left_arrow.png')}
							style={{width: 25, height: 25}}
							/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.body}>
					<Text style={styles.prefTitle}>Select the cuisines that you prefer</Text>
				
					<Text style={styles.prefSubTit}>Select up to 10 cuisines</Text>
					
					<ScrollView contentContainerStyle={styles.contentContainer}>
						<View>
							
							<View style={{flexDirection: 'row'}} value={this.state.cuisine[0]}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 0)}
									disabled={this.state.isDisabled && !this.state.checked[0]}
									value={this.state.checked[0]}
									/>
								<Text style={{marginTop: 6}}>Aboriginal</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 1)}
									disabled={this.state.isDisabled && !this.state.checked[1]}
									value={this.state.checked[1]}
									/>
								<Text style={{marginTop: 6}} value={this.state.cuisine[1]}>Afghan/Middle Eastern</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 2)}
									disabled={this.state.isDisabled && !this.state.checked[2]} 
									value={this.state.checked[2]}
									/>
								<Text style={{marginTop: 6}} value={this.state.cuisine[2]}>African</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 3)}
									disabled={this.state.isDisabled && !this.state.checked[3]}
									value={this.state.checked[3]}
									/>
								<Text style={{marginTop: 6}} value={this.state.cuisine[3]}>American</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 4)}
									disabled={this.state.isDisabled && !this.state.checked[4]}
									value={this.state.checked[4]}
									/>
								<Text style={{marginTop: 6}}>Belgian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 5)}
									disabled={this.state.isDisabled && !this.state.checked[5]}
									value={this.state.checked[5]}
									/>
								<Text style={{marginTop: 6}}>Canadian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 6)}
									disabled={this.state.isDisabled && !this.state.checked[6]}
									value={this.state.checked[6]}
									/>
								<Text style={{marginTop: 6}}>Caribbean</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 7)}
									disabled={this.state.isDisabled && !this.state.checked[7]}
									value={this.state.checked[7]}
									/>
								<Text style={{marginTop: 6}} value={this.state.cuisine[8]}>Chinese</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 8)}
									disabled={this.state.isDisabled && !this.state.checked[8]}
									value={this.state.checked[8]}
									/>
								<Text style={{marginTop: 6}}>European</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 9)}
									disabled={this.state.isDisabled && !this.state.checked[9]}
									value={this.state.checked[9]}
									/>
								<Text style={{marginTop: 6}}>Filipino</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 10)}
									disabled={this.state.isDisabled && !this.state.checked[10]}
									value={this.state.checked[10]}
									/>
								<Text style={{marginTop: 6}}>French</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 11)}
									disabled={this.state.isDisabled && !this.state.checked[11]}
									value={this.state.checked[11]}
									/>
								<Text style={{marginTop: 6}}>German</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 12)}
									disabled={this.state.isDisabled && !this.state.checked[12]}
									value={this.state.checked[12]}
									/>
								<Text style={{marginTop: 6}}>Greek</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 13)}
									disabled={this.state.isDisabled && !this.state.checked[13]}
									value={this.state.checked[13]}
									/>
								<Text style={{marginTop: 6}}>Indian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 14)}
									disabled={this.state.isDisabled && !this.state.checked[14]}
									value={this.state.checked[14]}
									/>
								<Text style={{marginTop: 6}}>International</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 15)}
									disabled={this.state.isDisabled && !this.state.checked[15]}
									value={this.state.checked[15]}
									/>
								<Text style={{marginTop: 6}}>Italian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 16)}
									disabled={this.state.isDisabled && !this.state.checked[16]}
									value={this.state.checked[16]}
									/>
								<Text style={{marginTop: 6}}>Japanese</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 17)}
									disabled={this.state.isDisabled && !this.state.checked[17]}
									value={this.state.checked[17]}
									/>
								<Text style={{marginTop: 6}}>Malaysian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 18)}
									disabled={this.state.isDisabled && !this.state.checked[18]}
									value={this.state.checked[18]}
									/>
								<Text style={{marginTop: 6}}>Mediterranean</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 19)}
									disabled={this.state.isDisabled && !this.state.checked[19]}
									value={this.state.checked[19]}
									/>
								<Text style={{marginTop: 6}}>Mexican &amp; Latin American</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 20)}
									disabled={this.state.isDisabled && !this.state.checked[20]}
									value={this.state.checked[20]}
									/>
								<Text style={{marginTop: 6}}>Moroccan/Lebanese</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 21)}
									disabled={this.state.isDisabled && !this.state.checked[21]}
									value={this.state.checked[21]}
									/>
								<Text style={{marginTop: 6}}>South-East Asian</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 22)}
									disabled={this.state.isDisabled && !this.state.checked[22]}
									value={this.state.checked[22]}
									/>
								<Text style={{marginTop: 6}}>Thai</Text>
							</View>
							
							<View style={{flexDirection: 'row'}}>
								<CheckBox
									onValueChange={this.handleChecked.bind(this, 23)}
									disabled={this.state.isDisabled && !this.state.checked[23]}
									value={this.state.checked[23]}
									/>
								<Text style={{marginTop: 6}}>Vietnamese</Text>
							</View>			
							
						</View>
					</ScrollView>
					
					<TouchableOpacity style={styles.button} onPress={this.handleContinue}>
						<Text style={{alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold"}}>
							CONTINUE
						</Text>
					</TouchableOpacity>
					
				</View>
					
      </View>
    );
  }
}

function grabVar(state){
	return {
		numPeople: state.Page.numPeople
	}
}

export default connect(grabVar)(Activity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
  },
	body: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 25,
	},
	button: {
		width: 250,
		height: 50,
		backgroundColor: "#1a2e35", 
		marginTop: 20,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		backgroundColor: 'black',
		marginBottom: 20,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 23,
		marginBottom: 20,
	},
	prefSubTit: {
		color: '#1a2e35',
		fontSize: 20,
		marginBottom: 20,
	},
	contentContainer: {
		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 20,
	},
	header: {
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '10%',
		justifyContent: "center",
		position: "relative",
		top: 0,
		paddingLeft: 15,
		paddingTop: 23,
	}
});