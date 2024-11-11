// /pages/profile.js
import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Molp',
    level: 5,
    badges: ['Beginner Query Wielder', 'Aggregating Master'],
    achievements: [
      { title: 'Query Initiate', description: 'Completed basic SQL queries' },
      { title: 'Join Wizard', description: 'Successfully performed JOIN operations' },
    ],
  });

  useEffect(() => {
    // Here you could fetch the data from an API or database
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  useEffect(() => {
    // Save profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  return (
    <div className="profile-container">
      <ProfileCard profile={profile} />
    </div>
  );
};

export default Profile;
