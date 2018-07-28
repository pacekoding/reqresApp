import React, {Component,Fragment} from 'react'
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native'

import Data from '@data'

import styles from './styles'

class Login extends Component {

  state = {
    visible: false
  }

  _handleModal(){
    this.setState(({visible}) => ({visible: !visible}))
  }

  _renderContent = ({data: {data}}) => {
    console.log('data',data)

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
            <Text style={styles.descText}>Details</Text>
          </View>
          <View>
          </View>
        </View>
      </Fragment>
    )

  }


  render() {

    const { visible} = this.state
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={'type anything for username'}
          placeholderTextColor={'#bdc3c7'}
          textContentType={"username"}
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textInput}
          placeholder={'type anything for password'}
          placeholderTextColor={'#bdc3c7'}
          textContentType={"password"}
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.button} onPress={() => this._handleModal()}>
          <Text style={styles.menuText}>LOGIN</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => this._handleModal()}>

          <View style={styles.modalContainer}>
            <Data
              url={'https://reqres.in/api/login'}
              render={this._renderContent}
            />
          </View>
        </Modal>

      </View>
    );
  }
}

export default Login
