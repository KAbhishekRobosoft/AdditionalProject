import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../utils/Functions';
import VirtualList from '../components/VirtualList';
import ListDisplay from '../components/HotelListDisplay';
import Geolocation from '@react-native-community/geolocation';
import {setLoader, desetLoader} from '../redux/AuthSlice';
import {useDispatch} from 'react-redux';

function NearYou({navigation}) {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const [currentLongitude, setCurrentLongitude] = useState(13.4567);
  const [currentLatitude, setCurrentLatitude] = useState(74.3456);
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
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
              setLocationStatus('Permission Denied');
            }
          } catch (err) {
            console.warn(err);
          }
        }
      };
      requestLocationPermission();
    }, 1000);
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        setTimeout(()=>{
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
        mapRef.current.animateToRegion(
          {
            latitude: 13.456,
            longitude: 76.4567,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          3 * 1000,
        );
      },500)
      },
      error => {
        setLocationStatus(error.message);
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

  const DATA = [
    {
      id: 1,
      name: 'Attil',
      address: 'karkala 2nd cross',
      rating: '8.5',
      type: 'indian .....',
      distance: '6.5 km',
    },
    {
      id: 2,
      name: 'Attil',
      address: 'karkala 2nd cross',
      rating: '8.5',
      type: 'indian .....',
      distance: '6.5 km',
    },
    {
      id: 3,
      name: 'Attil',
      address: 'karkala 2nd cross',
      rating: '8.5',
      type: 'indian .....',
      distance: '6.5 km',
    },
    {
      id: 4,
      name: 'Attil',
      address: 'karkala 2nd cross',
      rating: '8.5',
      type: 'indian .....',
      distance: '6.5 km',
    },
    {
      id: 5,
      name: 'Attil',
      address: 'karkala 2nd cross',
      rating: '8.5',
      type: 'indian .....',
      distance: '6.5 km',
    },
  ];

  const renderItem = ({item}) => {
    return <ListDisplay navigation={navigation} item={item} />;
  };

  return (
    <View style={styles.main_container}>
      <View style={[styles.mapView, styles.shadowProp, {height: height1}]}>
        {currentLatitude !== 0 ? (
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
          <ActivityIndicator color="orange" size="large" />
        )}
      </View>
      <View style={styles.listContainer}>
        <VirtualList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
