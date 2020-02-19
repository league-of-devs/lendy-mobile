import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Text, Alert } from 'react-native'
import Styles from '../Styles'
import Logo from '../Components/Logo'
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import getAPI from '../Services/api'
import ErrorMsgs from '../Helper/ErrorMessages'

export default function Signup({ navigation, ...props }) {

  const [formData, setFormData] = useState({  })

  const handleChange = (name, text) => {
    const x = formData
    x[name] = text
    setFormData(x)
  }

  const handleSubmit = () => {
    getAPI().post('/user/register', formData)
      .then(response => {
        navigation.navigate('Login')
      })
      .catch((err) => {
        Alert.alert('Erro', ErrorMsgs[err.response.data.error])
      })
  }

  return (
    <View style={[Styles.container, Styles.mainBackground]}>
      <View style={[Styles.loginForm, { flex: 1, justifyContent: 'center' }]}>
        <KeyboardAvoidingView  style={{ flex: 0.85, justifyContent: 'flex-end' }} behavior='position'>
          <Logo white style={{width: '100%', transform: [ { scale: 0.7 } ]}}/>
          <TextInput textContentType='name' autoCapitalize='words' onChange={(v) => handleChange('name', v)} placeholder='Nome completo' style={{width: '100%'}}/>
          <TextInput textContentType='emailAddress' autoCapitalize='none' onChange={(v) => handleChange('email', v)} placeholder='E-mail' keyboardType='email-address' style={{width: '100%'}}/>
          <TextInput onChange={(v) => handleChange('cpf', v)} keyboardType='numeric' maxLength={11} placeholder='CPF' style={{width: '100%'}}/>
          <TextInput textContentType='password'  onChange={(v) => handleChange('password', v)} placeholder='Senha' secureTextEntry={true} style={{width: '100%'}}/>
          <TextInput textContentType='postalCode' autoCapitalize='none' onChange={(v) => handleChange('addr_cep', v)} placeholder='CEP' keyboardType='numeric' style={{width: '100%'}}/>
          <TextInput autoCapitalize='none' onChange={(v) => handleChange('addr_number', v)} placeholder='Número' keyboardType='numeric' style={{width: '100%'}}/>
          <TextInput textContentType='streetAddressLine2' autoCapitalize='none' onChange={(v) => handleChange('addr_complement', v)} placeholder='Complemento' style={{width: '100%'}}/>
          <Button style={{ width: '50%' }} text='Cadastrar' color='#FFFFFFEE' onPress={handleSubmit} />
        </KeyboardAvoidingView>
        <View style={[{ flex: 0.15, justifyContent: 'center' }]}>
          <Text style={Styles.text}>Já possui cadastro?</Text>
          <Text onPress={() => navigation.goBack()} style={[Styles.text, Styles.link]}>Fazer log-in</Text>
        </View>
      </View>
    </View>
  )
}
