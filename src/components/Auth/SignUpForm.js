import { useState, useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';

const SignUpForm = () => {
  // const [nameValue, setNameValue] = useState('');
  // const [emailValue, setEmailValue] = useState('');
  // const [passwordValue, setPasswordValue] = useState('');

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const nameChangeHandler = e => {
    // setNameValue(e.target.value);
    // console.log(nameInputRef.current.value);
  };

  const emailChangeHandler = e => {
    // setEmailValue(e.target.value);
  };

  const passwordChangeHandler = e => {
    // setPasswordValue(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredName, enteredEmail, enteredPassword);
  };

  return (
    <section className="section-auth">
      <Card>
        <div className="auth-container">
          <Header
            header="Create an account"
            paragraph="Let's get started with your 30 day free trial"
          />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              required
              className="mb-6"
              ref={nameInputRef}
              onChange={nameChangeHandler}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="mb-6"
              ref={emailInputRef}
              onChange={emailChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="mb-8"
              ref={passwordInputRef}
              onChange={passwordChangeHandler}
            />
            <Button>Create account</Button>
          </form>

          <Footer
            to="/login"
            paragraph="Already have an account?"
            link="Log in"
          />
        </div>

        <Image />
      </Card>
    </section>
  );
};

export default SignUpForm;
