import React from "react"
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import xhr from "@services"

import styles from './styles'

class Data extends React.Component {

  state = {
    data: null,
    isLoading: true,
  }

  async componentDidMount() {
    await this._fetchRemoteData()
  }

  _fetchRemoteData = async () => {
      const {url} = this.props
      const data = await xhr(url, 'GET')
      this.setState({ data, isLoading: false })
  }

  _renderNull = () => null

  _renderError = err => {
    const {renderError} = this.props

    return renderError ? renderError(err) :
    (
      <View style={styles.container}>
          <Text>Sorry, there was an error.</Text>
          <Text>Please try again in another time.</Text>
          <TouchableOpacity onPress={this._fetchRemoteData}><Text style={{color:'#0EC655'}}>try again.</Text></TouchableOpacity>
      </View>
    )
  }

  _renderLoading = () => {
    const {renderLoading} = this.props
    return renderLoading ? renderLoading() : this._renderNull()
  }

  render() {
    const {
      data,
      isLoading,
    } = this.state

    const {
      render
    } = this.props

    const isErrored = data && data.status !== 200 ? true : false

    if (isErrored) {
      return this._renderError({ error: data, reload: this.fetchRemoteData })
    }
    if (isLoading) {
      return this._renderLoading()
    }

    return render({data, reload: this.fetchRemoteData})
  }
}

export default Data
