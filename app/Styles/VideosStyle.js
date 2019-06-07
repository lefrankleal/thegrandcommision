import { StyleSheet } from 'react-native'

const VideosStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    height: '100%',
    flex: 1,
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
  videoContainer: {
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  videoInfo: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  videoInfoText: {
    width: '54%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingLeft: '5%',
    flex: 1,
    justifyContent: 'center'
  },
  videoTitle: {
    fontWeight: 'bold'
  },
  videoWho: {
    fontWeight: 'bold'
  }
});
export default VideosStyle;