import { useCallback, useEffect, useState } from 'react';

import LogInForm from '../components/Auth/LogInForm';

const LogInPage = () => {
  const [loggedFormInfo, setLoggedFormInfo] = useState([]);
  const [error, setError] = useState();

  const fetchFormInfoHandler = useCallback(async () => {
    try {
      const response = await fetch(
        'https://react-form-ab7cd-default-rtdb.firebaseio.com/form.json'
      );

      if (!response.ok) throw new Error('Something is wrong!');

      const data = await response.json();

      const loadedFormInfo = [];

      for (const key in data) {
        loadedFormInfo.push({
          id: key,
          name: data[key].name,
          email: data[key].email,
          password: data[key].password,
        });
      }

      setLoggedFormInfo(loadedFormInfo);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchFormInfoHandler();
  }, [fetchFormInfoHandler]);

  console.log(loggedFormInfo);

  let errorMsg;

  if (error) {
    errorMsg = error;
  }

  const closeErrorMsgHandler = () => {
    setError(null);
  };

  const compareFormInfoHandler = formValue => {
    const returnedValue = loggedFormInfo.find(
      formVal =>
        formVal.email === formValue.email &&
        formVal.password === formValue.password
    );
    console.log(formValue);

    console.log(returnedValue);
  };

  return (
    <LogInForm
      // onFetchFormValue={fetchFormInfoHandler}
      error={errorMsg}
      onCloseError={closeErrorMsgHandler}
      onCompareFormValue={compareFormInfoHandler}
    />
  );
};

export default LogInPage;
