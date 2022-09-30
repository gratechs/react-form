import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/use-input';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';
import ErrorMsg from '../UI/ErrorMsg';
import FetchError from '../UI/FetchError';

const isValidEmail = value => /\S+@\S+\.\S+/.test(value);
const isNotEmpty = value => value.trim() !== '';

const LogInForm = props => {
  const focused = useRef();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    closeError: emailCloseError,
    closeErrorHandler: emailCloseErrorHandler,
  } = useInput(isValidEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
    closeError: passwordCloseError,
    closeErrorHandler: passwordCloseErrorHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const formValue = {
      email: emailValue,
      password: passwordValue,
    };

    // props.onFetchFormValue();
    props.onCompareFormValue(formValue);

    emailReset();
    passwordReset();
    focused.current.focus();
  };

  const emailInputClasses = emailHasError
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

  const passwordInputClasses = passwordHasError
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

  return (
    <section className="section-auth">
      <Card>
        <div className="auth-container">
          <Header
            header="Welcome back"
            paragraph="Welcome back! Please enter your details"
          />
          {props.error && !emailHasError && !passwordHasError && (
            <FetchError text={props.error} onClose={props.onCloseError} />
          )}
          {emailHasError && !passwordHasError && (
            <ErrorMsg
              text="Please enter a valid email"
              onClose={emailCloseErrorHandler}
              closeError={emailCloseError}
            />
          )}
          {passwordHasError && (
            <ErrorMsg
              text="Please enter a valid password"
              onClose={passwordCloseErrorHandler}
              closeError={passwordCloseError}
            />
          )}
          <form onSubmit={formSubmissionHandler}>
            <input
              type="email"
              placeholder="Email"
              required
              autoFocus="autofocus"
              className={emailInputClasses}
              ref={focused}
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
            <Link
              to="/sign-up"
              className="flex text-xs justify-center mb-6 font-bold underline"
            >
              Forgot password
            </Link>
            <Button>Log in</Button>
          </form>

          <Footer
            to="/sign-up"
            paragraph="Don't have an account?"
            link="Sign up for free"
          />
        </div>

        <Image />
      </Card>
    </section>
  );
};

export default LogInForm;
