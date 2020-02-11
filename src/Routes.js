import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionSpecs } from 'react-navigation-stack'

import Login from './screens/Main'

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