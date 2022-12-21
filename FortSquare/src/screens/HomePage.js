import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import TopBar from '../components/TopBar';
import { getFavourites } from '../services/Places';
import { setToken } from '../redux/AuthSlice';
import { getVerifiedKeys } from '../utils/Functions';
import { setFavourites } from '../redux/AuthSlice';

function HomePage({navigation}) {
  const authData= useSelector(state=>state.auth)
  const dispatch= useDispatch()
  

  useEffect(()=>{
    setTimeout(async ()=>{
      const cred= await getVerifiedKeys(authData.userToken)
      dispatch(setToken(cred))
      const resp= await getFavourites(cred)
      dispatch(setFavourites(resp))
    },500)
  },[])
  
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <View style={styles.iconHeader}>
            <Image
              style={styles.menuIcon}
              source={require('../assets/images/menu_icon.png')}
            />
          </View>
        </TouchableOpacity>
        <Image
          style={styles.homeLogo}
          source={require('../assets/images/logo.png')}
        />
        <View style={styles.homeOptions}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('filter')
          }}>
            <View style={styles.iconHeader}>
              <Image
                style={styles.filterIcon}
                source={require('../assets/images/filter_icon.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('search')
          }}>
            <View style={styles.iconHeader}>
              <Image
                style={styles.searchIcon}
                source={require('../assets/images/search_icon.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topBar}>
        <TopBar />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  homeHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#370F24',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 1,
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuIcon: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },

  homeLogo: {
    width: 140,
    height: 20,
  },

  searchIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },

  homeOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
});
export default HomePage;
