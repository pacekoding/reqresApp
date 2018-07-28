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
            {
              data.data.map((item,index) => {
                return (
                  <View key={String(index)} style={styles.itemContainer}>
                    <View style={[styles.circle,{backgroundColor:item.color}]}/>
                    <Text style={styles.titleText}>{item.name}</Text>
                    <View>
                      <Text style={styles.descText}>{item.pantone_value}</Text>
                      <Text style={styles.descText}>{item.year}</Text>
                    </View>
                  </View>
                )
              })
            }
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
