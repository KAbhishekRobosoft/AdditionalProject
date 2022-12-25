import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';

function IndividualImageDisplay({navigation, route}) {
  return (
    <View style={styles.individualView}>
      <ImageBackground
        style={styles.backImg}
        resizeMode="cover"
        source={{uri: route.params.image}}>
        <View style={styles.particularHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.iconHeader}>
              <Image
                style={styles.backImg1}
                source={require('../assets/images/back_icon.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.particularText}>{route.params.placeName}</Text>
          <View style={styles.shareFav}>
            <TouchableOpacity>
              <View style={styles.iconHeader}>
                <Image
                  style={styles.shareImg}
                  source={require('../assets/images/share_icon.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: '100%',
            height: 80,
            backgroundColor: 'rgba(20, 20, 20, 0.4)',
            position: 'absolute',
            bottom: 0,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 80,
            }}>
            <Image
              style={styles.profileImg}
              source={{uri: route.params.profileImg}}
            />
            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text
                style={{
                  fontFamily: 'Avenir Medium',
                  fontSize: 16,
                  color: 'white',
                }}>
                {route.params.senderName}
              </Text>
              <Text style={styles.dateText}>
                Added{' '}
                {moment(new Date(route.params.date.toString()))
                  .format('MMMM DD,YYYY')
                  .toString()}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
  },

  particularText: {
    fontFamily: 'Avenir Medium',
    fontSize: 22,
    color: 'white',
  },

  dateText: {
    fontSize: 16,
    fontFamily: 'Avenir Medium',
    color: 'white',
  },

  profileImg: {
    height: 40,
    width: 40,
    marginLeft: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },

  shareFav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  particularHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backImg1: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },

  individualView: {
    flex: 1,
  },
});

export default IndividualImageDisplay;
