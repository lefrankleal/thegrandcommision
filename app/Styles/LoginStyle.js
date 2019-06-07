import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const ContactStyle = StyleSheet.create({
  topBlock: {
    alignItems: 'center',
    top: height * 0.07,
  },
  bottomBlock: {
    paddingHorizontal: 35,
    width: '100%',
    position: 'absolute',
    bottom: height * 0,
    textAlign: 'center'
  },
  welcomeText: {
    fontFamily: 'AvenirLTStd-Black',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    paddingVertical: 20
  },
  loginFbButton: {
    borderRadius: 50,
    backgroundColor: '#019BD0',
    width: '100%',
  },
  loginButton: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    width: '100%',
  },
});
export default ContactStyle;