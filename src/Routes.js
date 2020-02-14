import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Signup from './Screens/Signup'
import appStack from './Navigation/BottomBarNavigation'

const authStack = createStackNavigator({
  Login,
  Signup
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
})

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: authStack,
    Main: appStack
  }, {
    initialRouteName: 'Login'
  })
)

export default Routes