import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userCredentials: {},
    setCoord: {},
    isLoading: null,
    stateLoader: null,
    userToken: null,
    places: [],
    favourites: [],
    reset: false,
  },

  reducers: {
    logOut: state => {
      state.userToken = null;
    },

    setToken: (state, action) => {
      state.userToken = action.payload;
    },

    setLoading: state => {
      state.isLoading = true;
    },

    setCoordinate: (state, action) => {
      state.setCoord = action.payload;
    },

    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },

    desetLoading: state => {
      state.isLoading = false;
    },

    setReset: state => {
      state.reset = true;
    },

    deSetReset: state => {
      state.reset = false;
    },

    setUserCredentials: (state, action) => {
      state.userCredentials = action.payload;
    },

    setLoader: state => {
      state.stateLoader = true;
    },

    setInitialState: (state, action) => {
      state.initialState = !action.payload;
    },

    desetLoader: state => {
      state.stateLoader = false;
    },
  },
});

export const {
  login,
  logOut,
  setToken,
  setImage,
  setCoordinate,
  setLoading,
  setPlaces,
  desetLoading,
  setLoader,
  desetLoader,
  setInitialState,
  setFavourites,
  setReset,
  deSetReset,
} = authenticateSlice.actions;
export default authenticateSlice.reducer;
