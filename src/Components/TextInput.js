import React from 'react'
import { TextInput as Input } from 'react-native'
import Styles from '../Styles'

export default function TextInput({value, onChange, ...props}) {
  return (
    <Input value={value} onChangeText={onChange} {...props} autoCompleteType='off' autoCorrect={false} placeholderTextColor='#ffffffee' style={Styles.textInput}/>
  )
}
