import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  NativeModules,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import LinearGradient from 'react-native-linear-gradient'
import Auth0 from 'react-native-auth0'

// Styles
import styles from './Styles/LoginScreenStyle'

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      splash: true
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('@GradientShowcase:credentials')
      .then((creds) => {
        const credentials = JSON.parse(creds)
        if(credentials){
          this.goToHomeScreen()
        }else{
          LayoutAnimation.spring();
          this.setState({splash: false})
        }
      })
      .catch(()=> console.log(`couldn't retrieve credentials`))
  }

  goToHomeScreen = () => {
    this.props.navigation.navigate('PrimaryNav')
  }

  login = () => {
    const auth0 = new Auth0({
      domain: 'x-squad.eu.auth0.com',
      clientId: 'L0MafS6gvUovNlXAlYLXq2KBQHUtmua3'
    }).webAuth
      .authorize({
        scope: 'openid profile email',
        audience: 'https://x-squad.eu.auth0.com/userinfo',
        // connection: 'instagram',
        // prompt: 'login'
      })
      .then(credentials =>
        {
          console.log(credentials)
          // Successfully authenticated
          // Store the credentials
          AsyncStorage.setItem('@GradientShowcase:credentials', JSON.stringify(credentials))
            .then((creds) => this.goToHomeScreen())
            .catch(()=> console.log(`couldn't store credentials`))
        }
      )
      .catch(error => console.log(error));
  }

  render () {
    const { splash } = this.state

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
                <Text style={[styles.headerText, styles.companyFont, styles.boldFont,]}>Gradient</Text>
                <Text style={styles.headerText}>Showcase</Text>
              </View>
            </LinearGradient>

            {!splash &&
              <View style={styles.centered}>
                <TouchableOpacity style={styles.button} onPress={this.login}>
                  <Text style={styles.buttonText}>Login with instagram</Text>
                </TouchableOpacity>
                <Text style={styles.disclamer}>
                  by clicking login you are agreeing to the terms of use and privacy policy sign up
                </Text>
              </View>
            }

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

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
