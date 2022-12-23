import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ParticularHotel from '../screens/ParticularHotel';
import ReviewScreen from '../screens/ReviewScreen';
import NearYou from '../screens/NearYou';
import DrawerNavigation from './DrawerNavigation';
import SearchScreen from '../screens/SearchScreen';
import ParameterWithHeaderList from '../components/ParameterWithHeaderList';
import FilterScreen from '../screens/FilterScreen';
import AddReviewScreen from '../screens/AddReviewScreen';
import ImageDisplay from '../screens/ImageDisplay';

const Stack = createStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator initialRouteName="drawer">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="drawer"
        component={DrawerNavigation}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="near"
        component={NearYou}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="particular"
        component={ParticularHotel}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="review"
        component={ReviewScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="search"
        component={SearchScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="parameterHeader"
        component={ParameterWithHeaderList}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="filter"
        component={FilterScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="addReview"
        component={AddReviewScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="imgDisplay"
        component={ImageDisplay}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
