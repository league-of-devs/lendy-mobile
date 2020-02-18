import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../Styles'
import Colors from '../Styles/colors'

export default function Switch ({ options = [ '', '' ], value = Boolean(), onChange = (value = Boolean()) => { return value } }) {

  const [active, setActive] = useState(value)

  const handleChange = (next) => {
    setActive(next)
    onChange(next)
  }

  return (
    <View style={Styles.switch}>
      <TouchableOpacity onPress={() => handleChange(false)} style={[Styles.switchOption, { backgroundColor: active ? Colors.cyan : '#fff' }]}>
        <Text style={[Styles.text, { color: active ? '#fff' : Colors.cyan, marginTop: 6 }]}>{options[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChange(true)} style={[Styles.switchOption, { backgroundColor: !active ? Colors.cyan : '#fff' }]}>
        <Text style={[Styles.text, { color: !active ? '#fff' : Colors.cyan, marginTop: 6 }]}>{options[1]}</Text>
      </TouchableOpacity>
    </View>
  )
}