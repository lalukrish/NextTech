import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Button, Divider, Stack } from '@mui/material';
import Logo from '../components/logo';
import EditProfileForm from './EditProfile'; // Assuming you have these components
import ChangePasswordForm from './ChangePassword';


const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.shadows[3], // Use MUI's built-in shadows
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  fontWeight: 'bold',
  fontSize: '16px',
  boxShadow: theme.shadows[2],
}));

export default function Settings() {
  return (
    <div>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Account Settings
            </Typography>

            {/* Edit Profile Section */}
            <StyledSection>
              <Typography variant="h6">Edit Profile</Typography>
              <EditProfileForm />


              
              <StyledButton variant="contained" color="primary">
                Save Changes
              </StyledButton>
            </StyledSection>

            <Divider sx={{ my: 4 }} />

            {/* Change Password Section */}
            <StyledSection>
              <Typography variant="h6">Change Password</Typography>
              <ChangePasswordForm />
              <StyledButton variant="contained" color="secondary">
                Change Password
              </StyledButton>
            </StyledSection>
          </StyledContent>
        </Container>
      </StyledRoot>
    </div>
  );
}
