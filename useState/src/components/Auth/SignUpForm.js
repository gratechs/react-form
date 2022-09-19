import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import authImage from '../../assets/bernard-hermant.jpg';

const SignUpForm = () => {
  const [nameValue, setNameValue] = useState('');

  const nameChangeHandler = e => {
    setNameValue(e.target.value);
  };

  return (
    <section className="container max-w-screen-xl mx-auto my-8 px-12 py-14 text-center shadow-md bg-gray-300 rounded-lg sm:px-24 sm:py-20">
      <div className="shadow-2xl md:flex">
        <div className="bg-white p-10 rounded md:rounded-none md:rounded-l sm:py-14 md:w-3/4 lg:w-1/2 md:py-20">
          <h3 className="text-lg mb-1 font-bold lg:text-xl">
            Create an account
          </h3>
          <p className="text-sm text-gray-500 mb-8">
            Let's get started with your 30 day free trial
          </p>
          <form>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full text-gray-800 mb-6 pb-1 border-0 border-b border-gray-400 placeholder:text-sm focus:outline-none focus:border-gray-800 hover:border-gray-800 sm:w-9/12 md:w-10/12 lg:w-9/12"
              onChange={nameChangeHandler}
              value={nameValue}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full text-gray-800 mb-6 pb-1 border-0 border-b border-gray-400 placeholder:text-sm focus:outline-none focus:border-gray-800 hover:border-gray-800 sm:w-9/12 md:w-10/12 lg:w-9/12"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full text-gray-800 mb-8 pb-1 border-0 border-b border-gray-400 placeholder:text-sm focus:outline-none focus:border-gray-800 hover:border-gray-800 sm:w-9/12 md:w-10/12 lg:w-9/12"
            />
            <Button>Create account</Button>
          </form>

          <div className="flex justify-center space-x-1 text-xs">
            <p className="text-gray-600">Already have an account?</p>
            <Link to="/login" className="font-bold">
              Log in
            </Link>
          </div>
        </div>

        <div className="hidden w-1/2 md:block">
          <img
            src={authImage}
            alt="Pavel Anoshin"
            className="w-full h-full rounded-r"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
