import { useState, useReducer } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';
import ErrorMsg from '../UI/ErrorMsg';

const nameReducer = (state, action) => {
  if (action.type === 'NAME_INPUT') {
    return {
      value: action.val,
      isValid: action.val.match(/^[A-Za-z]+$/),
      isTouched: state.isTouched,
    };
  }

  if (action.type === 'NAME_BLUR') {
    return {
      value: state.value,
      isValid: state.value.match(/^[A-Za-z]+$/),
      isTouched: true,
    };
  }

  if (action.type === 'NAME_RESET') {
    return {
      value: '',
      isValid: null,
      isTouched: false,
    };
  }

  return { value: '', isValid: null, isTouched: false };
};

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return {
      value: action.val,
      isValid: /\S+@\S+\.\S+/.test(action.val),
      isTouched: state.isTouched,
    };
  }

  if (action.type === 'EMAIL_BLUR') {
    return {
      value: state.value,
      isValid: /\S+@\S+\.\S+/.test(state.value),
      isTouched: true,
    };
  }

  if (action.type === 'EMAIL_RESET') {
    return {
      value: '',
      isValid: null,
      isTouched: false,
    };
  }

  return { value: '', isValid: null, isTouched: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim() !== '',
      isTouched: state.isTouched,
    };
  }

  if (action.type === 'PASSWORD_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim() !== '',
      isTouched: true,
    };
  }

  if (action.type === 'PASSWORD_RESET') {
    return {
      value: '',
      isValid: null,
      isTouched: false,
    };
  }

  return { value: '', isValid: null, isTouched: false };
};

const SignUpForm = () => {
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
    isTouched: false,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
    isTouched: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
    isTouched: false,
  });

  const [closeError, setCloseError] = useState(false);

  const nameValueIsValid = nameState.isValid;
  const nameValueIsInvalid = !nameValueIsValid && nameState.isTouched;

  const emailValueIsValid = emailState.isValid;
  const emailValueIsInvalid = !emailValueIsValid && emailState.isTouched;

  const passwordValueIsValid = passwordState.isValid;
  const passwordValueIsInvalid =
    !passwordValueIsValid && passwordState.isTouched;

  const nameChangeHandler = e => {
    dispatchName({ type: 'NAME_INPUT', val: e.target.value });
  };

  const emailChangeHandler = e => {
    dispatchEmail({ type: 'EMAIL_INPUT', val: e.target.value });
  };

  const passwordChangeHandler = e => {
    dispatchPassword({ type: 'PASSWORD_INPUT', val: e.target.value });
  };

  const nameBlurHandler = () => {
    dispatchName({ type: 'NAME_BLUR' });
    setCloseError(false);
  };

  const emailBlurHandler = () => {
    dispatchEmail({ type: 'EMAIL_BLUR' });
    setCloseError(false);
  };

  const passwordBlurHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
    setCloseError(false);
  };

  const closeHandler = () => {
    setCloseError(true);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!nameState.isValid) {
      return;
    }

    console.log(nameState.value, emailState.value, passwordState.value);

    dispatchName({ type: 'NAME_RESET' });
    dispatchEmail({ type: 'EMAIL_RESET' });
    dispatchPassword({ type: 'PASSWORD_RESET' });
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
              value={nameState.value}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={emailInputClasses}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={emailState.value}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={passwordInputClasses}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={passwordState.value}
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
