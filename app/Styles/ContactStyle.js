import { StyleSheet } from 'react-native'

const ContactStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    paddingBottom: 15,
    height: '100%',
    flex: 1,
  },
  body: {
    paddingHorizontal: 30
  },
  headerContainer: {
    height: 110,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  headerTitle: {
    fontFamily: 'AvenirLTStd-Black',
    fontSize: 25,
    lineHeight: 110,
    color: '#022C43'
  },
  picker: {
    backgroundColor: 'white',
    marginVertical: 7
  },
  textAreaContainer: {
    height: '50%'
  }
});
export default ContactStyle;