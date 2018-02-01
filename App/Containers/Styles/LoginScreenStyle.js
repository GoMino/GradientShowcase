import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex:1,
    paddingBottom: Metrics.section,
    // backgroundColor: Colors.background,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  button: {
    height: 45,
    borderRadius: 25,
    marginHorizontal: Metrics.section,
    marginTop: Metrics.section,
    marginBottom: Metrics.baseMargin,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    width:250,
    // flexGrow:1
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    backgroundColor:'transparent',
  },
  header:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
  },
  disclamer: {
    width:250,
    alignItems:'center',
    textAlign:'center',
    fontSize: 13,
    color: Colors.charcoal,
  },
  headerText: {
    color: 'white',
    fontSize: 40
  },
  companyFont: {
    fontSize:60,
  },
  boldFont: {
    fontWeight: '600',
  }
})
