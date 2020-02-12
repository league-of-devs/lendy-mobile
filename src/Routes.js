import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Signup from './Screens/Signup'

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
        animationTypeForReplace: 'pop'
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
        animationTypeForReplace: 'push'
      }
    }
  })
)

export default Routes