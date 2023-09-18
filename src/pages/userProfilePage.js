import React from 'react';
import ProfilePage from '../components/user-profile/profilePage';
import UserSkillsProfile from '../components/user-profile/user-skillsProfile';

const UserProfilePage = () => {
  return (
    <>
      <ProfilePage />
      <div style={{ margin: '20px' }}>
        <UserSkillsProfile />
      </div>
    </>
  );
};

export default UserProfilePage;
