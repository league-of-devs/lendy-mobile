import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Colors from './colors.js'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },

  start: {
    alignSelf: 'flex-start'
  },

  end: {
    alignSelf: 'flex-end'
  },

  center: {
    alignSelf: 'center'
  }, 

  stretch: {
    alignSelf: 'stretch'
  },

  star: {
    alignSelf: 'center'
  },

  circle: {
    borderRadius: 100,
    width: 45
  },

  shadow: {
    elevation: 5
  },  

  switch: {
    width: '100%', 
    height: 42, 
    marginBottom: 10, 
    borderRadius: 100, 
    borderWidth: 2, 
    borderColor: Colors.white, 
    flexDirection: 'row', 
    overflow: 'hidden', 
    backgroundColor: '#fff'
  },

  switchOption: {
    width: '50%', 
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center', 
    height: 45, 
    marginTop: -4, 
    // marginLeft: -2, 
    paddingTop: 5,
  },

  header: {
    paddingHorizontal: 10,
    height: 80,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center'
    // flexGrow: 1,
  },

  menuIcon: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: -5
  },
  
  menuLogo: {
    maxHeight: 32,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center'
  },  

  sideBarButton: {
    marginHorizontal: 20,
    marginVertical: 8,
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
    borderRadius: 100,
    elevation: 5,
    minWidth: 120
  },

  buttonText: {
    textAlign: 'center',
    lineHeight: 45,
    color: Colors.cyan,
    fontFamily: 'Boston-Bold',
    fontSize: 18
  },

  padding: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },

  card: {
    width: Dimensions.get('screen').width - 20,
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
    fontSize: 26,
    marginBottom: 5,
    alignSelf: 'center'
  },

  text: {
    fontFamily: 'Boston',
    fontSize: 18,
    marginBottom: 10
  },

  white: {
    color: '#fff'
  },

  big: {
    fontSize: 24
  },

  semiBold: {
    fontFamily: 'Boston-Semibold'
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