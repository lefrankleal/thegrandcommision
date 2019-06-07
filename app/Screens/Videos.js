import React, { Component } from 'react'
import { FlatList, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import VideosStyle from '../Styles/VideosStyle'
import { YouTubeStandaloneAndroid } from 'react-native-youtube'
import Globals from '../config/Globals'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Videos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: {},
      channelId: 'UCqkHcmXg2Cnccr1sqN_w0qA',
      refreshing: false,
      video: '',
      playerVisible: false
    }
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = () => {
    this.setState({ refreshing: true }, () => (
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${Globals.YOUTUBE_APIKEY}&channelId=${this.state.channelId}&part=snippet,id&order=date&maxResults=20`, {
        method: 'GET'
      }).then(res => {
        return res.json()
      }).then((res) => {
        this.setState({ videos: res.items.filter(data => data.id.kind === 'youtube#video') }, () => (
          this.setState({ refreshing: false })
        ))
      }).catch((error) => {
        console.log('catch')
      })
    ))
  }

  render() {
    return (
      <View style={VideosStyle.container}>
        <Header
          containerStyle={VideosStyle.headerContainer}
          placement="left"
          centerComponent={{ text: 'PREDICAS', style: VideosStyle.headerTitle }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
          <FlatList
            data={this.state.videos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
              ({ item, index }) => (
                <View key={index} style={VideosStyle.videoContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      YouTubeStandaloneAndroid.playVideo({
                        apiKey: Globals.YOUTUBE_APIKEY,
                        videoId: item.id.videoId,
                        autoplay: true
                      })
                        .then(() => console.log('Android Standalone Player Finished'))
                        .catch(errorMessage => this.setState({ error: errorMessage }))
                    }>
                    <View
                      style={VideosStyle.videoInfo}>
                      <Image
                        resizeMode='cover'
                        style={{ width: '45%', height: item.snippet.thumbnails.medium.height }}
                        source={{ uri: item.snippet.thumbnails.medium.url }}
                      />
                      <View style={VideosStyle.videoInfoText}>
                        <Text style={VideosStyle.videoTitle}>
                          {item.snippet.title.split('|')[0].trim()}
                        </Text>
                        {item.snippet.title.split('|')[1] &&
                          <View>
                            <Text>{'\n'}</Text>
                            <Text>Pastor</Text>
                            <Text style={VideosStyle.videoWho}>
                              {item.snippet.title.split('|')[1].trim()}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          />
        </ScrollView>
      </View>
    )
  }
}

export default Videos;