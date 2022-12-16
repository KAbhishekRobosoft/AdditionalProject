import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

function ReviewScreen() {
  return (
    <SafeAreaView style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <TouchableOpacity>
          <View style={styles.iconHeader}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/back_icon.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.reviewHotelText}>Attil</Text>
        <TouchableOpacity>
          <View style={styles.iconHeader}>
            <Image
              style={styles.review}
              source={require('../assets/images/review.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={}>

      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
  },

  reviewHotelText:{
    fontFamily:"Avenir Book",
    color:"white",
    fontSize:20
  },

  reviewHeader: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#370F24',
  },

  review: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginRight:10
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    height: 20,
    width: 20,
  },
});

export default ReviewScreen;
