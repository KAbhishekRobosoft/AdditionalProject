import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NearYou from '../screens/NearYou';
import { Platform, useWindowDimensions } from 'react-native';
import ParameterList from './ParameterList';

const Tab = createMaterialTopTabNavigator();
function TopBar() {
  const {height,width}= useWindowDimensions()
  const width1= width > height ? (Platform.OS === "ios" ? 155 : 155) : (Platform.OS === "ios" ? 100 : 100)
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NearYou"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#370F24'},
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle:{fontFamily:"Avenir Book"},
          tabBarInactiveTintColor: '#87797F',
          tabBarPressColor: '#370F24',
          tabBarIndicatorStyle: {backgroundColor: 'transparent'},
          tabBarItemStyle:{width:width1},
          tabBarScrollEnabled: true
        }}>
        <Tab.Screen name="Near You" component={NearYou} />
        <Tab.Screen name="Top Pick" component={ParameterList} />
        <Tab.Screen name="Popular" component={ParameterList} />
        <Tab.Screen name="Lunch" component={ParameterList} />
        <Tab.Screen name="Coffee" component={ParameterList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopBar;