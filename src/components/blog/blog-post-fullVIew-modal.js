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
      <Modal
        open={modalOpen}
        onClose={handleCommentModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="h5">Posts</Typography>
            {post ? (
              <Card style={{ marginBottom: '20px' }}>
                <CardHeader avatar={<Avatar src={profileImage} alt={post?.username} />} title={userName} />
                <CardContent>
                  <img src={post?.image_url} alt="Post" style={{ width: '600px', maxHeight: '600px' }} />
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <Typography>{post?.description}</Typography>
                </CardActions>
              </Card>
            ) : (
              <p>No post to display</p>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MyPostCardModal;
