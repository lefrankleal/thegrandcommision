import React, { Component } from 'react'
import { Alert, View, ImageBackground } from 'react-native'
import { Text, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import RadioStyle from '../Styles/RadioStyle'
import TrackPlayer from 'react-native-track-player'

class Radio extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      url: 'http://192.190.87.17:9350/;'
    }
  }

  componentDidMount = () => {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: '0',
        url: this.state.url,
        title: 'La Gran Comisión',
        artist: '',
        artwork: require('../Assets/Radio.jpg')
      });
    });
  }

  _onPress = () => {
    if (this.state.playing === true) {
      TrackPlayer.stop()
      this.setState({ playing: false })
    } else {
      TrackPlayer.play()
      this.setState({ playing: true })
    }
  }

  render() {
    const title = <View>
      <Text style={RadioStyle.titleA}>RADIO</Text>
      <Text style={RadioStyle.titleB}>Dale play y conéctate <Text style={RadioStyle.titleC}>con el cielo</Text></Text>
    </View>
    return (
      <ImageBackground source={require('../Assets/Radio.jpg')} style={{ width: '100%', height: '100%' }}>
        <Header
          containerStyle={RadioStyle.headerContainer}
          placement="left"
          centerComponent={{ text: title }}
        />
        <View style={RadioStyle.playerContainer}>
          <Icon
            name={this.state.playing ? 'pause' : 'play-circle'}
            size={100}
            color='black'
            onPress={() => this._onPress()} />
        </View>
      </ImageBackground>
    );
  }
}

export default Radio;