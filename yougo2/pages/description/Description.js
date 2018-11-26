import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { connect } from 'react-redux';
import { ChangePage, ChangeList } from '.././redux/action';

import Recommendation from '.././recommendation/Recommendation';
import Profile from '.././profile/Profile';

class Description extends React.Component {
	
	handleBack=()=>{
		this.props.navigation.navigate('Recommendation')
	}
	
	handleMap=()=>{
		Linking.openURL('https://maps.google.com')
	}
	
	render() {

		return (
      <View style={styles.container}>
				<View style={styles.header}>
					<View style={{paddingTop: 42, paddingRight: 345}}>
            <TouchableOpacity onPress={this.handleBack}>
              <Image
                source={require('../.././assets/icon/left_arrow.png')}
                style={{width: 25, height: 25}}
                />
            </TouchableOpacity>
          </View>
				</View>
				
				<View style={styles.body}>
					<View style={styles.imgSlider}>
						<ImageSlider
							images={
								[
									'http://d3pah2c10lnl36.cloudfront.net/images/menu_detail_lunch_01_.jpg',
									'http://d3pah2c10lnl36.cloudfront.net/images/menu_detail_bbq_01.jpg'
								]
							}
							/>
					</View>
					<ScrollView>
						<Text style={styles.prefTitle}>Restaurant Name Here</Text>
						<Text style={styles.subTitle}>Street Name Here</Text>
						<Text style={styles.subTitle}>Phone Number Here</Text>
						<Text style={styles.subTitle}>Email Here</Text>
						<Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec accumsan purus, quis condimentum erat. Quisque sed metus libero. Sed gravida mauris id arcu hendrerit rhoncus. Proin pellentesque ex nec ultricies gravida. Sed vel erat in velit dictum aliquet. Suspendisse varius justo ac consectetur ultrices. Duis mollis in neque eu aliquam. In maximus mi vitae odio condimentum, in venenatis dui malesuada. Aenean nunc neque, varius et odio vitae, ullamcorper placerat neque. Etiam malesuada accumsan orci, ut tristique nulla volutpat nec.</Text>
					</ScrollView>
				</View>
				
				<View style={styles.footer}>
					<View>
						<TouchableOpacity onPress={this.handleMap}>
							<Text style={styles.CTA}>Get Directions</Text>
						</TouchableOpacity>
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

export default connect(grabVar)(Description);

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
		height: '88%',
	},
	imgSlider: {
		width: '100%',
		height: 300,
	},
	prefTitle: {
		color: '#1a2e35',
		fontWeight: '500',
		fontSize: 28,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingTop: 10,
	},
	subTitle:{
		color: '#1a2e35',
		fontSize: 18,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingTop: 10,
	},
	CTA: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 25,
		paddingLeft: 125,
		paddingTop: 15,
	},
	header: {
    flexDirection: 'row',
    backgroundColor: "#1a2e35",
		width: '100%',
		height: '12%',
		justifyContent: "center",
    position: 'relative',
    top: 0,
	},
	footer: {
		flexDirection:'row',
		backgroundColor: "#1a2e35",
		width: '100%',
		height: '8%',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
});