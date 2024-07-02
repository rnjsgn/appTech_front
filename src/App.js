import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/** navigator 호출 */}
      <AppNavigator />

    </NavigationContainer>
  );
};

export default App;