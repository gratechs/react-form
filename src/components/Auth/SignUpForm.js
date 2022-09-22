import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';
import ErrorMsg from '../UI/ErrorMsg';

const SignUpForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [emailValue, setEmailValue] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIsTouched, setPasswordIsTouched] = useState('');

  const [closeError, setCloseError] = useState(false);

  const nameValueIsValid =
    nameValue.match(/^[A-Za-z]+$/) && nameValue.trim() !== '';
  const nameValueIsInvalid = !nameValueIsValid && nameIsTouched;

  const emailValueIsValid = /\S+@\S+\.\S+/.test(emailValue);
  const emailValueIsInvalid = !emailValueIsValid && emailIsTouched;

  const passwordValueIsValid = passwordValue.trim() !== '';
  const passwordValueIsInvalid = !passwordValueIsValid && passwordIsTouched;

  const nameChangeHandler = e => {
    setNameValue(e.target.value);
  };

  const emailChangeHandler = e => {
    setEmailValue(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPasswordValue(e.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
    setCloseError(false);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
    setCloseError(false);
  };

  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
    setCloseError(false);
  };

  const closeHandler = () => {
    setCloseError(true);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!nameValueIsValid) {
      return;
    }

    console.log(nameValue, emailValue, passwordValue);

    setNameValue('');
    setNameIsTouched(false);

    setEmailValue('');
    setEmailIsTouched(false);

    setPasswordValue('');
    setPasswordIsTouched(false);
  };

  const nameInputClasses = nameValueIsInvalid
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

  const emailInputClasses = emailValueIsInvalid
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

  const passwordInputClasses = passwordValueIsInvalid
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

  return (
    <section className="section-auth">
      <Card>
        <div className="auth-container">
          <Header
            header="Create an account"
            paragraph="Let's get started with your 30 day free trial"
          />
          {nameValueIsInvalid &&
            !emailValueIsInvalid &&
            !passwordValueIsInvalid && (
              <ErrorMsg
                text="Name should contain only letters"
                onClose={closeHandler}
                closeError={closeError}
              />
            )}
          {emailValueIsInvalid && !passwordValueIsInvalid && (
            <ErrorMsg
              text="Please enter a valid email"
              onClose={closeHandler}
              closeError={closeError}
            />
          )}
          {passwordValueIsInvalid && (
            <ErrorMsg
              text="Please enter a valid password"
              onClose={closeHandler}
              closeError={closeError}
            />
          )}
          <form onSubmit={formSubmissionHandler}>
            <input
              type="text"
              placeholder="Name"
              required
              autoFocus="autofocus"
              className={nameInputClasses}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={emailInputClasses}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={emailValue}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={passwordInputClasses}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={passwordValue}
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
