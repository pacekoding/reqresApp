import React, {Component} from "react"
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import xhr from "@services"

import styles from './styles'

class Data extends Component {

  static defaultProps = {
    method: 'GET',
    body: {},
    url: ''
  }

  state = {
    data: null,
    isLoading: true,
  }

  async componentDidMount() {
    await this._fetchRemoteData()
  }

  _fetchRemoteData = async () => {
      const {url,body,method} = this.props
      try{
        const data = await xhr(url,body,method)
        this.setState({ data, isLoading: false })
      }
      catch(e) {
        this.setState({ data:e.response, isLoading: false })
      }

  }

  _renderNull = () => null

  _renderError = err => {
    const {renderError} = this.props

    return renderError ? renderError(err) : this._renderNull()
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
      return this._renderError(data)
    }
    if (isLoading) {
      return this._renderLoading()
    }

    return render(data)
  }
}

export default Data
