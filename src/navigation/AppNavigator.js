import { createStackNavigator } from '@react-navigation/stack'

import { Main, MyPage } from '../Pages/index';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="앱 테크" 
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default AppNavigator;