import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../Styles'

export default function Button({ text, color, style }) {
  return (
    <TouchableOpacity style={[Styles.button, { backgroundColor: color }, style]}>
      <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
