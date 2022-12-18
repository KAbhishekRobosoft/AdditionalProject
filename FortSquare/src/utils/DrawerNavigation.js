import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourites from '../screens/Favourites';
import HomePage from '../screens/HomePage';
import FeedBack from '../screens/FeedBack';
import AboutUs from '../screens/AboutUs';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="HomePage"
      screenOptions={{
        drawerStyle:{width:"85%"},
        drawerType:"slide",
        overlayColor:"transparent",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 18,
          color: 'white',
          fontFamily: 'Avenir Medium',
        },
        drawerItemStyle: {
          borderBottomWidth: 1,
          width: '80%',
          height: 80,
          justifyContent: 'center',
          borderBottomColor: '#52434D',
          marginLeft: 28,
        },
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerItemStyle: {height: 0},
        }}
        name="home"
        component={HomePage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Icon
              style={{marginLeft: 5}}
              name="heart-outline"
              size={28}
              color="white"
            />
          ),
        }}
        name="Favourites"
        component={Favourites}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Icon
              style={{marginLeft: 5}}
              name="chatbox-outline"
              size={28}
              color="white"
            />
          ),
        }}
        name="Feedback"
        component={FeedBack}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Icon
              style={{marginLeft: 5}}
              name="information-circle-outline"
              size={28}
              color="white"
            />
          ),
        }}
        name="About Us"
        component={AboutUs}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
