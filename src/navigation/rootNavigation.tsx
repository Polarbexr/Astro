import { NavigationContainer } from '@react-navigation/native';
import { SplashNavigator } from './splashNavigator';
import { AppNavigator } from './appNavigator';
import { useEffect, useState } from 'react';
// import { AppNavigator } from './appNavigator';


export const RootNavigation = ()=> {

  const [auth, setAuth] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setAuth(false);
      }, 6000);

      return () => {
        clearTimeout(2000);
      };
  }, [auth]);



  return (
    <NavigationContainer>

      {
        auth ? (
          <SplashNavigator/>

        ) :
        (
                 <AppNavigator/>

        )

      }
    </NavigationContainer>
  );
};
