import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Text } from 'react-native'
import Styles from '../Styles'
import Logo from '../Components/Logo'
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'

export default function Login({ navigation, ...props }) {

  const [formData, setFormData] = useState({  })

  const handleChange = (name, text) => {
    const x = formData
    x[name] = text
    setFormData(x)
  }

  const handleSubmit = () => {
    
  }

  return (
    <View style={[Styles.container, Styles.mainBackground]}>
      <View style={[Styles.loginForm, { flex: 1, justifyContent: 'center' }]}>
        <KeyboardAvoidingView  style={{ flex: 0.7, justifyContent: 'flex-end' }} behavior='position'>
          <Logo white style={{width: '100%', transform: [ { scale: 0.7 } ]}}/>
          <TextInput onChange={(v) => handleChange('email', v)} placeholder='E-mail' keyboardType='email-address' style={{width: '100%'}}/>
          <TextInput onChange={(v) => handleChange('password', v)} placeholder='Senha' secureTextEntry={true} style={{width: '100%'}}/>
          <Button style={{ width: '50%', elevation: 5 }} text='Log-in' color='#FFFFFFEE' />
        </KeyboardAvoidingView>
        <View style={[{ flex: 0.3, justifyContent: 'center', alignContent: 'center' }]}>
          <Text style={Styles.text}>Ainda não é cadastrado?</Text>
          <Text onPress={() => navigation.push('Signup')} style={[Styles.text, Styles.link]}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  )
}
