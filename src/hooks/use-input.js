import { useReducer, useState } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
  closeError: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  if (action.type === 'CLOSE_ERROR_MSG') {
    return { value: state.value, isTouched: state.isTouched };
  }
  return initialInputState;
};

const useInput = (validateValue = () => {}) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const [closeError, setCloseError] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
    setCloseError(false);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const closeErrorHandler = () => {
    setCloseError(true);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    closeErrorHandler,
    closeError,
  };
};

export default useInput;
