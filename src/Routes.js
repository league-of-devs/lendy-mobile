import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
import Sidebar from './Navigation/Sidebar'

const Routes = createAppContainer(
  createDrawerNavigator({
    Login,
    Signup,
    Main: Home
  }, {
    initialRouteName: 'Login',
    headerMode: '',
    contentComponent: Sidebar
  })
)

export default Routes