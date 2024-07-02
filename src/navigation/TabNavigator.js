import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Main, MyPage } from '../Pages/index'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="홈" 
        component={Main}
      />
      <Tab.Screen 
        name="마이" 
        component={MyPage}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
