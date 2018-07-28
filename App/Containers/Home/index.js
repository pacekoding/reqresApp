import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import styles from './styles'

class Home extends Component {

  _navigateScreen(screen) {
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuContainer} onPress={() => this._navigateScreen('LoginScreen')}>
          <Text style={styles.menuText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuContainer} onPress={() => this._navigateScreen('ListScreen')}>
          <Text style={styles.menuText}>LIST</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home
