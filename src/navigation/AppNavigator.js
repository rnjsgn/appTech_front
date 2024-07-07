import { createStackNavigator } from '@react-navigation/stack'

import { Main, MyPage, GameList } from '../Pages/index';
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
        {/* <Stack.Screen
          name="게임 참가" 
          component={GameList}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    );
  };
  
  export default AppNavigator;