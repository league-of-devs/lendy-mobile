import React, { useEffect, useState } from 'react'
import Routes from './src/Routes'
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/Store'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    SplashScreen.preventAutoHide()
    Font.loadAsync({
      'Boston': require('./assets/font/Boston-Regular.otf'),
      'Boston-Bold': require('./assets/font/Boston-Bold.otf'),
      'Boston-Semibold': require('./assets/font/Boston-SemiBold.otf'),
      'Boston-Light': require('./assets/font/Boston-Light.otf'),
    }).then(() => {
      setFontsLoaded(true)
      SplashScreen.hide()
    })
  }, [])

  if (fontsLoaded)
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )

  return null
}
