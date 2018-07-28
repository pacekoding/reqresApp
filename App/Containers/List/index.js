import React, {Component,Fragment} from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'

import Data from '@data'
import Loading from '@loading'

import styles from './styles'

class List extends Component {

  state = {
    visible: false,
    url: 'https://reqres.in/api/users?page=1'
  }

  _handleModal(){
    this.setState(({visible}) => ({visible: !visible}))
  }

  _renderLoading = () => (<Loading />)

  _renderItem = ({item}) => {
      return (
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{uri: item.avatar}} />
          <View style={{flex:1, marginTop:20}}>
            <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
          </View>
        </View>
      )
  }

  _keyExtractor = (item) => String(item.id)

  _renderContent = ({data}) => {
    return (
        <View style={styles.bodyContainer}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleText}>LIST USER</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={() => {
              this.setState({url:`https://reqres.in/api/users?page=${data.page+1}`})
            }}
          />
        </View>
    )
  }


  render() {
    const { visible, url} = this.state
    return (
      <View style={styles.container}>
        <Data
          url={url}
          render={this._renderContent}
          renderLoading={this._renderLoading}
        />
      </View>
    );
  }
}

export default List
