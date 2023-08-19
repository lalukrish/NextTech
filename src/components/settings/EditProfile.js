import { TextField, Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../redux/slices/userProfileSlice';

// ... (imports and other code)

const EditProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile()).then((response) => {
      console.log('hi', response);
    });
  }, []);

  const userData = useSelector((state) => state.myprofile?.successMessage?.data?.user);

  const updateProfile = async (formikValues) => {
    console.log('submit');
    const id = localStorage.getItem('USER_ID');

    const response = await axios.put(
      `${process.env.REACT_APP_NEXTTECH_DEV_URL}/edit-profile
        `,
      {
        id,
        full_name: formikValues.full_name,
      },
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('res');

    return response;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      full_name: userData ? userData.full_name : '',
      email: userData ? userData.email : '',
      user_name: userData ? userData.user_name : '', // Add this line for email
    },
    onSubmit: async () => {
      console.log('submit');

      updateProfile(formik.values).then((response) => {
        console.log('hi', response);
      });
    },
  });
  console.log('hi');

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            placeholder="Full Name"
            name="full_name"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values ? formik.values.full_name : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Email"
            name="email"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values ? formik.values.email : ''}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="User Name"
            name="user_name"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values ? formik.values.user_name : ''}
            disabled
          />
        </Grid>
        {/* ... Other fields */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth sx={{ height: '50px' }} type="submit">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditProfile;
