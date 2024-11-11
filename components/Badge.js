// /components/Badge.js
import { FaAward } from 'react-icons/fa';

const Badge = ({ badgeName }) => (
  <div className="badge">
    <FaAward />
    <span>{badgeName}</span>
  </div>
);

export default Badge;
