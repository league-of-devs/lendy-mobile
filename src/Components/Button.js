import React, { useState } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../Styles'

export default function Button({ text, color, style, onPress }) {
  const [beingPressed, setBeingPressed] = useState(false)

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} onPressIn={() => setBeingPressed(true)} onPressOut={() => setBeingPressed(false)} style={[Styles.button, { borderWidth: 2, borderColor: color, backgroundColor: beingPressed ? '#ffffff00' : color }, style]}>
      <Text style={[Styles.buttonText, { color: beingPressed ? color : Styles.buttonText.color }]}>{text}</Text>
    </TouchableOpacity>
  )
}
