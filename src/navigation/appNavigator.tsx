import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../views/Home';

const Tab = createBottomTabNavigator();

export const AppNavigator = ()=> {
  return (
         <Tab.Navigator
          screenOptions={{headerShown: false}}
         >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
  );
};
