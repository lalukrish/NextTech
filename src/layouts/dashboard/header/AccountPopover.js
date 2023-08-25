import { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import { userProfile } from '../../../redux/slices/userProfileSlice';
import account from '../../../_mock/account';
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover(props) {
  console.log('the valueis 2', props.profileImage);

  const userId = localStorage.getItem('USER_ID');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile()).then((response) => {
      console.log('hi', response);
    });
  }, []);

  const userName = useSelector((state) => state.myprofile?.successMessage?.data?.user?.full_name);
  const userEmail = useSelector((state) => state.myprofile?.successMessage?.data?.user?.email);
  console.log('userProfileDetails', userName);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  // const [profileImage, setProfileImage] = useState();

  // const handleProfileImage = () => {
  //   const config = {
  //     method: 'get',
  //     url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/get-user-profile-image/${userId}`,
  //     headers: {
  //       accept: 'application/json',
  //     },
  //   };
  //   axios(config).then((response) => {
  //     const data = response.data;
  //     const imageUrl = data.data.profile_image_url;
  //     setProfileImage(imageUrl); // Update the profile image URL
  //   });
  // };

  // useEffect(() => {
  //   handleProfileImage();
  // }, []);
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}

      >
        <Avatar src={props.profileImage} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {userName}{' '}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userEmail}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
