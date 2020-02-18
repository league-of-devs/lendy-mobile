import React from 'react'
import { AsyncStorage, ScrollView, SafeAreaView } from 'react-native'
import Styles from '../Styles'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import Colors from '../Styles/colors'

export default function Sidebar(props) {

  const { navigation } = props

  const handleLogout = () => {
    AsyncStorage.removeItem('@lendy/auth_token')
      .then(() => {
        navigation.navigate('Login')
      })
  }

  return (
    <ScrollView style={{ backgroundColor: '#191919' }}>
      <SafeAreaView
        style={[Styles.container]}
        forceInset={{ top: 'always', horizontal: 'never' }} >
        <Logo style={{ transform: [ { scale: 0.35 } ] }}/>
        <Button style={Styles.sideBarButton} onPress={() => navigation.navigate('Profile')} textColor='#fff' color={Colors.cyan} inverse text='Perfil' />
        <Button style={Styles.sideBarButton} onPress={() => navigation.navigate('Profile')} textColor='#fff' color={Colors.cyan} text='Fale conosco' />
        <Button style={Styles.sideBarButton} onPress={() => navigation.navigate('Profile')} textColor='#fff' color={Colors.cyan} text='Quem somos' />
        <Button style={Styles.sideBarButton} onPress={handleLogout} textColor='#fff' color={Colors.cyan} text='Sair' />
      </SafeAreaView>
    </ScrollView>
  )
}