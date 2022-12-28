import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import store from './src/redux/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import SplashScreen from 'react-native-splash-screen';

let persistor = persistStore(store);
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <NavigationFunctionality />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
