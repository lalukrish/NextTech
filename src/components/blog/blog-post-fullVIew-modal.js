import {
  Avatar,
  Button,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
  Modal,
  Card,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';
import { Favorite as FavoriteIcon, ChatBubbleOutline as ChatBubbleOutlineIcon, AddComment } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyPostCardModal = ({ modalOpen, handleModalClose, postId }) => {
  console.log('post------>id', postId);
  const userName = useSelector((state) => state.myprofile?.successMessage?.data?.user?.full_name);

  const userProfileImage = useSelector((state) => state.myprofilepic?.successMessage?.data?.data?.profile_image_url);
  const [profileImage, setProfileImage] = useState(userProfileImage);

  // Use useEffect to update profileImage when userProfileImage changes
  useEffect(() => {
    setProfileImage(userProfileImage);
  }, [userProfileImage]); // This dependency array ensures the effect runs when userProfileImage changes

  const [post, allPost] = useState();
  const handleSinglePost = () => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/get-one-post/${postId}`,
      headers: {},
    };
    axios(config).then((response) => {
      const data = response.data.post;
      console.log('single one', data);
      allPost(data);
    });
  };

  useEffect(() => {
    handleSinglePost();
  }, [postId]);

  console.log('iam hereeeee', post);
  const handleCommentModalClose = () => {
    handleModalClose();
    allPost(null);
  };

  return (
<div>
  <Dialog
    open={modalOpen}
    onClose={handleCommentModalClose}
    maxWidth="lg" // Set your desired modal width, e.g., lg for large
    fullWidth // Make the modal take up the full width
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <DialogTitle id="modal-modal-title">
      Posts
    </DialogTitle>
    <DialogContent>
      <div style={{ display: 'flex' }}>
        {/* Left Card for Image */}
        <Card style={{ flex: 1, marginRight: '20px' }}>
          <CardHeader
            avatar={<Avatar src={profileImage} alt={post?.username} />}
            title={userName}
          />
          <CardContent>
            {post ? (
              <>
                <img
                  src={post?.image_url}
                  alt="Post"
                  style={{ width: '100%', maxHeight: '600px' }}
                />
                <Typography>{post?.description}</Typography>
              </>
            ) : (
              <p>No post to display</p>
            )}
          </CardContent>
        </Card>

        {/* Right Card for Comment Section */}
        <Card style={{ flex: 1 }}>
          <CardContent>
            {/* Input field for adding comments */}
            <TextField
              fullWidth
              variant="outlined"
              label="Add a comment"
              placeholder="Add a comment..."
            />
            <Button variant="contained" color="primary" fullWidth>
              Post
            </Button>

            {/* Display existing comments here */}
            {/* You can map through your comments and render them */}
          </CardContent>
        </Card>
      </div>
    </DialogContent>
  </Dialog>
</div>
  
  );
};

export default MyPostCardModal;
