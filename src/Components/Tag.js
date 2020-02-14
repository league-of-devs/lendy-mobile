import React from 'react'
import Styles from '../Styles'
import { View, Text } from 'react-native'

export default function Tag({ text }) {

  return (
    <View style={Styles.tag}>
      <Text style={Styles.tagText}>{text}</Text>
    </View>
  )
}