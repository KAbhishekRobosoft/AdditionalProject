import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import VirtualList from '../components/VirtualList';
import ReviewList from '../components/ReviewList';

function ReviewScreen() {
  const data = [
    {
      id: 1,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 2,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 3,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 4,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 5,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 6,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
    {
      id: 7,
      name: 'Saish Balu',
      review: 'Must try crab soup and oyesters cooked in ghee !!',
      date: 'June 24, 2015',
    },
  ];

  const renderItem = ({item}) => {
    return <ReviewList item={item} />;
  };

  return (
    <SafeAreaView style={styles.reviewContainer}>
        <View style={styles.reviewHeader}>
          <TouchableOpacity>
            <View style={styles.iconHeader}>
              <Image
                style={styles.backIcon}
                source={require('../assets/images/back_icon.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.reviewHotelText}>Attil</Text>
          <TouchableOpacity>
            <View style={styles.iconHeader}>
              <Image
                style={styles.review}
                source={require('../assets/images/review.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewView}>
          <VirtualList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
  },

  reviewView: {
    flex: 1,
  },

  reviewHotelText: {
    fontFamily: 'Avenir Book',
    color: 'white',
    fontSize: 20,
  },

  reviewHeader: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#370F24',
  },

  review: {
    height: 20,
    width: 20,
    tintColor: 'white',
    marginRight: 10,
  },

  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    height: 20,
    width: 20,
  },
});

export default ReviewScreen;
