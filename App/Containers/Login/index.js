import React, {Component,Fragment} from 'react'
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native'

import RenderProps from '@data'
import Loading from '@loading'

import styles from './styles'

class Login extends Component {

  state = {
    visible: false,
    password: '',
    email: ''
  }

  _handleModal(){
    this.setState(({visible}) => ({visible: !visible}))
  }

  _renderLoading = () => (<Loading />)

  _renderContent = (data) => {
    console.log('data',data);
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => this._handleModal()}>
          <Text style={styles.closeText}>CLOSE</Text>
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <View style={styles.headerModal}>
            <Text style={styles.titleText}>SUCCESS</Text>
            <View style={{marginTop:20,justifyContent:'center', alignItems: 'center'}}>
              <Text style={styles.descText}>{data.data.token}</Text>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.buttonText}>HOME</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>

          </View>
        </View>
      </Fragment>
    )

  }

  _renderError = (error) => {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => this._handleModal()}>
          <Text style={styles.closeText}>CLOSE</Text>
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <View style={styles.headerModal}>
            <Text style={styles.titleErrorText}>ERROR</Text>
            <View style={{marginTop:20,justifyContent:'center', alignItems: 'center'}}>
              <Text style={styles.errorText}>{error.data.error}</Text>
            </View>
          </View>
          <View>
          </View>
        </View>
      </Fragment>
    )

  }

  render() {

    const {
      visible,
      email,
      password
    } = this.state

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={'type anything for email'}
          placeholderTextColor={'#bdc3c7'}
          underlineColorAndroid={"transparent"}
          onChangeText={(email) => this.setState({email})}
        />

        <TextInput
          style={styles.textInput}
          placeholder={'type anything for password'}
          placeholderTextColor={'#bdc3c7'}
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
          onChangeText={(password) => this.setState({password})}
        />

        <TouchableOpacity style={styles.button} onPress={() => this._handleModal()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => this._handleModal()}>

          <View style={styles.modalContainer}>
            <RenderProps
              url={'https://reqres.in/api/login'}
              body={{email,password}}
              method={'POST'}
              render={this._renderContent}
              renderLoading={this._renderLoading}
              renderError = {this._renderError}
            />
          </View>
        </Modal>

      </View>
    );
  }
}

export default Login
