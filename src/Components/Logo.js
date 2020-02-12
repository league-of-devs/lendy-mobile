import React from 'react'
import { View, Image } from 'react-native'
import whiteLogo from '../../assets/logo-white.png'
import cyanLogo from '../../assets/logo-cyan.png'
import Styles from '../Styles'

export default function Logo({ white, style }) {
  return (
    <View style={[Styles.horizontalCenter]}>
      <Image height={100} resizeMode='contain' style={[Styles.logo, style]} source={white ? whiteLogo : cyanLogo}/>
    </View>
  )
}
