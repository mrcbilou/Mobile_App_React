
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/Login'

const Stack = createStackNavigator()



function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
       initialRouteName='Login'
       screenOptions={{
         gestureEnabled: true,
       }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen',  headerShown: false}}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator