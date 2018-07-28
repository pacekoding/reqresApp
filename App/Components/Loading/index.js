import React, {Component} from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'

class Loading extends Component {
  render() {
    return (
      <View style={{flex:1, width: '100%', backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    )
  }
}


export default Loading
