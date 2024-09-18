import 'react-native-gesture-handler'; // This should be at the top of your entry file
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/stores';
import AppNavigator from './src/navigation';
import 'react-native-gesture-handler'; // Add this line at the top
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
