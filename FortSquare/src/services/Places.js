const BASE_URL = 'https://four-square-three.vercel.app/api';
import axios from 'axios';

export const getNearPlace = async values => {
  try {
    const response = await axios.post(`${BASE_URL}/getNearPlace`, {
      latitude: values.latitude,
      longitude: values.longitude,
    });
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const getParameter = async (apiStat, values) => {
  try {
    const response = await axios.post(`${BASE_URL}/${apiStat}`, {
      latitude: values.latitude,
      longitude: values.longitude,
    });
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const getParticularInfo = async id => {
  try {
    const response = await axios.post(`${BASE_URL}/getParticularPlace`, {
      _id: id,
    });
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const addFavourites = async (id,token) => {
  try {
    const response = await axios.post(`${BASE_URL}/addFavourite`, {
      _id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    );
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const searchAllFavourites = async (token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/searchFavourite`,
      {
        text: '',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

