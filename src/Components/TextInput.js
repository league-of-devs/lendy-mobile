import React from 'react'
import { TextInput as Input, StyleSheet, ViewPropTypes } from 'react-native'
import Styles from '../Styles'

export default function TextInput({value = String(), onChange = (event) => { return event }, placeholder = String(), borderColor = String(), color = String(), placeholderColor = String(), style, ...props}) {
  return (
    <Input value={value} onChangeText={onChange} placeholder={placeholder} {...props} autoCompleteType='off' autoCorrect={false} placeholderTextColor={placeholderColor ? placeholderColor : '#ffffffee'} style={{ ...Styles.textInput, borderColor: borderColor || Styles.textInput.borderColor, color: color || Styles.textInput.color, ...style }}/>
  )
}
