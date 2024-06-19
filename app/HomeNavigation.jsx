import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './(tabs)/home';
import CourseDetails from './CourseDetails';


const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
        <Stack.Screen name='CourseDetails' component={CourseDetails}></Stack.Screen>
    </Stack.Navigator>
  )
}