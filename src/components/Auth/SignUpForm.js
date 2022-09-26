import useInput from '../../hooks/use-input';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';
import ErrorMsg from '../UI/ErrorMsg';

const isLetters = value => value.match(/^[A-Za-z]+$/);
const isValidEmail = value => /\S+@\S+\.\S+/.test(value);
const isNotEmpty = value => value.trim() !== '';

const SignUpForm = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
    closeError: nameCloseError,
    closeErrorHandler: nameCloseErrorHandler,
  } = useInput(isLetters);

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

  if (nameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(nameValue, emailValue, passwordValue);

    nameReset();
    emailReset();
    passwordReset();
  };

  const nameInputClasses = nameHasError
    ? 'mb-6 border-red-400 hover:border-red-400'
    : 'mb-6';

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
            header="Create an account"
            paragraph="Let's get started with your 30 day free trial"
          />
          {nameHasError && !emailHasError && !passwordHasError && (
            <ErrorMsg
              text="Name should contain only letters"
              onClose={nameCloseErrorHandler}
              closeError={nameCloseError}
            />
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
