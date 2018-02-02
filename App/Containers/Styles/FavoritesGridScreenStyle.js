import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignContent: 'center',
  },
  row: {
    flex: 1,
    minWidth: Metrics.screenWidth / 3 - Metrics.doubleBaseMargin,
    maxWidth: Metrics.screenWidth / 3 - Metrics.doubleBaseMargin,
    backgroundColor: Colors.silver,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    margin: Metrics.baseMargin,
    // padding: 6,
    // paddingVertical: 10,
    borderRadius: Metrics.baseMargin,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
  rowText: {
    padding: 6,
    // paddingVertical: 10,
  },
  boldLabel: {
    fontWeight: 'bold',
    // alignSelf: 'center',
    color: Colors.coal,
    // textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    // textAlign: 'center',
    color: Colors.charcoal,
    fontSize:11,
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  footer: {
    textAlign: 'center',
    color: Colors.charcoal,
  },
  button:{
    backgroundColor:'transparent',
    borderRadius:25,
    width:200,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.7,
  }
})
