import { TextField, Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      full_name: userData ? userData.full_name : '',
      email: userData ? userData.email : '',
      user_name: userData ? userData.user_name : '', // Add this line for email
    },
    // ...
  });

  return (
    <>
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="User Name"
            name="user_name"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values ? formik.values.user_name : ''}
          />
        </Grid>
        {/* ... Other fields */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth sx={{ height: '50px' }}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;
