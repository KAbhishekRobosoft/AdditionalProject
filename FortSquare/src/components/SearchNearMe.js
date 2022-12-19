import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

function SearchNearMe() {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <View style={styles.nearByPlaceList}>
          <Image
            style={styles.nearMe}
            source={require('../assets/images/location_icon.png')}
          />
          <Text style={styles.placeName}>Use my current location</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.nearByPlaceList}>
          <Image
            style={styles.nearMe}
            source={require('../assets/images/map_icon.png')}
          />
          <Text style={styles.placeName}>Select search area on map</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nearByPlaceList: {
    height: 70,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
  },

  placeName: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    marginLeft: 35,
    color: 'black',
  },

  nearMe: {
    height: 30,
    width: 30,
    marginLeft: 30,
  },
});

export default SearchNearMe;
