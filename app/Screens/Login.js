import React, { Component } from 'react'
import { View, Image, ImageBackground, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import LoginStyle from '../Styles/LoginStyle'
import AsyncStorage from '@react-native-community/async-storage'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

class Login extends Component {

  constructor(props) {
    super(props);
  }

  _goToHome = () => {
    AsyncStorage.setItem('isLogged', '1').then(() => {
      this.props.navigation.navigate('Home')
    })
  }

  _fbLogin = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              AsyncStorage.multiSet([['loginType', 'facebook'], ['fbToken', data.accessToken.toString()]]).then(() => {
                this._goToHome()
              })
            }
          )
        }
      },
      (error) => {
        Alert.alert('Upss...', 'Hubo un problema iniciando tu sesion de facebook, intenta de nuevo.')
      }
    );
  }

  render() {
    return (
      <ImageBackground source={require('../Assets/Login.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={LoginStyle.topBlock}>
          <Image source={require('../Assets/Logo1.png')} />
        </View>
        <View style={LoginStyle.bottomBlock}>
          <Text style={LoginStyle.welcomeText}>BIENVENIDOS</Text>
          <Button
            title='INICIAR'
            buttonStyle={LoginStyle.loginFbButton}
            titleStyle={LoginStyle.welcomeText}
            icon={
              <Icon
                name="facebook"
                size={LoginStyle.welcomeText.fontSize}
                color="white"
              />
            }
            iconRight
            onPress={() => this._fbLogin()}
          />
          <Button
            title='INGRESAR SIN REGISTRO'
            buttonStyle={LoginStyle.loginButton}
            titleStyle={LoginStyle.welcomeText}
            onPress={this._goToHome}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Login;