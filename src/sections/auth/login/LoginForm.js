import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

// components
import Iconify from '../../../components/iconify';

import { UserSignin } from '../../../redux/slices/userSigninSlice';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const singinResponseId = useSelector((state) => state?.signin?.successMessage?.user?._id);
  console.log('res', singinResponseId);
  localStorage.setItem('USER_ID', singinResponseId);

  const singinResponseMessage = useSelector((state) => state?.signin?.successMessage?.message);
  console.log('res', singinResponseMessage);

  const Login = (values) => {
    setUserData(values);
    dispatch(UserSignin(values)).then((response) => {
      const data = response;
      const resMessage = data.payload.data.message;
      console.log('data', data);
      if (resMessage === 'Login successfull') {
        navigate('/dashboard/blog/');
      }
    });
  };

  return (
    <>
      <Formik onSubmit={Login} initialValues={initialValues}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField name="email" placeholder="Email/Username" onChange={handleChange} value={values.formik} />

              <TextField
                required
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                value={values.formik}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
              <Checkbox name="remember" label="Remember me" />
              <Link variant="subtitle2" underline="hover">
                Forgot password .?
              </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained">
              Login
            </LoadingButton>
          </form>
        )}
      </Formik>
    </>
  );
}
