import { StyleSheet, StatusBar } from 'react-native'
import Colors from './colors.js'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },

  logo: {
    maxHeight: 200
  },

  loginForm: {
    maxWidth: '100%',
    padding: 20,
    alignSelf: 'center'
  },

  textInput: {
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 2,
    height: 45,
    marginBottom: 10,
    borderRadius: 100,
    paddingHorizontal: 20,
    fontFamily: 'Boston',
    fontSize: 18,
  },

  button: {
    height: 45,
    borderRadius: 100
  },

  buttonText: {
    textAlign: 'center',
    lineHeight: 45,
    color: Colors.cyan,
    fontFamily: 'Boston-Bold',
    fontSize: 18
  },

  text: {
    fontFamily: 'Boston',
    fontSize: 18
  },

  link: {
    fontFamily: 'Boston-Semibold',
    textDecorationLine: 'underline'
  },

  horizontalCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  mainBackground: {
    backgroundColor: Colors.cyan,
    borderColor: '#191919'
  }
})

export default Styles