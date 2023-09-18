import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the checkmark icon

const ProfilePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      border="1px solid #ccc"
      borderRadius={4}
      boxShadow={1}
      maxWidth="600px" // Updated maxWidth to 600px
      margin="0 auto"
    >
      <Avatar
        alt="User Name"
        src="https://example.com/path-to-your-avatar-image.jpg"
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <Typography variant="h5" gutterBottom>
        User Name
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        React Developer <CheckCircleIcon sx={{ verticalAlign: 'middle' }} /> {/* Add the icon */}
      </Typography>
      <Typography variant="body1">Bio: This is a brief description of the user.</Typography>
      <Typography variant="body2" color="textSecondary" marginTop={2}>
        Location: City, Country
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Email: user@example.com
      </Typography>
    </Box>
  );
};

export default ProfilePage;
