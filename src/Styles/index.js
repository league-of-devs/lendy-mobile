import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Colors from './colors.js'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#EEEEEE'
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

  card: {
    maxWidth: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    minHeight: 100,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    alignItems: 'flex-start'
  },

  cardTitle: {
    fontFamily: 'Boston-Semibold',
    fontSize: 24,
    marginBottom: 5
  },

  text: {
    fontFamily: 'Boston',
    fontSize: 18,
    marginBottom: 10
  },

  lightText: {
    fontFamily: 'Boston-Light',
    fontSize: 15,
    marginBottom: 5
  },

  tag: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.cyan,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5
  },

  tagText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Boston-Semibold',
    fontSize: 10
  }, 

  tagsContainer: {
    marginTop: 10,
    flexDirection: 'row'
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