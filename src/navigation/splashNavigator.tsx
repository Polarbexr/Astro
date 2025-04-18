import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Splash } from '../views/Splash/Splash';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTransparent: true,
  headerTitle: '',
  // headerTitleStyle: {...styles.txtHeader},
  headerTitleAlign: 'center',
};

const Stack = createNativeStackNavigator();


export const SplashNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{...screenOptions,   headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Splash} />
    </Stack.Navigator>
  );
};
