import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getVerifiedKeys} from '../utils/Functions';
import {addFavourites} from '../services/Places';
import {setToken} from '../redux/AuthSlice';
import {setInitialState1} from '../redux/AuthSlice';

function ListDisplay({item, navigation, handleFavourite,state1}) {
  const dispatch = useDispatch();
  const {height, width} = useWindowDimensions();
  const favourites = useSelector(state => state.auth.favourites);
  const authData = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [maxRate,setMaxRate]= useState(parseFloat(0))
  if(item.rating > maxRate)
    setMaxRate(item.rating)


  async function handleFavourite(id) {
    const cred = await getVerifiedKeys(authData.userToken);
    dispatch(setToken(cred));
    const resp = await addFavourites(id, cred);
    if (resp !== undefined) {
      dispatch(setInitialState1(state1));
    }
    if (loading === true) setLoading(false);
    if (loading1 === true) setLoading1(false);
    if (loading2 === true) setLoading2(false);
  }

  const width1 =
    width > height
      ? Platform.OS === 'ios'
        ? '90%'
        : '90%'
      : Platform.OS === 'ios'
      ? '90%'
      : '90%';

  const width2 =
    width > height
      ? Platform.OS === 'ios'
        ? '85%'
        : '85%'
      : Platform.OS === 'ios'
      ? '69%'
      : '69%';

  const margin =
    width > height
      ? Platform.OS === 'ios'
        ? 10
        : 10
      : Platform.OS === 'ios'
      ? 5
      : 5;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('particular', {
          distance: Math.round(
            ((item.distance.calculated / 1609) * 100) / 100,
          ).toFixed(2),
          id: item._id,
        });
      }}>
      <View style={[styles.listContainer, styles.shadowProp, {marginLeft: margin,marginRight:margin,marginTop:4}]}>
        <View style={styles.listDisplay}>
          <Image
            style={styles.listImg}
            source={{uri: 'https' + item.placeImage.substring(4)}}
          />
          <View style={{width: width2}}>
            <View style={[styles.textWithImage, {width: width1}]}>
              {item.placeName.length > 15 ? <Text style={styles.listName}>{item.placeName.substring(0,16)}...</Text> : <Text style={styles.listName}>{item.placeName}</Text>}

              {authData.userToken !== null ? (
                favourites.favouritePlaces.length > 0 ? (
                  favourites.favouritePlaces.filter(
                    ele => ele.placeId === item._id,
                  ).length > 0 ? (
                    !loading ? (
                      <TouchableOpacity
                        onPress={() => {
                          handleFavourite(item._id);
                          setLoading(true);
                        }}>
                        <View style={styles.iconHeader} key={item._id}>
                          <Image
                            style={styles.favouriteImg}
                            source={require('../assets/images/favourite_icon_selected.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.iconHeader}>
                        <ActivityIndicator color="orange" />
                      </View>
                    )
                  ) : !loading1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        handleFavourite(item._id);
                        setLoading1(true);
                      }}>
                      <View style={styles.iconHeader} key={item._id}>
                        <Image
                          style={styles.favouriteImg}
                          source={require('../assets/images/favourite_icon.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.iconHeader}>
                      <ActivityIndicator color="orange" />
                    </View>
                  )
                ) : !loading2 ? (
                  <TouchableOpacity
                    onPress={() => {
                      handleFavourite(item._id);
                      setLoading2(true);
                    }}>
                    <View style={styles.iconHeader}>
                      <Image
                        style={styles.favouriteImg}
                        source={require('../assets/images/favourite_icon.png')}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.iconHeader}>
                    <ActivityIndicator color="orange" />
                  </View>
                )
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('login');
                  }}>
                  <View>
                    <Image
                      style={styles.favouriteImg}
                      source={require('../assets/images/favourite_icon.png')}
                    />
                  </View>
                </TouchableOpacity>
              )}
            </View>
            {item.rating >= 4 && <View style={styles.ratingView1}>
              <Text style={styles.listRating}>
                {parseFloat(item.rating * 2).toFixed(1)}
              </Text>
            </View>}
            {item.rating < 4 && <View style={styles.ratingView}>
              <Text style={styles.listRating}>
                {parseFloat(item.rating * 2).toFixed(1)}
              </Text>
            </View>}
            <View style={styles.typeDist}>
              <Text style={styles.typeText}>
                Indian .
                {item.priceRange === 4
                  ? '₹₹₹₹'
                  : item.priceRange === 3
                  ? '₹₹₹'
                  : item.priceRange === 2
                  ? '₹₹'
                  : '₹'}
              </Text>
              <Text style={styles.distText}>
                {(item.distance.calculated / 1609).toFixed(2)} Km
              </Text>
            </View>
            <View style={styles.addressView}>
              <Text style={styles.addressText}>
                {item.address.trim()}, {item.city}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: 125,
    width: '97.5%',
    backgroundColor: 'white',
    borderColor: 'white',
    marginVertical:4
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 2,
  },

  listImg: {
    height: 125,
    width: 120,
  },

  addressText: {
    color: 'grey',
  },

  addressView: {
    marginLeft: 20,
  },

  favouriteImg: {
    height: 21,
    width: 21,
  },

  textWithImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  typeDist: {
    flexDirection: 'row',
    marginTop: 5,
  },

  ratingView: {
    backgroundColor: '#a5d839',
    width: '11%',
    height: '16%',
    marginTop: 5,
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },

  ratingView1: {
    backgroundColor: '#7dd350',
    width: '11%',
    height: '16%',
    marginTop: 5,
    marginLeft: 20,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },

  listDisplay: {
    flexDirection: 'row',
    width: '100%',
  },

  typeText: {
    color: 'grey',
    marginLeft: 20,
    fontFamily: 'Avenir Book',
  },

  distText: {
    fontFamily: 'Avenir Book',
    marginLeft: 10,
    color: 'grey',
  },

  listRating: {
    fontFamily: 'Avenir Book',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  listName: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: 'Avenir Book',
    color: 'black',
    marginTop: 5,
  },
});

export default ListDisplay;
