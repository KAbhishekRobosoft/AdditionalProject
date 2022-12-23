import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFunctionality from './src/utils/NavigationFunctionality';
import store from './src/redux/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import ImageDisplay from './src/screens/ImageDisplay';

let persistor = persistStore(store);
function App() {
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
