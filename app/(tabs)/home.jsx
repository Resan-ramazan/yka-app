import { View, Text } from 'react-native'
import React from 'react'
import WelcomeHeader from '../../components/WelcomeHeader'
import SearchBar from '../../components/SearchBar'
import Slider from '../../components/Slider'

export default function Home() {
  return (
    <View style={{padding:40}}>
      <WelcomeHeader/>
      <SearchBar/>
      <Slider/>
    </View>
  )
}