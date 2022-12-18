import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomDrawer(props) {
  const {height, width} = useWindowDimensions();

  const height1 =
    width > height
      ? Platform.OS === 'ios'
        ? '50%'
        : '50%'
      : Platform.OS === 'ios'
      ? '28%'
      : '28%';
  return (
    <View style={styles.drawerView}>
      <ImageBackground
        blurRadius={20}
        style={styles.imgBack}
        source={require('../assets/images/background.png')}>
        <View style={[styles.profileView, {height: height1}]}>
          <Image
            style={styles.profilePic}
            source={require('../assets/images/profillephotp.png')}
          />
          <Text style={styles.profileText}>Swapnil Swarup</Text>
        </View>
        <DrawerContentScrollView {...props}>
          <View>
            <DrawerItemList {...props} />
            <View style={styles.logoutView}>
              <TouchableOpacity style={styles.logout}>
                <Icon
                  style={styles.logoutIcon}
                  name="log-out-outline"
                  size={28}
                  color="white"
                />
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerView: {
    flex: 1,
  },

  buttonText: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: 'Avenir Medium',
    color: 'white',
  },

  logoutIcon: {
    marginLeft: 15,
  },

  logoutView: {
    borderBottomWidth: 1,
    borderBottomColor: '#52434D',
    width: '80%',
    alignSelf: 'center',
    marginRight:5
  },

  logout: {
    alignItems: 'center',
    width: '90%',
    height: 80,
    flexDirection: 'row',
  },

  profileText: {
    fontFamily: 'Avenir Book',
    fontSize: 22,
    color: '#FFFFFF',
    marginTop: 10,
  },

  profilePic: {
    height: 80,
    width: 80,
    marginTop: 30,
    borderRadius: 40,
  },

  imgBack: {
    flex: 1,
  },

  profileView: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});

export default CustomDrawer;
