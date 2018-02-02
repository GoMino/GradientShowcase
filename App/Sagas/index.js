import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import GradientsAPI from '../Services/GradientsApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { GradientsTypes } from '../Redux/GradientsRedux'
import { FavoritesTypes } from '../Redux/FavoritesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getGradients } from './GradientsSagas'
import { getFavorites, addFavorite } from './FavoritesSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const gradientsApi = DebugConfig.useFixtures ? FixtureAPI : GradientsAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(GradientsTypes.GRADIENTS_REQUEST, getGradients, gradientsApi),

    takeLatest(FavoritesTypes.GET_FAVORITES, getFavorites),
    takeLatest(FavoritesTypes.ADD_FAVORITE, addFavorite)
  ])
}
