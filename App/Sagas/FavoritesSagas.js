/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select } from 'redux-saga/effects'
import { is } from 'ramda'
import FavoritesActions, { FavoritesSelectors } from '../Redux/FavoritesRedux'

export const getPayload = FavoritesSelectors.getPayload

export function * getFavorites (action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(UserSelectors.getData)
  // make the call to the api
  // const response = yield call(api.getuser, data)
  const favorites = yield select(getPayload)

  if (!is(Array, favorites)) {
    yield put(FavoritesActions.getFavoritesSuccess([]))
  }else{
    yield put(FavoritesActions.getFavoritesSuccess(favorites))
  }

  // // success?
  // if (response.ok) {
  //   // You might need to change the response here - do this with a 'transform',
  //   // located in ../Transforms/. Otherwise, just pass the data back from the api.
  //   yield put(UserActions.userSuccess(response.data))
  // } else {
  //   yield put(UserActions.userFailure())
  // }
}

export function * addFavorite (action) {
  const { item } = action
  // const favorites = yield select(getPayload)
  yield put(FavoritesActions.addFavoriteSuccess(item))
}
