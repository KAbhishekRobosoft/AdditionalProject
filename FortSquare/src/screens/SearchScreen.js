import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import {ScrollView} from 'react-native-gesture-handler';
import SearchByPlace from '../components/SearchByPlace';
import SearchNearMe from '../components/SearchNearMe';

import { useDispatch,useSelector } from 'react-redux';

function SearchScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  const right = width > height ? (Platform.OS === 'ios' ? 40 : 30) : 0;
  const [searchPlace, setSearchPlace] = useState(false);
  const [searchNearMe, setSearchNearMe] = useState(false);



  return (
    <SafeAreaView style={styles.searchContainer}>
<ScrollView bounces={false}>
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
            <View>
              <TextInputComponent
                onFocus={() => {
                  setSearchPlace(true);
                  setSearchNearMe(false);
                }}
                placeholder="Search"
                name="search-outline"
              />
            </View>
            <View style={{marginTop: 10}}>
              <TextInputComponent
                placeholder="Near Me"
                name="compass-outline"
                onFocus={() => {
                  setSearchPlace(false);
                  setSearchNearMe(true);
                }}
              />
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
        {searchPlace && <SearchByPlace navigation={navigation}/>}
        {searchNearMe && <SearchNearMe />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  searchHeader: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: '#370F24',
  },

  filterIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },

  searchInput: {
    width: '70%',
    justifyContent: 'center',
  },

  backImg: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default SearchScreen;
