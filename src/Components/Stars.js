import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Styles from '../Styles'

export default function getStars({ stars = Number() }) {

  const arr = []

  for (let index = 0; index < 5; index++) {
    if (stars < index) arr.push('star')
    else arr.push('star-half-empty')
  }

  arr.reverse()

  return (
    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
      { arr.map((icon, i) => (
        <FontAwesome name={icon} size={18} style={Styles.star} key={i} />
      ))}
    </View>
  )
} 