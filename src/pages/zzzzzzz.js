import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Button, Divider, Stack } from '@mui/material';
import Logo from '../components/logo';
import { EditProfileForm, ChangePasswordForm } from '../sections/settings'; // Assuming you have these components

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
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
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
              Settings
            </Typography>

            {/* Edit Profile Section */}
            <EditProfileForm />

            <Divider sx={{ my: 4 }} />

            {/* Change Password Section */}
            <ChangePasswordForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </div>
  );
}

'.settings-card': {
    boxShadow: theme.customShadows.card,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },





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
    boxShadow: theme.customShadows.card,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper, // Using MUI's color palette
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
  
  export default function Settings() {
    const theme = useTheme();
  
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
                Settings
              </Typography>
  
              {/* Edit Profile Section */}
              <StyledSection>
                <EditProfileForm />
              </StyledSection>
  
              <Divider sx={{ my: 4 }} />
  
              {/* Change Password Section */}
              <StyledSection>
                <ChangePasswordForm />
              </StyledSection>
            </StyledContent>
          </Container>
        </StyledRoot>
      </div>
    );
  }
  