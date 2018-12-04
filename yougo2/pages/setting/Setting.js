import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableOpacity, Image, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeList, ChangeRest,SetSortIndex } from '.././redux/action';

class Setting extends React.Component {

	state = {
		sorting: [
			false, false, false
		],
		isDisabled: false
	}

	sortBy = (arr, attr, isDecrease) => {
		const smaller = isDecrease ? 1 : -1;
		const greater = isDecrease ? -1 : 1;

		arr.sort((a, b) => {
			var x = a[attr] || 0;
			var y = b[attr] || 0;
			if (x < y) {return smaller;}
			if (x > y) {return greater;}
			return 0;
	});

		this.props.dispatch(ChangeRest(arr));
	}

	handleSort = (i) => {
		const sortIndex = i;
		var attr = i === 1 ? 'price_level' : (i === 2 ? 'rating' : null);
		const isDecrease = i === 2;
		var t = 0;

		var arr = this.state.sorting;
		arr[i] = !arr[i];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == 1) {
				t++;
			}
		}

		for (var i = 0; i < arr.length; i++) {
			if (t >= 1) {
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
			sorting: arr
		});

		if (this.props.restList && this.props.restList.length && attr) {
			var clonedArr = this.props.restList.slice();
			this.sortBy(clonedArr, attr, isDecrease);
			this.props.dispatch(SetSortIndex(sortIndex));
		}
	}

	render() {
		return (

			<View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'row' }}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 0)}
							disabled={this.state.isDisabled && !this.state.sorting[0]}
							value={this.state.sorting[0]}
						/>
						<Text style={{ marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16 }}>Distance</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 1)}
							disabled={this.state.isDisabled && !this.state.sorting[1]}
							value={this.state.sorting[1]}
						/>
						<Text style={{ marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16 }}>Price</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<CheckBox
							onValueChange={this.handleSort.bind(this, 2)}
							disabled={this.state.isDisabled && !this.state.sorting[2]}
							value={this.state.sorting[2]}
						/>
						<Text style={{ marginTop: 4, color: 'white', fontWeight: 'bold', fontSize: 16 }}>Rating</Text>
					</View>
				</View>

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

export default connect(grabVar)(Setting);
