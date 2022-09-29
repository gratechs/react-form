import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpForm from '../components/Auth/SignUpForm';

const SignUpPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Sending data to database
  const addFormInfoHandler = async form => {
    try {
      const response = await fetch(
        'https://react-form-ab7cd-default-rtdb.firebaseio.com/form.json',
        {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response);
      navigate('/login');
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  let errorMsg;

  if (error) {
    errorMsg = error;
  }

  return (
    <Fragment>
      <SignUpForm onAddFormInfo={addFormInfoHandler} error={errorMsg} />
    </Fragment>
  );
};

export default SignUpPage;
