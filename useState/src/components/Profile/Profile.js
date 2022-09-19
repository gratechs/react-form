import { Fragment } from 'react';
import ProfileNavigation from '../Layout/ProfileNavigation';

const Profile = () => {
  return (
    <Fragment>
      <ProfileNavigation />
      <section className="container max-w-screen-xl mx-auto px-12 py-14 text-center shadow-md bg-gray-300 sm:px-24 sm:py-20">
        <div className="bg-white mx-auto p-10 max-w-2xl rounded">
          <p className="lg:text-lg">
            <span className="font-bold">Mfonobong Peter</span>, you have
            successfully created your account with{' '}
            <span className="font-bold">godimfon@gmail.com</span> as your email
            and <span className="font-bold italic">"peace"</span> as your
            password. Keep your password private and do not share with anyone.
            Congrats!🥳
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
