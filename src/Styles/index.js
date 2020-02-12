import { StyleSheet } from 'react-native'
import Colors from './colors.js'

const Styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderWidth: 3,
    height: 45,
    marginBottom: 10,
    borderRadius: 100,
    paddingHorizontal: 20,
    fontFamily: 'Boston',
    fontSize: 16,
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
    fontSize: 17
  },

  text: {
    fontFamily: 'Boston',
    fontSize: 16
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