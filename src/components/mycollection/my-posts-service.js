import axios from 'axios';
import React from 'react';

const myPostsSservice = async () => {
  const userId = localStorage.getItem('USER_ID');
  try {
    const response = await axios.get(`${process.env.REACT_APP_NEXTTECH_DEV_URL}/get-my-posts/${userId}`);
    console.log('get all', response);
    return response;
  } catch (error) {
    console.log('error is ', error);
    return error;
  }
};

export default myPostsSservice;
