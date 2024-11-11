// /pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Profile Page</h1>
      <Link href="/profile">
        <a>Go to Profile</a>
      </Link>
    </div>
  );
};

export default Home;
