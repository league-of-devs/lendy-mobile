import React from 'react'
import { View, Image, TouchableOpacity, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Styles from '../Styles'
import { useNavigation } from 'react-navigation-hooks'

import logo from '../../assets/logo-white.png'

export default function Header() {
  
  const navigation = useNavigation()

  const handleMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={Styles.header}>
      <TouchableOpacity onPress={handleMenu} style={{zIndex: 999}}>
        <Feather style={Styles.menuIcon} size={32} name='menu' />
      </TouchableOpacity>
      <Image source={logo} style={Styles.menuLogo} resizeMode='contain' />
    </View>
  )
}