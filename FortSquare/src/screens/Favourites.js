import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextInputComponent from '../components/TextInputComponent';
import VirtualList from '../components/VirtualList';
import { searchAllFavourites } from '../services/Places';
import { getVerifiedKeys } from '../utils/Functions';
import { setToken } from '../redux/AuthSlice';
import ListDisplay from '../components/HotelListDisplay';
import FavouriteList from '../components/FavouriteList';

function Favourites({navigation}) {
  const authData= useSelector(state=>state.auth)
  const dispatch= useDispatch()
  const [favourite,setFavourite]= useState([])

  useEffect(()=>{
    setTimeout(async ()=>{
      const cred= await getVerifiedKeys(authData.userToken)
      dispatch(setToken(cred))
      const resp= await searchAllFavourites(cred)
      setFavourite(resp)
    },500)
  },[])

  const renderItem= ({item})=>{
    return(
      <FavouriteList item={item}  navigation={navigation}/>
    )
  }

  const {height, width} = useWindowDimensions();
  const right = width > height ? (Platform.OS === 'ios' ? 40 : 30) : 0;
  return (
    <SafeAreaView style={styles.favouriteContainer}>
    {favourite.length > 0 ? <>
      <View style={styles.searchHeader}>
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
        <View style={styles.searchInput}>
          <Text style={styles.favouriteText}>Favourites</Text>
          <View style={{marginTop: 20}}>
            <TextInputComponent placeholder="Search" name="search-outline" />
          </View>
        </View>
        <TouchableOpacity>
          <View style={[styles.iconHeader, {marginRight: right}]}>
            <Image
              style={styles.filterIcon}
              source={require('../assets/images/filter_icon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
          <VirtualList data={favourite} renderItem={renderItem} keyExtractor={(item)=>item._id}/>
      </View>
      </>:<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator color="purple" size="large" />
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#370F24',
  },

  backImg: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },

  favouriteContainer: {
    flex: 1,
  },
  filterIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },

  favouriteText: {
    fontSize: 18,
    marginTop: 8,
    color: 'white',
    fontFamily: 'Avenir Medium',
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterDone: {
    color: 'white',
    fontFamily: 'Avenir Book',
    fontSize: 16,
    marginRight: 5,
  },
});
export default Favourites;
