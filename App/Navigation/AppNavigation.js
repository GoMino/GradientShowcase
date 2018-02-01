import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import GradientsGridScreen from '../Containers/GradientsGridScreen'
import FavoritesGridScreen from '../Containers/FavoritesGridScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  GradientsGridScreen: {
    screen: GradientsGridScreen,
    navigationOptions: {
      title: 'Showcase',
      headerTitleStyle: {
	    	fontWeight: 'bold',
	    },
      // headerStyle: {
	    // 	display: 'none',
	    // },
    }
  },
  FavoritesGridScreen: {
    screen: FavoritesGridScreen,
    navigationOptions: {
      title: 'Favorites',
      headerTitleStyle: {
	    	fontWeight: 'bold',
	    }
    }
  },
}, {
  // Default config for all screens
  initialRouteName: 'GradientsGridScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})


const ModalNav = StackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
    LaunchScreen: { screen: LaunchScreen },
    LoginScreen: { screen: LoginScreen }
  },
  {
    initialRouteName: 'LoginScreen',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default ModalNav
