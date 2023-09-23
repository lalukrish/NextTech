import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'; // Import the EditIcon
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the checkmark icon
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

const ProfilePage = () => {
  const myUserId = localStorage.getItem('USER_ID');
  const { userId } = useParams();
  const [user, setUser] = useState();
  console.log('dh0--dddd-', userId);
  const handleUserProfile = () => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/admin/get-one-user/${userId}`,
      headers: {},
    };
    axios(config).then((response) => {
      const data = response.data;
      setUser(data);
      console.log('daata', data);
    });
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      border="1px solid #ccc"
      borderRadius={4}
      boxShadow={1}
      maxWidth="600px"
      margin="0 auto"
      position="relative" // Add position relative to the Box
    >
      <Avatar alt="User Name" src={user?.user?.profile_image_url} sx={{ width: 100, height: 100, marginBottom: 2 }} />
      <Typography variant="h5" gutterBottom>
        {user?.user?.user_name}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {user?.user?.role} <CheckCircleIcon sx={{ verticalAlign: 'middle' }} />
      </Typography>
      <Typography variant="body1">Bio:{user?.user?.bio_information}</Typography>
      <Typography variant="body2" color="textSecondary" marginTop={2}>
        Location: {user?.user?.phone_number}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {user?.user?.email}
      </Typography>
      {myUserId === userId ? (
        <a href="/dashboard/settings">
          <IconButton
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
          >
            <EditIcon />
          </IconButton>
        </a>
      ) : null}
    </Box>
  );
};

export default ProfilePage;
