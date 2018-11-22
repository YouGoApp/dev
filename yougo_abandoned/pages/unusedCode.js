import { Picker, } from 'react-native';

<View style={styles.pickerActivity}>
	<Picker style={{ color: "white", transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }]}} selectedValue={this.state.Activity} onValueChange={this.updateActivity}>
		<Picker.Item label="Select Activity" value="activitySelect" />
		<Picker.Item label="Eat & Drink" value="Activity1" />
		<Picker.Item label="Concert" value="Activity2" />
		<Picker.Item label="Nightlife" value="Activity3" />
		<Picker.Item label="Outdoor Activities" value="Activity4" />
		<Picker.Item label="Activity 5" value="Activity5" />
	</Picker>
</View>