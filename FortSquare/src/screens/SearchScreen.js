import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import TextInputComponent from '../components/TextInputComponent';
import {ScrollView} from 'react-native-gesture-handler';
import SearchByPlace from '../components/SearchByPlace';
import SearchNearMe from '../components/SearchNearMe';
import {LargeButton} from '../components/Button';
import {searchParticularPlace} from '../services/Places';
import {useDispatch, useSelector} from 'react-redux';
import ListDisplay from '../components/HotelListDisplay';
import Card from '../components/Card';
import {mapStyle} from '../utils/Functions';

function SearchScreen({navigation}) {
  const coords = useSelector(state => state.auth.setCoord);
  const mapRef = useRef(null);
  const [Viewable, SetViewable] = React.useState([]);
  const ref = React.useRef(null);

  const onViewRef = React.useRef(viewableItems => {
    let Check = [];
    for (var i = 0; i < viewableItems.viewableItems.length; i++) {
      Check.push(viewableItems.viewableItems[i].item);
    }
    SetViewable(Check);
  });

  console.info(Viewable);
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 80});
  const {height, width} = useWindowDimensions();
  const right = width > height ? (Platform.OS === 'ios' ? 40 : 30) : 0;
  const [searchPlace, setSearchPlace] = useState(false);
  const [searchNearMe, setSearchNearMe] = useState(false);
  const [text, setText] = useState('');
  const coord = useSelector(state => state.auth.setCoord);
  const [list, setList] = useState(false);
  const [placeResults, setPlaceResults] = useState([]);
  const [mapView, setMapView] = useState(false);
  const state = useSelector(state => state.auth.initialState);

  const bottom =
    width > height
      ? Platform.OS === 'ios'
        ? 0
        : 30
      : Platform.OS === 'ios'
      ? 230
      : 230;
  const height1 =
    width > height
      ? Platform.OS === 'ios'
        ? '60%'
        : '60%'
      : Platform.OS === 'ios'
      ? '22%'
      : '22%';

  const renderItem = ({item}) => {
    return <Card state={state} item={item} navigation={navigation} />;
  };

  const getPlace = async text => {
    const resp = await searchParticularPlace(coord, text);
    setPlaceResults(resp);
  };
  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            setList(false);
            setMapView(false);
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
                setList(false);
                setMapView(false);
              }}
              onChangeText={val => {
                if (val.length !== 0) {
                  getPlace(val);
                  setSearchPlace(false);
                  if (mapView === false) setList(true);
                }
                if (val.length === 0) {
                  if (mapView === true) setList(false);
                  if (list === true) setMapView(false);
                }
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
                setList(false);
                setMapView(false);
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('filter');
          }}>
          <View style={[styles.iconHeader, {marginRight: right}]}>
            <Image
              style={styles.filterIcon}
              source={require('../assets/images/filter_icon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      {searchPlace && (
        <ScrollView bounces={false}>
          <SearchByPlace
            text={text}
            setText={setText}
            searchPlace={searchPlace}
            setSearchPlace={setSearchPlace}
            navigation={navigation}
            setPlaceResults={setPlaceResults}
            setList={setList}
          />
        </ScrollView>
      )}
      {searchNearMe && <SearchNearMe />}
      {list && (
        <ScrollView>
          <View style={styles.listView}>
            {placeResults.length > 0 ? (
              placeResults.map(ele => {
                return (
                  <ListDisplay
                    navigation={navigation}
                    item={ele}
                    key={ele._id}
                    state={state}
                  />
                );
              })
            ) : (
              <View style={{flex: 1, alignItems: 'center'}}>
                <ActivityIndicator size="large" color="purple" />
              </View>
            )}
          </View>
        </ScrollView>
      )}
      {list && (
        <View>
          <LargeButton
            title="Map View"
            backgroundColor="#351347"
            width="100%"
            borderRadius="0"
            fontFamily="Avenir Medium"
            onPress={() => {
              setList(false);
              setMapView(true);
            }}
          />
        </View>
      )}
      {mapView &&
        (placeResults.length > 0 ? (
          <View style={styles.container}>
            <MapView
              initialRegion={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              style={styles.mapStyle}
              customMapStyle={mapStyle}>
              {Viewable.length > 0 &&
                placeResults.map(ele => {
                  return ele._id === Viewable[0]._id ? (
                    <Marker
                      key={ele._id}
                      coordinate={{
                        latitude: ele.location.coordinates[1],
                        longitude: ele.location.coordinates[0],
                        latitudeDelta: 0.6,
                        longitudeDelta: 0.6,
                      }}
                      title={ele.placeName}
                      pinColor="green"
                    />
                  ) : (
                    <Marker
                      key={ele._id}
                      coordinate={{
                        latitude: ele.location.coordinates[1],
                        longitude: ele.location.coordinates[0],
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5,
                      }}
                      title={ele.placeName}
                    />
                  );
                })}
            </MapView>
            <View style={{position: 'absolute', width: '100%', top: 0}}>
              <FlatList
                data={placeResults}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                horizontal
                pagingEnabled
                ref={ref}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
              />
            </View>
          </View>
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="purple" />
          </View>
        ))}

      {mapView && (
        <LargeButton
          title="List View"
          backgroundColor="#351347"
          width="100%"
          borderRadius="0"
          fontFamily="Avenir Medium"
          onPress={() => {
            setList(true);
            setMapView(false);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
  },

  listView: {
    flex: 1,
    justifyContent: 'center',
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

  mapView: {
    borderWidth: 1,
    height: '100%',
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

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  inputContainerStyle: {
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
