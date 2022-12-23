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
} = authenticateSlice.actions;
export default authenticateSlice.reducer;
