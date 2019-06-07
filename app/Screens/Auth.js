import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View } from 'react-native'
import FBSDK from 'react-native-fbsdk'

class Auth extends Component {

  constructor(props) {
    super(props);
  }

  _checkLogin = () => {
    FBSDK.AccessToken.refreshCurrentAccessTokenAsync().then(
      (resp) => {
        FBSDK.AccessToken.getCurrentAccessToken().then(
          (data) => {
            if (data && data.accessToken.toString()) {
              this.props.navigation.navigate('Home')
            } else {
              AsyncStorage.setItem('isLogged', '0').then(() => {
                this.props.navigation.navigate('Login')
              })
            }
          },
          (err) => {
            AsyncStorage.setItem('isLogged', '0').then(() => {
              this.props.navigation.navigate('Login')
            })
          }
        )
      },
      (err) => {
        AsyncStorage.setItem('isLogged', '0').then(() => {
          this.props.navigation.navigate('Login')
        })
      }
    )
  }

  componentDidMount = () => {
    this._checkLogin()
  }

  render() {
    return (
      <View></View>
    )
  }
}

export default Auth;