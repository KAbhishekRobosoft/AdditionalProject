import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function NearBySearch({item}) {
  return (
    <TouchableOpacity>
      <View style={styles.nearByPlaceList}>
        <Image
          style={styles.placeImg}
          source={require('../assets/images/hotel.jpeg')}
        />
        <Text style={styles.placeName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nearByPlaceList: {
    height: 86,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
    alignItems: 'center',
  },

  placeImg: {
    height: 60,
    width: 60,
    marginLeft: 20,
  },

  placeName: {
    fontFamily: 'Avenir Book',
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
  },
});

export default NearBySearch;
