import React, { useState, useEffect } from 'react'
import { View, KeyboardAvoidingView, Text, Alert, AsyncStorage } from 'react-native'
import Styles from '../Styles'
import Logo from '../Components/Logo'
import TextInput from '../Components/TextInput'
import Button from '../Components/Button'
import getAPI from '../Services/api'
import ErrorMsgs from '../Helper/ErrorMessages'
import { useSelector, useDispatch } from 'react-redux'

export default function Login({ navigation, ...props }) {

  const [formData, setFormData] = useState({  })

  const handleChange = (name, text) => {
    const x = formData
    x[name] = text
    setFormData(x)
  }

  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()

  const changeUserData = (data) => {
    dispatch({ type: 'change_user_data', user: data })
  } 

  const handleSubmit = () => {
    getAPI().post('/user/login', formData)
      .then(response => response.data)
      .then(response => {
        const { token } = response

        AsyncStorage.setItem('@lendy/auth_token', token)
          .then(() => {
            changeUserData({ ...userState, token })
            getAPI().get('/user/my_info', { headers: { authorization: token } })
              .then(response => response.data)
              .then(response => {
                changeUserData({ token, ...response.data })
              })
              .then(() => navigation.navigate('Main'))
          })
      })
      .catch((err) => {
        Alert.alert('Erro', ErrorMsgs[err.response.data.error])
      })
  }

  useEffect(() => {
    AsyncStorage.getItem('@lendy/auth_token')
      .then(token => {
        if (token) {
          changeUserData({ token })

          getAPI().get('/user/my_info', { headers: { authorization: token } })
            .then(response => response.data)
            .then(response => {
              changeUserData({ token, ...response.data })
            })
            .then(() => navigation.navigate('Main'))
        }
      })

  }, [])

  return (
    <View style={[Styles.container, Styles.mainBackground]}>
      <View style={[Styles.loginForm, { flex: 1, justifyContent: 'center' }]}>
        <KeyboardAvoidingView  style={{ flex: 0.7, justifyContent: 'flex-end' }} behavior='position'>
          <Logo white style={{width: '100%', transform: [ { scale: 0.7 } ]}}/>
          <TextInput autoCapitalize='none' onChange={(v) => handleChange('cpf', v)} placeholder='CPF' keyboardType='numeric' style={{width: '100%'}}/>
          <TextInput onChange={(v) => handleChange('password', v)} placeholder='Senha' secureTextEntry={true} style={{width: '100%'}}/>
          <Button style={{ width: '50%' }} text='Log-in' color='#FFFFFFEE' onPress={handleSubmit} />
        </KeyboardAvoidingView>
        <View style={[{ flex: 0.3, justifyContent: 'center', alignContent: 'center' }]}>
          <Text style={Styles.text}>Ainda não é cadastrado?</Text>
          <Text onPress={() => navigation.navigate('Signup')} style={[Styles.text, Styles.link]}>Cadastre-se</Text>
        </View>
      </View>
    </View>
  )
}
