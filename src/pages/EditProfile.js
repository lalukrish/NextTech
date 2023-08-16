import React from 'react';

const EditProfile = () => {
  function profile() {
    console.log('hi');
  }

  return (
    <div>
      <button onClick={EditProfile}>Edit Profile</button>
    </div>
  );
};

export default EditProfile;
