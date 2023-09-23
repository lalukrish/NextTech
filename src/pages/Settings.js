import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, Container, Typography, Button, Divider, Stack, Card, Grid } from '@mui/material';
import Logo from '../components/logo';
import EditProfileForm from '../components/settings/EditProfile'; // Assuming you have these components
import EditProfilePicture from '../components/settings/Edit-Profile-Picture';
import ChangePasswordForm from '../components/settings/ChangePassword';

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
  maxWidth: 500,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  //  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(10, 0), // Adjust the top and bottom padding
  marginTop: theme.spacing(-4), // Move the content slightly up
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

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '1vh' }}>
        <Card sx={{ width: '1150px', height: '700px', mt: '1px' }}>
          <Container maxWidth="sm">
            <a href="/dashboard/app">
              <ArrowBackIosNewIcon
                sx={{ position: 'absolute', top: '10%', left: 90, transform: 'translateY(-50%)', padding: '2px' }}
              />
            </a>
            <StyledContent>
              <Typography variant="h4" gutterBottom sx={{ marginRight: '140px' }}>
                <center>Account Settings</center>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <EditProfileForm />
                </Grid>

                <Grid item xs={12} md={4}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div>
                      <EditProfilePicture />
                    </div>
                  </div>
                </Grid>
              </Grid>
              {/* Change Password Section */}
            </StyledContent>
          </Container>
        </Card>
      </div>
    </div>
  );
}
