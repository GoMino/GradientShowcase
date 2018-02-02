import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
  StatusBar,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GradientsActions from '../Redux/GradientsRedux'
import FavoritesActions from '../Redux/FavoritesRedux'
import ReduxPersist from '../Config/ReduxPersist'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/GradientsGridScreenStyle'
import { ApplicationStyles, Metrics, Colors } from '../Themes'
import buttonStyles from '../Components/Styles/RoundedButtonStyles'

class GradientsGridScreen extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {}

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Warning',
            'Do you want to logout ?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                navigation.state.params.onLogout()
                navigation.dispatch(NavigationActions.back())
              }},
            ],
            { cancelable: false }
          )
        }} >
          <Icon name='logout' size={30} style={{marginHorizontal: 10}} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount () {
    this.props.navigation.setParams({
      onLogout: this.logout.bind(this)
    })
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
      this.props.requestGradients()
      this.props.getFavorites()
    // }
  }

  toggleFavorite = (item) => {
    console.log(`toggleFavorite :${item.title}`)
    let {favorites} = this.props

    if(this.isFavorite(item)){
      this.props.removeFavorite(item)
    }else{
      this.props.addFavorite(item)
    }
  }

  isFavorite = (item) => {
    let {favorites} = this.props
    return favorites && favorites.some(e => e.id == item.id )
  }

  logout = () => {
    this.props.clearFavorites()
    AsyncStorage.removeItem('@GradientShowcase:credentials')
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow = ({item}) => {
    return (
      <View style={styles.row}>
        <LinearGradient
          start={{x: 1.0, y: 0.1}} end={{x: 1.0, y: 1.0}}
          locations={[0,0.7]}
          colors={['#E74958','#A41428']}
          style={{
            overflow: 'hidden',
            borderTopLeftRadius: Metrics.baseMargin,
            borderTopRightRadius: Metrics.baseMargin,
            // width:'auto',
            height:100,
            // flex:1,
            // alignContent:'flex-end',
            justifyContent:'flex-end',
          }}>
          <TouchableOpacity
            style={{
              // flexGrow:0,
              // flexShrink:0,
              // flexBasis:'auto'
              // width:'auto'
              backgroundColor:'transparent',
              alignSelf:'flex-end'
            }}
            onPress={ () => this.toggleFavorite(item) }>
            <Icon name={this.isFavorite(item)?'star':'star-outline'} size={30} color='orange' style={{marginHorizontal: 5}} />
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.rowText}>
          <Text style={styles.boldLabel}>{item.title}</Text>
          <Text style={styles.label}>{item.description}</Text>
        </View>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.footer]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  openFavorites = () => {
    this.props.navigation.navigate('FavoritesGridScreen');
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          translucent={false}
          hidden={false}
          animated
          showHideTransition='slide'
        />
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.dataObjects}
          renderItem={this.renderRow}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          // ListHeaderComponent={this.renderHeader}
          // ListFooterComponent={this.renderFooter}
          // ItemSeparatorComponent={this.renderSeparator}
          extraData={this.props.favorites}
        />
        <View style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'flex-end', alignItems: 'center', zIndex: 10}}
          pointerEvents='box-none'>
          <TouchableOpacity onPress={this.openFavorites}>
            <LinearGradient
              start={{x: 0.2, y: 1.0}} end={{x: 1.0, y: 1.0}}
              locations={[0,0.7,1.0]}
              colors={['#3625AC', '#7F47BD', '#B57CB7']}
              style={[buttonStyles.button, styles.button, {
                marginBottom: 30,
              }]}>
              <Text style={buttonStyles.buttonText}>Show all my Favorites</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataObjects: state.gradients.payload,
    favorites: state.favorites.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestGradients: () => dispatch(GradientsActions.gradientsRequest()),
    getFavorites: () => dispatch(FavoritesActions.getFavorites()),
    addFavorite: (item) => dispatch(FavoritesActions.addFavorite(item)),
    removeFavorite: (item) => dispatch(FavoritesActions.removeFavoriteSuccess(item)),
    clearFavorites: () => dispatch(FavoritesActions.clearFavoritesSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GradientsGridScreen)
