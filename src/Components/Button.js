import React, { useState } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../Styles'
import Colors from '../Styles/colors'

export default function Button({ text = String(), color = Colors.cyan, style = { }, onPress, textColor }) {
  const [beingPressed, setBeingPressed] = useState(false)

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} onPressIn={() => setBeingPressed(true)} onPressOut={() => setBeingPressed(false)} style={[Styles.button, { borderWidth: 2, borderColor: color, backgroundColor: beingPressed ? '#ffffff00' : color, elevation: beingPressed ? 0 : Styles.button.elevation }, style]}>
      <Text style={[Styles.buttonText, { color: beingPressed ? color : textColor ? textColor : Styles.buttonText.color }]}>{text}</Text>
    </TouchableOpacity>
  )
}
