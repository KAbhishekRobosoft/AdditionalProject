import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/TopBar';
function HomePage() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeHeader}>
        <TouchableOpacity>
          <Image
            style={styles.menuIcon}
            source={require('../assets/images/menu_icon.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.homeLogo}
          source={require('../assets/images/logo.png')}
        />
        <View style={styles.homeOptions}>
          <TouchableOpacity>
            <Image
              style={styles.filterIcon}
              source={require('../assets/images/filter_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
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
