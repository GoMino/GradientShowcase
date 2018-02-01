import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import LinearGradient from 'react-native-linear-gradient';

// Styles
import styles from './Styles/LoginScreenStyle'

export default class LoginScreen extends Component {

  goToHomeScreen = () => {
    this.props.navigation.navigate('PrimaryNav');
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle='light-content'
          translucent={false}
          hidden
          animated
          showHideTransition='slide'/>

          <View style={styles.container}>

            <LinearGradient
              start={{x: 0.1, y: 0.25}} end={{x: 0.9, y: 1.0}}
              colors={['#3625AC', '#7F47BD', '#B57CB7']}
              style={[styles.header]}>
              <View style={styles.textContainer}>
                {/* <Text style={styles.boldFont}>{`Gradient\nShowcase`}</Text> */}
                <Text style={[styles.headerText, styles.companyFont, styles.boldFont,]}>Gradient</Text>
                <Text style={styles.headerText}>Showcase</Text>
              </View>
            </LinearGradient>


            <View style={styles.centered}>
              <TouchableOpacity style={styles.button} onPress={this.goToHomeScreen}>
                <Text style={styles.buttonText}>Login with instagram</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.centered]} >
              <Text style={styles.disclamer}>
                by clicking login you are agreeing to the terms of use and privacy policy sign up
              </Text>
            </View>
          </View>
        </View>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }

  // export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
