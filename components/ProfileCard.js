// /components/ProfileCard.js
import Badge from './Badge';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h1>{profile.name}'s Profile</h1>
      <div className="level">
        <h3>Level: {profile.level}</h3>
      </div>
      <div className="badges">
        <h3>Badges</h3>
        <div className="badge-list">
          {profile.badges.map((badge, index) => (
            <Badge key={index} badgeName={badge} />
          ))}
        </div>
      </div>
      <div className="achievements">
        <h3>Achievements</h3>
        <ul>
          {profile.achievements.map((achievement, index) => (
            <li key={index}>
              <strong>{achievement.title}</strong>: {achievement.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
