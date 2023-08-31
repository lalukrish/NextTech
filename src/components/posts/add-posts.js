import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Modal,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SimpleCard = () => {
  const useHistory = useNavigate();
  return (
    <div>
      <Card style={{ width: '100%', paddingTop: '25.25%', position: 'relative' }}>
        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
         
          <a href="/addpost">
            {' '}
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Add Post
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleCard;
