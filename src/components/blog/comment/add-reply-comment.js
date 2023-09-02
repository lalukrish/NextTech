// import axios from 'axios';
// import React from 'react';

// const AddReplyComment = async ({ commentId, replyText }) => {
//   const userId = localStorage.getItem('USER_ID');
//   console.log('commentId', commentId);
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_NEXTTECH_DEV_URL}/comments/add-reply`,
//       {
//         userId,
//         commentId,
//         reply_text: replyText,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     // Handle success, you can return the response data if needed
//     return response.data;
//   } catch (error) {
//     // Handle error, you can log the error or perform other error handling tasks
//     console.error('Error adding reply:', error);
//     throw error; // You may want to rethrow the error to handle it further in the calling component
//   }
// };

// export default AddReplyComment;
