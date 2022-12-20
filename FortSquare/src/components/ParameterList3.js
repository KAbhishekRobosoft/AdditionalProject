import React,{useEffect,useState} from 'react';
import {View, StyleSheet,PermissionsAndroid,ActivityIndicator} from 'react-native';
import ListDisplay from './HotelListDisplay';
import VirtualList from './VirtualList';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch,useSelector } from 'react-redux';
import { getParameter } from '../services/Places';
import Toast from 'react-native-simple-toast'

function ParameterList3({navigation}) {
  const dispatch= useDispatch()
  const [placeData, setPlaceData] = useState([]);
  const coord = useSelector(state => state.auth.setCoord);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const resp = await getParameter('getRestaurants', coord);
        setPlaceData(resp);
      } catch (er) {
        Toast.show('Network error');
      }
    }, 500);
  }, []);

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

export default ParameterList3;
