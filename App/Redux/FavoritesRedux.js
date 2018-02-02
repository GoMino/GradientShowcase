import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getFavorites: ['data'],
  getFavoritesSuccess: ['payload'],
  getFavoritesFailure: null,
  addFavorite: ['item'],
  addFavoriteSuccess: ['item'],
  addFavoriteFailure: null,
  removeFavorite: ['item'],
  removeFavoriteSuccess: ['item'],
  removeFavoriteFailure: null,
  clearFavorites: null,
  clearFavoritesSuccess: null,
  clearFavoritesFailure: null,
})

export const FavoritesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const FavoritesSelectors = {
  getData: state => state.favorites.data,
  getPayload: state => state.favorites.payload
}

/* ------------- Reducers ------------- */

// request the data from an api
export const getFavorites = (state, { data }) =>
  state.merge({ fetching: true, data })

// successful api lookup
export const getFavoritesSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const getFavoritesFailure = state =>
  state.merge({ fetching: false, error: true })


// request the data from an api
export const addFavorite = (state, { item }) =>
  state.merge({ fetching: true, data: item})

// successful api lookup
export const addFavoriteSuccess = (state, action) => {
  const { item } = action
  return state.merge({ fetching: false, error: null, payload: state.payload.concat([item]) })
}

// Something went wrong somewhere.
export const addFavoriteFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// request the data from an api
export const removeFavorite = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const removeFavoriteSuccess = (state, action) => {
  const { item } = action
  return state.merge({ fetching: false, error: null, payload: state.payload.filter(element => element !== item) })
}

// Something went wrong somewhere.
export const removeFavoriteFailure = state =>
state.merge({ fetching: false, error: true, payload: null })

// request the data from an api
export const clearFavorites = (state, { data }) =>
state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const clearFavoritesSuccess = state => {
  return state.merge({ fetching: false, error: null, payload: [] })
}

// Something went wrong somewhere.
export const clearFavoritesFailure = state =>
state.merge({ fetching: false, error: true })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FAVORITES]: getFavorites,
  [Types.GET_FAVORITES_SUCCESS]: getFavoritesSuccess,
  [Types.GET_FAVORITES_FAILURE]: getFavoritesFailure,
  [Types.ADD_FAVORITE]: addFavorite,
  [Types.ADD_FAVORITE_SUCCESS]: addFavoriteSuccess,
  [Types.ADD_FAVORITE_FAILURE]: addFavoriteFailure,
  [Types.REMOVE_FAVORITE]: removeFavorite,
  [Types.REMOVE_FAVORITE_SUCCESS]: removeFavoriteSuccess,
  [Types.REMOVE_FAVORITE_FAILURE]: removeFavoriteFailure,
  [Types.CLEAR_FAVORITES]: clearFavorites,
  [Types.CLEAR_FAVORITES_SUCCESS]: clearFavoritesSuccess,
  [Types.CLEAR_FAVORITES_FAILURE]: clearFavoritesFailure
})
