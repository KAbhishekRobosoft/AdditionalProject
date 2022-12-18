import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import ListDisplay from '../components/HotelListDisplay';
import VirtualList from './VirtualList';

function ParameterWithHeaderList({navigation}) {
  const {height, width} = useWindowDimensions();
  const left =
    width > height
      ? Platform.OS === 'ios'
        ? 100
        : 100
      : Platform.OS === 'ios'
      ? 50
      : 50;

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
    <SafeAreaView style={styles.parameterContainer}>
      <View style={styles.reviewHeader}>
        <TouchableOpacity>
          <View style={styles.iconHeader}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/back_icon.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={[styles.reviewHotelText, {marginLeft: left}]}>Attil</Text>
      </View>
      <View style={styles.parameterList}>
        <VirtualList data={DATA} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parameterContainer: {
    flex: 1,
  },

  parameterList: {
    flex: 1,
  },

  reviewHotelText: {
    fontFamily: 'Avenir Book',
    color: 'white',
    fontSize: 20,
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  },

  backIcon: {
    height: 20,
    width: 20,
  },

  reviewHeader: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#370F24',
  },
});
export default ParameterWithHeaderList;
