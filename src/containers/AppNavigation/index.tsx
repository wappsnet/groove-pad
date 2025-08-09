import { FC } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'definitions/routes';
import { APP_ID } from 'definitions/configs';
import MainScreen from 'screens/MainScreen';
import AlbumsScreen from 'screens/AlbumsScreen';

const Stack = createNativeStackNavigator();

const AppNavigation: FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <NavigationContainer
      theme={theme}
      linking={{
        enabled: true,
        prefixes: [`${APP_ID}://`],
        config: {
          screens: {
            main: ROUTES.main.name,
          },
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          fullScreenGestureEnabled: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.main.name} component={MainScreen} />
        <Stack.Screen name={ROUTES.albums.name} component={AlbumsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
