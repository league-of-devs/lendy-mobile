
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Text } from 'react-native'
import Home from '../Screens/Home'
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../Styles/colors'

const testComponent = () => (<Text>Teste</Text>)

const getIonicIcon = (name) => {
  const TabIcon = ({ focused }) => (
    <Ionicons
      name={name}
      size={35}
      color={focused ? '#fff' : '#000'}
    />
  )

  return TabIcon
}

const getFontAwesomeIcon = (name) => {
  const TabIcon = ({ focused }) => (
    <FontAwesome5
      name={name}
      size={30}
      color={focused ? '#fff' : '#000'}
    />
  )

  return TabIcon
}

const getMaterialIcon = (name) => {
  const TabIcon = ({ focused }) => (
    <MaterialCommunityIcons
      name={name}
      size={35}
      color={focused ? '#fff' : '#000'}
    />
  )

  return TabIcon
}

const appStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: getIonicIcon('md-home')
    }
  },
  Extrato: {
    screen: testComponent,
    navigationOptions: {
      tabBarIcon: getFontAwesomeIcon('receipt')
    }
  },
  Mensagens: {
    screen: testComponent,
    navigationOptions: {
      tabBarIcon: getMaterialIcon('message-text')
    }
  },
  Perfil: {
    screen: testComponent,
    navigationOptions: {
      tabBarIcon: getFontAwesomeIcon('user-alt')
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#000',
    style: { height: 64, paddingVertical: 5, backgroundColor: Colors.cyan },
    labelStyle: { fontFamily: 'Boston-Semibold', fontSize: 14 },
  }
})

export default appStack