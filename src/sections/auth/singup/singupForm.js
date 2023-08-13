import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { values } from 'lodash';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { SignupUser } from '../../../redux/slices/userSignupSlice';

const SingupForm = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    full_name: '',
    user_name: '',
    country_code: 1,
    email: '',
    password: '',
    phone_number: '',
  };

  const Register = (values) => {
    setUserData(values);
    dispatch(SignupUser(values));
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Formik onSubmit={Register} initialValues={initialValues}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField name="full_name" placeholder="Full Name" onChange={handleChange} value={values.full_name} />
              <TextField name="user_name" placeholder="Username" onChange={handleChange} value={values.user_name} />
              <TextField name="email" placeholder="Email address" onChange={handleChange} value={values.email} />
              <TextField
                name="phone_number"
                placeholder="Phone Number"
                onChange={handleChange}
                value={values.phone_number}
              />

              <TextField
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
                value={values.password}
              />
              <TextField
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
                value={values.password}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <Checkbox name="remember" label="Remember me" />
              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained">
              Signup
            </LoadingButton>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SingupForm;
