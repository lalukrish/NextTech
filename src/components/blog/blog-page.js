import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardContent, CardActions, CardHeader, IconButton, Typography } from '@mui/material';
import { Favorite as FavoriteIcon, ChatBubbleOutline as ChatBubbleOutlineIcon, AddComment } from '@mui/icons-material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MyPostCardModal from './blog-post-fullVIew-modal';

const BlogPageResults = () => {
  const userName = useSelector((state) => state.myprofile?.successMessage?.data?.user?.full_name);

  const userProfileImage = useSelector((state) => state.myprofilepic?.successMessage?.data?.data?.profile_image_url);
  const [profileImage, setProfileImage] = useState(userProfileImage);

  // Use useEffect to update profileImage when userProfileImage changes
  useEffect(() => {
    setProfileImage(userProfileImage);
  }, [userProfileImage]); // This dependency array ensures the effect runs when userProfileImage changes

  const [post, allPost] = useState([]);
  const handleAllPosts = () => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/get-all-posts`,
      headers: {},
    };
    axios(config).then((response) => {
      const data = response.data.posts;
      console.log('all post', data);
      allPost(data);
    });
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  console.log('iam here', post);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [postId, setPostId] = useState();

  const handleValue = (postId) => {
    setPostId(postId.id);
  };

  console.log('postid______>', postId);

  return (
    <>
       <MyPostCardModal modalOpen={modalOpen} handleModalClose={handleModalClose} postId={postId} />
      <div>
        <Typography variant="h5">Posts</Typography>
        {post.map((posts) => (
          <Card style={{ marginBottom: '20px' }}>
            <CardHeader avatar={<Avatar src={profileImage} alt={post?.username} />} title={userName} />
            <CardContent>
              <img src={posts?.image_url} alt="Post" style={{ width: '600px', maxHeight: '600px' }} />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <FavoriteIcon color="error" />
              </IconButton>
              {/* <Typography>{post?.likes}</Typography> */}
              <IconButton>
                <Button
                  onClick={() => {
                    handleValue({ id: posts._id }); // Pass the id to handleValue function
                    handleModalOpen(); // Open the modal
                  }}
                >
                  <ChatBubbleOutlineIcon />
                </Button>

                {/* <AddComment /> */}
              </IconButton>
              <Typography>{posts?.description}</Typography>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BlogPageResults;
