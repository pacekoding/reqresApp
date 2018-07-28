import React from 'react'
import { StackNavigator } from 'react-navigation'


import Home from '../Containers/Home'
import Login from '../Containers/Login'
import List from '../Containers/List'



export default AppNavigator = StackNavigator(
  {
    HomeScreen: { screen: Home },
    LoginScreen: { screen: Login },
    ListScreen: { screen: List },
  },
  {
    headerMode: 'none',
    initialRouteName: 'ListScreen',
  }
)
