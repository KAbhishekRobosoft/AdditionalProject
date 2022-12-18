import React from 'react';
import {View, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';

function ReviewList({item}) {
  return (
    <TouchableOpacity>
      <View style={styles.reviewListCon}>
        <View style={styles.imgWithDetails}>
          <Image
            style={styles.profileImg}
            source={require('../assets/images/profillephotp.png')}
          />
          <View style={styles.reviewInfo}>
            <Text style={styles.reviewName}>{item.name}</Text>
            <Text style={styles.reviewDet}>{item.review}</Text>
          </View>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  reviewListCon: {
    height: 110,
    marginVertical:5,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },

  dateText: {
    marginTop: 18,
    marginRight: 20,
  },

  reviewName: {
    fontFamily: 'Avenir Book',
    color: 'black',
    fontSize: 18,
  },

  reviewDet: {
    lineHeight: 20,
    marginTop: 5,
    fontFamily: 'Avenir Book',
    fontSize: 16,
    color: '#7C7C7F',
  },

  reviewInfo: {
    width: '50%',
    height: 80,
    marginTop: 15,
    marginLeft: 15,
  },

  profileImg: {
    height: 40,
    width: 40,
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 20,
  },

  imgWithDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReviewList;
