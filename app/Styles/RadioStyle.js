import { StyleSheet } from 'react-native'

const RadioStyle = StyleSheet.create({
  headerContainer: {
    height: 110,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  titleA: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 25,
    color: '#022C43'
  },
  titleB: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 18,
    color: '#022C43'
  },
  titleC: {
    color: '#4A8FE2',
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 18
  },
  playerContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default RadioStyle;