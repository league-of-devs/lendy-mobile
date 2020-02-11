import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionSpecs } from 'react-navigation-stack'

import Login from './Screens/Login'

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
        animationTypeForReplace: 'pop'
      }
    }
  })
)

export default Routes