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


  state={
    photoRef: ""
  }
  
  
  componentDidMount=async()=>{
    console.log(this.props.obj.photos[0].photo_reference);
    
    var resp = await fetch("http://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.props.obj.photos[0].photo_reference+"&key=AIzaSyADB35yIzQPJnk692vgv-_Iq5ORZgsWr9k");
    console.log(resp.status)
//    var json = await resp.text();
//    console.log(json);
  }
  

<Image
  style={styles.images}
  source={{uri: this.state.photoRef}}
  />