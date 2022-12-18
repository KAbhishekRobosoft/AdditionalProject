import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListDisplay from './HotelListDisplay';
import VirtualList from './VirtualList';

function ParameterList({navigation}) {
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
    <View style={styles.parameterContainer}>
      <VirtualList data={DATA} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  parameterContainer: {
    flex: 1,
    marginVertical: 5,
  },
});

export default ParameterList;
