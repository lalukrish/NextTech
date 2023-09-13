import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, CardContent, CardActions, CardHeader, IconButton, Typography } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  AddComment,
} from '@mui/icons-material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MyPostCardModal from './blog-post-fullVIew-modal';




const BlogPageResults = () => {
const userid=localStorage.getItem("USER_ID")
  const userName = useSelector((state) => state.myprofile?.successMessage?.data?.user?.full_name);

  const userProfileImage = useSelector((state) => state.myprofilepic?.successMessage?.data?.data?.profile_image_url);
  const [profileImage, setProfileImage] = useState(userProfileImage);

  useEffect(() => {
    setProfileImage(userProfileImage);
  }, [userProfileImage]);
  const [likedList, setAllLikedList] = useState([]);
  const [post, allPost] = useState([]);
  const [isLikedMap, setIsLikedMap] = useState({});

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
      const likedMap = {};
      data.forEach((post) => {
        likedMap[post._id] = post.likedBy.includes(userid);
      });
      setIsLikedMap(likedMap);
    });
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [postId, setPostId] = useState();
console.log("im here",postId)
  const handleValue = (postId) => {
    setPostId(postId.id);
  };

  const handleSetLike = (postid) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/comments/add-like`,
      data: {
        userid,
        postid,
      },
      headers: {
        // Add any headers you need here
      },
    };
    axios(config).then((response) => {
      const data = response.data;
      console.log('all post', data);
      setIsLiked(true);
      handleAllPosts();
    });
  };

  const handleUnLike = (postid) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_NEXTTECH_DEV_URL}/comments/unlike-post`,
      data: {
        userid,
        postid,
      },
      headers: {
        // Add any headers you need here
      },
    };
    axios(config).then((response) => {
      const data = response.data;
      console.log('all post', data);
      setIsLiked(false);
      handleAllPosts();
    });
  };

  const [postLikes, setPostLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  console.log('likedList:', isLikedMap); // To store whether each post is liked by the current user

  const handleLikePost = (postid) => {
    if (isLikedMap[postid]) {
      setPostLikes(postLikes - 1);
      setIsLiked(false);
      handleUnLike(postid);
      // User has already liked this post, handle accordingly
      console.log('User has already liked this post');
    } else {
      setPostLikes(postLikes + 1);

      setIsLiked(true);
      handleSetLike(postid);
      // Perform the like action (replace with your like logic)
      console.log('Like post with ID', postid);

      // Update isLikedMap to indicate that the user has liked this post
      setIsLikedMap({ ...isLikedMap, [postid]: true });
    }
  };

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
              <IconButton
                color="primary"
                onClick={() => {
                  handleLikePost(posts._id);
                }}
              >
                {isLikedMap[posts._id] ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon />}
              </IconButton>

              <Typography>{posts.number_likes} Likes</Typography>

              <IconButton>
                <Button
                  onClick={() => {
                    handleValue({ id: posts._id });
                    handleModalOpen();
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
