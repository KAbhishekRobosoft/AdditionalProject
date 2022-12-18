import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../utils/Functions';
import VirtualList from '../components/VirtualList';
import ListDisplay from '../components/HotelListDisplay';

function NearYou({navigation}) {
  const {height,width}= useWindowDimensions()
  const height1= width > height ? (Platform.OS === "ios" ? 135: 125) : (Platform.OS === "ios" ? 200 : 200)
 
  const DATA = [
    {id:1,name:"Attil",address:"karkala 2nd cross",rating:"8.5",type:"indian .....",distance:"6.5 km"},
    {id:2,name:"Attil",address:"karkala 2nd cross",rating:"8.5",type:"indian .....",distance:"6.5 km"},
    {id:3,name:"Attil",address:"karkala 2nd cross",rating:"8.5",type:"indian .....",distance:"6.5 km"},
    {id:4,name:"Attil",address:"karkala 2nd cross",rating:"8.5",type:"indian .....",distance:"6.5 km"},
    {id:5,name:"Attil",address:"karkala 2nd cross",rating:"8.5",type:"indian .....",distance:"6.5 km"},

  ];
  
  const renderItem = ({item}) => {
    return <ListDisplay navigation={navigation} item={item} />;
  };

  return (
    <View style={styles.main_container}>
      <View style={[styles.mapView, styles.shadowProp,{height:height1}]}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
      <View style={styles.listContainer}>
        <VirtualList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
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
  },

  listContainer:{
    flex:1
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
