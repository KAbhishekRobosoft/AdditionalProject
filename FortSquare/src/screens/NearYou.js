import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  PermissionsAndroid,
  ActivityIndicator,
  Text,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../utils/Functions';
import VirtualList from '../components/VirtualList';
import ListDisplay from '../components/HotelListDisplay';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {getNearPlace} from '../services/Places';
import {setLoader, desetLoader} from '../redux/AuthSlice';
import {setCoordinate} from '../redux/AuthSlice';

function NearYou({navigation}) {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [placeData, setPlaceData] = useState([]);
  const loading = useSelector(state => state.auth.stateLoader);
  const authData = useSelector(state => state.auth);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
          } else {
            Toast.show('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setTimeout(async () => {
          try {
            const resp = await getNearPlace({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setPlaceData(resp);
            mapRef.current.animateToRegion(
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.2,
              },
              3 * 1000,
            );
            dispatch(
              setCoordinate({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }),
            );
          } catch (error) {
            console.log(error);
            dispatch(desetLoader());
          }
        }, 500);

        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        Toast.show(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const {height, width} = useWindowDimensions();
  const height1 =
    width > height
      ? Platform.OS === 'ios'
        ? 135
        : 125
      : Platform.OS === 'ios'
      ? 200
      : 200;

  return (
    <View style={styles.main_container}>
      <View style={[styles.mapView, styles.shadowProp, {height: height1}]}>
        {currentLatitude !== 0 && currentLongitude !== 0 ? (
          <MapView
            ref={mapRef}
            style={styles.mapStyle}
            customMapStyle={mapStyle}>
            <Marker
              draggable
              coordinate={{
                latitude: currentLatitude,
                longitude: currentLongitude,
              }}
              onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
              title={'Test Marker'}
              description={'This is a description of the marker'}
            />
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="purple" />
        )}
      </View>
      <View style={styles.listContainer}>
        {placeData.length > 0 ? (
          <VirtualList
            data={placeData}
            renderItem={({item}) => {
              return <ListDisplay navigation={navigation} item={item} />;
            }}
            keyExtractor={item => item._id}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Getting Data</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  mapView: {
    borderBottomWidth: 1,
    borderBottomColor: '#adadad',
    justifyContent: 'center',
  },

  listContainer: {
    flex: 1,
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 2,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default NearYou;
