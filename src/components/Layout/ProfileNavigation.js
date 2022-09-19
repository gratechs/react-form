import { Link } from 'react-router-dom';

const ProfileNavigation = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto max-w-screen-xl p-4 bg-gray-700 text-white md:px-8 lg:px-14">
      <p className="text-2xl cursor-pointer">React Form</p>
      <Link to="/login">Logout</Link>
    </nav>
  );
};

export default ProfileNavigation;
