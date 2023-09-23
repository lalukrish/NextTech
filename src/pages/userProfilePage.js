import React from 'react';
import ProfilePage from '../components/user-profile/profilePage';
import UserSkillsProfile from '../components/user-profile/user-skillsProfile';
import UserEducationProfile from '../components/user-profile/user-education';

const UserProfilePage = () => {
  return (
    <>
      <ProfilePage />
      <div style={{ margin: '20px' }}>
        <UserSkillsProfile />
      </div>
      <div style={{ margin: '20px' }}>
        <UserEducationProfile />
      </div>
    </>
  );
};

export default UserProfilePage;
