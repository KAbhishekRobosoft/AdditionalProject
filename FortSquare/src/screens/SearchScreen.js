import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import {ScrollView} from 'react-native-gesture-handler';
import SearchByPlace from '../components/SearchByPlace';

function SearchScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  const right = width > height ? (Platform.OS === 'ios' ? 40 : 30) : 0;

  return (
    <SafeAreaView style={styles.searchContainer}>
      <ScrollView>
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
              <TextInputComponent placeholder="Search" name="search-outline" />
            </View>
            <View style={{marginTop: 10}}>
              <TextInputComponent
                placeholder="Near Me"
                name="compass-outline"
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
        <SearchByPlace navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
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

  searchByPlaceName: {
    width: '100%',
    height: 230,
    backgroundColor: 'white',
  },

  nearByPlaceList: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
    alignItems: 'center',
  },

  placeName: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    marginLeft: 20,
    color: 'black',
  },

  nearBy: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#f2f1f1',
  },

  nearByText: {
    marginLeft: 30,
    fontSize: 18,
    fontFamily: 'Avenir Medium',
    color: '#858585',
  },

  nearByList: {
    flex: 1,
  },
});

export default SearchScreen;
