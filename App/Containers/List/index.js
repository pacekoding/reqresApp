import React, {Component,Fragment} from 'react'
import {
  Text,
  View,
  Image,
  FlatList
} from 'react-native'

import Data from '@data'
import Loading from '@loading'

import styles from './styles'

class List extends Component {

  state = {
    visible: false,
    data: [
      {
            "id": 1,
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
            "id": 2,
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
            "id": 3,
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }
    ]
  }

  _handleModal(){
    this.setState(({visible}) => ({visible: !visible}))
  }

  _renderLoading = () => (<Loading />)

  _renderItem = ({item}) => {
      return (
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{uri: item.avatar}} />
          <View style={{flex:1}}>
            <Text style={styles.titleText}>{item.first_name} {item.last_name}</Text>
          </View>
        </View>
      )
  }

  _keyExtractor = (item) => String(item.id)

  _renderContent = ({data: {data}}) => {
    return (
        <View style={styles.bodyContainer}>
          <View style={styles.header}>
            <Text style={styles.titleText}>LIST USER</Text>
          </View>
          <FlatList
            data={data.data}
            extraData={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
    )
  }


  render() {
    const { visible} = this.state
    return (
      <View style={styles.container}>
        <Data
          url={'https://reqres.in/api/users?page=1'}
          render={this._renderContent}
          renderLoading={this._renderLoading}
        />
      </View>
    );
  }
}

export default List
