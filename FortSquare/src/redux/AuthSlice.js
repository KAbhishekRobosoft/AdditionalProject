import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userCredentials: {},
    isLoading: null,
    stateLoader:null,
    userToken: null,
    initialState:false
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

    desetLoading: state => {
      state.isLoading = false;
    },

    setLoader: state => {
      state.stateLoader = true;
    },

    setInitialState:(state,action)=>{
      state.initialState= !action.payload
    },

    desetLoader: state => {
      state.stateLoader = false;
    },
  },
});

export const {login, logOut, setToken, setImage, setLoading, desetLoading,setLoader,desetLoader,setInitialState} =
  authenticateSlice.actions;
export default authenticateSlice.reducer;
