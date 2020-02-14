import React from 'react'
import { View } from 'react-native'
import Styles from '../Styles'

export default function Card(props) {

  return (
    <View style={Styles.card}>
      {props.children}
    </View>
  )
}