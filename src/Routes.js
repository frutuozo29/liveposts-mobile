import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Post from './pages/Post'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#00CDF2',
          }
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'LivePosts App' }} component={Home} />
        <Stack.Screen name="Post" options={{ title: 'Detalhes' }} component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;