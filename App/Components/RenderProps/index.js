import React, {Component} from "react"
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import xhr from "@services"

import styles from './styles'

class RenderProps extends Component {

  static defaultProps = {
    method: 'GET',
    body: {},
    url: ''
  }

  state = {
    data: null,
    isLoading: true,
  }

  componentDidMount() {
    this._fetchRemoteData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.url!==this.props.url) {
      console.log('masuk sini');
        this._fetchRemoteData()
    }
  }

  _fetchRemoteData = async () => {
      const {url,body,method} = this.props
      try{
        const data = await xhr(url,body,method)
        if(this.state.data) {
          this.setState(prevState => {
            let newData= prevState.data
            newData.data.page = data.data.page
            newData.data.data = [...newData.data.data, ...data.data.data]
            return {
              data:newData,
              isLoading: false,
            }
          })
        }
        else
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

export default RenderProps
