import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SimpleCard = () => {
  const useHistory = useNavigate();
  return (
    <div>
      <Card style={{ width: '100%', paddingTop: '25.25%', position: 'relative' }}>
        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              label="Search"
              style={{ width: '70%', marginRight: '10px', marginTop: '10px' }}
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </div>
          <a href="/addpost">
            {' '}
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Add Post
            </Button>
            <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px', marginLeft: '50px' }}>
              Single Line
            </Button>
            <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px', marginLeft: '50px' }}>
              Work Job
            </Button>
            <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px', marginLeft: '50px' }}>
              VBook
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleCard;
