import React,{useEffect,useState} from 'react';
import {View, StyleSheet,PermissionsAndroid,ActivityIndicator} from 'react-native';
import ListDisplay from './HotelListDisplay';
import VirtualList from './VirtualList';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch,useSelector } from 'react-redux';
import { getParameter } from '../services/Places';
import Toast from 'react-native-simple-toast'

function ParameterList2({navigation}) {
  const dispatch = useDispatch();
  const [placeData, setPlaceData] = useState([]);
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
            const resp = await getParameter('getPopularPlace',{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setPlaceData(resp);
          } catch (error) {
            console.log(error);
            dispatch(desetLoader());
          }
        }, 500);
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


  const renderItem = ({item}) => {
    return <ListDisplay navigation={navigation} item={item} />;
  };

  return (
    placeData.length > 0 ?  <View style={styles.parameterContainer}>
    <VirtualList data={placeData} renderItem={renderItem} />
  </View> : (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator size="large" color="purple"/>
    </View>
  )
  );
}

const styles = StyleSheet.create({
  parameterContainer: {
    flex: 1,
    marginVertical: 5,
  },
});

export default ParameterList2;
