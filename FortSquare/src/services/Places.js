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

export const addFavourites = async (id, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/addFavourite`,
      {
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

export const searchAllFavourites = async token => {
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

export const searchParticularPlace = async (coord, text) => {
  try {
    const response = await axios.post(`${BASE_URL}/searchPlace`, {
      latitude: coord.latitude,
      longitude: coord.longitude,
      text: text,
    });
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const getNearCity = async values => {
  try {
    const response = await axios.post(`${BASE_URL}/getNearCity`, {
      latitude: values.latitude,
      longitude: values.longitude,
    });
    return response.data;
  } catch (er) {
    console.log('Error');
  }
};

export const getFavourites = async token => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getFavouriteId`,
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



