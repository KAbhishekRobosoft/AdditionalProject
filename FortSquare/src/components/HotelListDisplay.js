import React from 'react';
import {StyleSheet, View, Image, Text, useWindowDimensions} from 'react-native';

function ListDisplay({item,height}) {
  const {height, width} = useWindowDimensions();
  const width1 =
    width > height
      ? Platform.OS === 'ios'
        ? '66%'
        : '66%'
      : Platform.OS === 'ios'
      ? '63%'
      : '63%';

  const margin =
    width > height
      ? Platform.OS === 'ios'
        ? 10
        : 10
      : Platform.OS === 'ios'
      ? 5
      : 5;
  return (
    <View style={[styles.listContainer, styles.shadowProp,{margin:margin}]}>
      <View style={styles.listDisplay}>
        <Image
          style={styles.listImg}
          source={require('../assets/images/hotel.jpeg')}
        />
        <View>
          <View style={[styles.textWithImage, {width: width1}]}>
            <Text style={styles.listName}>{item.name}</Text>
            <Image
              style={styles.favouriteImg}
              source={require('../assets/images/favourite_icon.png')}
            />
          </View>
          <View style={styles.ratingView}>
            <Text style={styles.listRating}>{item.rating}</Text>
          </View>
          <View style={styles.typeDist}>
            <Text style={styles.typeText}>{item.type}</Text>
            <Text style={styles.distText}>{item.distance}</Text>
          </View>
          <View style={styles.addressView}>
            <Text style={styles.addressText}>{item.address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: 125,
    width: '97.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 2,
  },

  listImg: {
    height: 123,
    width: 120,
  },

  addressText: {
    color: 'grey',
  },

  addressView: {
    marginLeft: 20,
  },

  favouriteImg: {
    height: 21,
    width: 21,
  },

  textWithImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  typeDist: {
    flexDirection: 'row',
    marginTop: 5,
  },

  ratingView: {
    backgroundColor: '#73cf42',
    width: '6%',
    height: '16%',
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },

  listDisplay: {
    flexDirection: 'row',
  },

  typeText: {
    color: 'grey',
    marginLeft: 20,
    fontFamily:"Avenir Book"
  },

  distText: {
    fontFamily:"Avenir Book",
    marginLeft: 10,
    color: 'grey',
  },

  listRating: {
    fontFamily: 'Avenir Book',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  listName: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: 'Avenir Book',
    color: 'black',
    marginTop: 5,
  },
});

export default ListDisplay;
