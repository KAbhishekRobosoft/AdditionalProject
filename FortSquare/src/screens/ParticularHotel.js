import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {LargeButton} from '../components/Button';
import {AirbnbRating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import {mapStyle} from '../utils/Functions';
import MapView, {Marker} from 'react-native-maps';
import {getParticularInfo} from '../services/Places';
import Toast from 'react-native-simple-toast';
import {searchAllFavourites} from '../services/Places';
import {useDispatch, useSelector} from 'react-redux';
import {getVerifiedKeys} from '../utils/Functions';
import {setToken} from '../redux/AuthSlice';
import {addFavourites} from '../services/Places';
import {setInitialState} from '../redux/AuthSlice';

function ParticularHotel({navigation, route}) {
  const [data, setData] = useState({});
  const [favourites, setFavourites] = useState([]);
  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.initialState);
  const loading = useSelector(state => state.auth.stateLoader);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await getParticularInfo(route.params.id);
        console.log(response)
        setData(response);
      } catch (er) {
        Toast.show('Network Error');
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (authData.userToken !== null) {
      setTimeout(async () => {
        try {
          const cred = await getVerifiedKeys(authData.userToken);
          dispatch(setToken(cred));
          const response = await searchAllFavourites(cred);
          setFavourites(response);
        } catch (er) {
          Toast.show('Network Error');
        }
      }, 500);
    }
  }, [state]);

  async function handleFavourite(id) {
    try {
      const cred = await getVerifiedKeys(authData.userToken);
      dispatch(setToken(cred));
      const resp = await addFavourites(id, cred);
      if (resp !== undefined) {
        dispatch(setInitialState(state));
      }
    } catch (er) {
      Toast.show('Network Error');
    }
  }

  return (
    <SafeAreaView style={styles.particularContainer}>
      {(JSON.stringify(data) !== '{}') ? (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <ImageBackground
            source={{uri: 'https' + data.placeImage.substring(4)}}
            style={styles.particularBack}>
            <View style={styles.particularHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <View style={styles.iconHeader}>
                  <Image
                    style={styles.backImg}
                    source={require('../assets/images/back_icon.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.particularText}>{data.placeName.trim()}</Text>
              <View style={styles.shareFav}>
                <TouchableOpacity>
                  <View style={styles.iconHeader}>
                    <Image
                      style={styles.shareImg}
                      source={require('../assets/images/share_icon.png')}
                    />
                  </View>
                </TouchableOpacity>

                {authData.userToken !== null ? (
                  favourites.length > 0 ? (
                    favourites.filter(ele => ele.placeId === route.params.id)
                      .length > 0 ? (
                      !loading ? (
                        <TouchableOpacity
                          onPress={() => {
                            handleFavourite(route.params.id);
                          }}>
                          <View style={styles.iconHeader} key={route.params.id}>
                            <Image
                              style={styles.favouriteImg}
                              source={require('../assets/images/favourite_icon_selected.png')}
                            />
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.iconHeader}>
                          <ActivityIndicator color="yellow" />
                        </View>
                      )
                    ) : !loading ? (
                      <TouchableOpacity
                        onPress={() => {
                          handleFavourite(route.params.id);
                        }}>
                        <View style={styles.iconHeader} key={route.params.id}>
                          <Image
                            style={styles.favouriteImg}
                            source={require('../assets/images/favouriteEmpty.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.iconHeader}>
                        <ActivityIndicator color="yellow" />
                      </View>
                    )
                  ) : !loading ? (
                    <TouchableOpacity
                      onPress={() => {
                        handleFavourite(route.params.id);
                      }}>
                      <View style={styles.iconHeader}>
                        <Image
                          style={styles.favouriteImg}
                          source={require('../assets/images/favouriteEmpty.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.iconHeader}>
                      <ActivityIndicator color="yellow" />
                    </View>
                  )
                ) : (
                  <View>
                    <Image
                      style={styles.favouriteImg}
                      source={require('../assets/images/favouriteEmpty.png')}
                    />
                  </View>
                )}
              </View>
            </View>
            <View style={styles.textRating}>
              <Text style={styles.hotelName}>{data.category}</Text>
              <AirbnbRating
                size={15}
                showRating={false}
                defaultRating={data.rating}
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
            <Text style={styles.textPara}>{data.overview}</Text>
          </View>
          <View style={{height: 130}}>
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: data.location.coordinates[1],
                longitude: data.location.coordinates[0],
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              customMapStyle={mapStyle}>
              <Marker
                coordinate={{
                  latitude: data.location.coordinates[1],
                  longitude: data.location.coordinates[0],
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}
                title={'Test Marker'}
                description={'This is a description of the marker'}
              />
            </MapView>
            <LinearGradient
              style={{flex: 1}}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              locations={[0.1, 0.7]}
              colors={['rgba(249,245,238,1)', 'rgba(249,245,238,0)']}>
              <View style={styles.mapAddress}>
                <Text style={styles.addressText}>
                  {data.address}, {data.city}
                </Text>
                <Text style={styles.phoneText}>{data.placePhone}</Text>
                <Text style={styles.driveText}>{route.params.distance} m</Text>
              </View>
            </LinearGradient>
          </View>
          <View>
            <LargeButton
              title="Add Review"
              backgroundColor="#351347"
              width="100%"
              borderRadius="0"
              fontFamily="Avenir Medium"
            />
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      )}
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
