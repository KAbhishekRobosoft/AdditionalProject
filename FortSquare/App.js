import React from 'react';
import StackNavigation from './src/utils/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import TextInputComponent from './src/components/TextInputComponent';
import ParameterWithHeaderList from './src/components/ParameterWithHeaderList';
function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // <ParameterWithHeaderList />
  );
}

export default App;
