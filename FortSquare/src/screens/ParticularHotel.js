import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {LargeButton} from '../components/Button';
import {AirbnbRating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import {mapStyle} from '../utils/Functions';
import MapView, {Marker} from 'react-native-maps';

function ParticularHotel({navigation}) {
  return (
    <SafeAreaView style={styles.particularContainer}>
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <ImageBackground
        source={require('../assets/images/hotel.jpeg')}
        style={styles.particularBack}>
        <View style={styles.particularHeader}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
            <View style={styles.iconHeader}>
              <Image
                style={styles.backImg}
                source={require('../assets/images/back_icon.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.particularText}>Attil</Text>
          <View style={styles.shareFav}>
            <TouchableOpacity>
              <View style={styles.iconHeader}>
                <Image
                  style={styles.shareImg}
                  source={require('../assets/images/share_icon.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconHeader}>
                <Image
                  style={styles.favouriteImg}
                  source={require('../assets/images/favouriteEmpty.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textRating}>
          <Text style={styles.hotelName}>
            Indian Restaurant,Chinese Restaurant,
          </Text>
          <AirbnbRating
            size={15}
            showRating={false}
            defaultRating={3}
            isDisabled={true}
          />
        </View>
      </ImageBackground>
      <View style={styles.userPreference}>
        <View style={{marginLeft: 38}}>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.ratingImg}
                source={require('../assets/images/rating_icon.png')}
              />
              <Text style={styles.ratingText}>Rating</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.ratingImg}
                source={require('../assets/images/photos_icon.png')}
              />
              <Text style={styles.ratingText}>Photos</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: 38}}>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.ratingImg}
                source={require('../assets/images/review_icon.png')}
              />
              <Text style={styles.ratingText}>Review</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.overviewText}>
        <Text style={styles.textHead}>Overview</Text>
        <Text style={styles.textPara}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a
        </Text>
      </View>
      <View style={{height: 130}}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
          <LinearGradient
            style={{flex: 1}}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            locations={[0.2, 1]}
            colors={['rgba(245,245,245,1)', 'rgba(0,0,0,0)']}>
          </LinearGradient>
        </MapView>
      </View>
      <View>
        <LargeButton title="Add Review" backgroundColor="#351347" width="100%" borderRadius="0" fontFamily="Avenir Medium"/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  particularContainer: {
    flex: 1,
  },

  textHead: {
    fontSize: 20,
    fontFamily: 'Avenir Book',
    color: '#351347',
  },

  phoneText: {
    marginTop: 15,
    marginLeft: 20,
    color: 'grey',
  },

  textPara: {
    marginTop: 10,
    textAlign: 'justify',
    lineHeight: 20,
    color: '#8D8D8D',
  },

  mapAddress: {
    width: '50%',
    height: 120,
  },

  overviewText: {
    margin: 20,
  },

  addressText: {
    marginTop: 10,
    marginLeft: 20,
    color: 'grey',
    fontSize: 14,
  },

  particularText: {
    fontFamily: 'Avenir Medium',
    fontSize: 22,
    color: '#b4b4b4',
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  userPreference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },

  driveText: {
    marginLeft: 20,
    marginTop: 10,
    color: 'grey',
  },

  textRating: {
    alignItems: 'center',
    marginTop: 200,
  },

  shareFav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
    marginRight: 40,
  },

  ratingText: {
    color: '#8D8D8D',
    textAlign: 'center',
  },

  ratingImg: {
    height: 40,
    width: 40,
  },

  favouriteImg: {
    height: 20,
    width: 22,
  },

  hotelName: {
    fontFamily: 'Avenir Book',
    color: 'white',
    lineHeight: 21,
    fontSize: 18,
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

  shareImg: {
    height: 20,
    width: 20,
  },

  particularBack: {
    height: 320,
  },

  backImg: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
});
export default ParticularHotel;
