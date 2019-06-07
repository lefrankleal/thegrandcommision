import React, { Component } from 'react'
import { Alert, View, Picker, ScrollView, Dimensions } from 'react-native'
import { Input, Button, Header } from 'react-native-elements'
import ContactStyle from '../Styles/ContactStyle'
import RNSmtpMailer from 'react-native-smtp-mailer'
import Globals from '../config/Globals';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headquarters: '',
      name: '',
      number: '',
      topic: ''
    }
  }

  _clearState = () => {
    this.setState({ headquarters: '', name: '', number: '', topic: '' })
  }

  _changeStateValue = (value, index) => {
    this.setState({ [index]: value })
  }

  _validateForm = () => {
    if (this.state.headquarters !== '' && this.state.name !== '' && this.state.number !== '' && this.state.topic !== '') {
      return true
    } else {
      return false
    }
  }

  _chooseRecipient = () => {
    let email = ''
    switch (this.state.headquarters) {
      case 'Bogotá':
        email = 'grancomisioncolombiabarranqui@gmail.com'
        break;
      case 'Ibagué':
        email = 'grancomisioncolombiamedellin@gmail.com'
        break;
      case 'Ibagué Barack':
        email = 'somoslagrancomision@gmail.com'
        break;
      case 'Barranquilla':
        email = 'grancomisioncolombiabucaramang@gmail.com'
        break;
      case 'Bucaramanga':
        email = 'grancomisioncolombiacali@gmail.com'
        break;
      case 'Cali':
        email = 'grancomisioncolombiafundacion@gmail.com'
        break;
      case 'Villvicencio ':
        email = 'grancomisioncolombiaibague@gmail.com'
        break;
      case 'Rioahcha':
        email = 'marcesalamanca82@gmail.com'
        break;
      case 'Popayan':
        email = 'grancomisioncolombiamanizales@gmail.com'
        break;
      case 'Pailitas':
        email = 'grancomisioncolombiapailitas@gmail.com'
        break;
      case 'Bello':
        email = 'grancomisioncolombiapopayan@gmail.com'
        break;
      case 'Fundación':
        email = 'grancomisioncolombiariohacha@gmail.com'
        break;
      case 'Menizales':
        email = 'grancomisioncolombiavalledupar@gmail.com'
        break;
      case 'Velledupar':
        email = 'Grancomisioncolombiavillavicen@gmail.com'
        break;
      default:
        email = Globals.SMPT_USER
        break;
    }

    return email
  }

  _sendMail = () => {
    recipient = this._chooseRecipient()
    if (this._validateForm()) {
      RNSmtpMailer.sendMail({
        mailhost: Globals.SMPT_HOST,
        port: "465",
        ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
        username: Globals.SMPT_USER,
        password: Globals.SMPT_PASSWORD,
        from: Globals.SMPT_USER,
        recipients: recipient,
        subject: "Tienes un nuevo mensaje",
        attachmentPaths: [],
        attachmentNames: [],
        attachmentTypes: [],
        htmlBody: `
        <h4>Sede: ${this.state.headquarters}</h4>
        <h4>Nombre: ${this.state.name}</h4>
        <h4>Sede: ${this.state.number}</h4>
        <p>${this.state.topic}</p>
        `,
      }).then(
        success => {
          this._clearState()
          Alert.alert('Perfecto!', 'Se ha enviado tu petición')
        }
      ).catch(
        err => {
          Alert.alert('Perfecto!', 'Lo sentimos, hubo un error enviado tu petición')
        }
      )
    }
  }

  render() {
    return (
      <View style={ContactStyle.container}>
        <Header
          containerStyle={ContactStyle.headerContainer}
          placement="left"
          centerComponent={{ text: 'PETICIONES', style: ContactStyle.headerTitle }}
        />
        <ScrollView style={ContactStyle.body}>
          <Picker
            style={ContactStyle.picker}
            prompt='Elige una sede'
            selectedValue={this.state.headquarters}
            onValueChange={(v) => this._changeStateValue(v, 'headquarters')}>
            <Picker.Item label="Elige una sede" value="" />
            <Picker.Item label="Bogotá" value="Bogotá" />
            <Picker.Item label="Ibagué" value="Ibagué" />
            <Picker.Item label="Ibagué Barack" value="Ibagué Barack" />
            <Picker.Item label="Barranquilla" value="Barranquilla" />
            <Picker.Item label="Bucaramanga" value="Bucaramanga" />
            <Picker.Item label="Cali" value="Cali" />
            <Picker.Item label="Villvicencio " value="Villvicencio " />
            <Picker.Item label="Rioahcha" value="Rioahcha" />
            <Picker.Item label="Popayan" value="Popayan" />
            <Picker.Item label="Pailitas" value="Pailitas" />
            <Picker.Item label="Bello" value="Bello" />
            <Picker.Item label="Fundación" value="Fundación" />
            <Picker.Item label="Menizales" value="Menizales" />
            <Picker.Item label="Velledupar" value="Velledupar" />
          </Picker>
          <Input
            value={this.state.name}
            placeholder='Nombre'
            placeholderTextColor='#9B9B9B'
            underlineColorAndroid='transparent'
            onChangeText={(v) => this._changeStateValue(v, 'name')}
          />
          <Input
            value={this.state.number}
            placeholder='Número'
            placeholderTextColor='#9B9B9B'
            underlineColorAndroid='transparent'
            keyboardType='phone-pad'
            onChangeText={(v) => this._changeStateValue(v, 'number')}
          />
          <Input
            value={this.state.topic}
            placeholder='Escribe tu petición'
            placeholderTextColor='#9B9B9B'
            multiline={true}
            numberOfLines={8}
            underlineColorAndroid='transparent'
            inputContainerStyle={{ height: Dimensions.get('window').height * 0.4 }}
            onChangeText={(v) => this._changeStateValue(v, 'topic')}
          />
          <Button
            type='solid'
            title='Enviar'
            onPress={() => this._sendMail()}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Contact;