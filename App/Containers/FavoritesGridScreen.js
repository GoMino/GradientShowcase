import React from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FavoritesActions from '../Redux/FavoritesRedux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/FavoritesGridScreenStyle'
import { ApplicationStyles, Metrics, Colors } from '../Themes'
import buttonStyles from '../Components/Styles/RoundedButtonStyles'

class GradientsGridScreen extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {}

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
          start={{x: 1.0, y: 0.2}} end={{x: 1.0, y: 1.0}}
          locations={[0,0.7]}
          colors={['#E74958', '#A41428']}
          style={{
            overflow: 'hidden',
            borderTopLeftRadius: Metrics.baseMargin,
            borderTopRightRadius: Metrics.baseMargin,
            width:'auto',
            height:100,
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
            onPress={() => this.props.removeFavorite(item) } >
            <Icon name='star' size={30} color='orange' style={{marginHorizontal: 5}} />
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

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.favorites}
          renderItem={this.renderRow}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          // ListHeaderComponent={this.renderHeader}
          // ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={{
          ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end', alignItems: 'center', zIndex: 10}}
        pointerEvents='box-none'>
          <TouchableOpacity onPress={() => this.props.clearFavorites()}>
            <LinearGradient
              start={{x: 0.5, y: 1.0}} end={{x: 0.9, y: 1.0}}
              locations={[0,1.0]}
              colors={['#E74958', '#A41428']}
              style={[buttonStyles.button, styles.button, {
                marginBottom: 30,
              }]}>
              <Text style={buttonStyles.buttonText}>Clear All</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (item) => dispatch(FavoritesActions.removeFavoriteSuccess(item)),
    clearFavorites: () => dispatch(FavoritesActions.clearFavoritesSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GradientsGridScreen)
