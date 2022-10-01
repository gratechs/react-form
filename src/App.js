import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

function App() {
  const [loginValue, setLoginValue] = useState();
  const [loggedFormInfo, setLoggedFormInfo] = useState([]);
  const [error, setError] = useState();

  const navigate = useNavigate();

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
    const comparedValue = loggedFormInfo.find(
      formVal =>
        formVal.email === formValue.email &&
        formVal.password === formValue.password
    );
    console.log(formValue);

    console.log(loginValue);

    setLoginValue(comparedValue);

    // if (!loginValue) {
    //   setError('Incorrect email or password details');
    //   return;
    // }

    navigate('/profile', { replace: true });
  };

  console.log(loginValue);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-up" />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/login"
          element={
            <LogInPage
              error={errorMsg}
              onCloseError={closeErrorMsgHandler}
              onCompareFormValue={compareFormInfoHandler}
            />
          }
        />
        <Route
          path="/profile"
          element={<ProfilePage loginVal={loginValue} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
