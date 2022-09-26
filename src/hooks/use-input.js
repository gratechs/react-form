import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
  closeError: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
      closeError: state.closeError,
    };
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
      closeError: false,
    };
  }
  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
      closeError: state.closeError,
    };
  }
  if (action.type === 'CLOSE_ERROR_MSG') {
    return {
      value: state.value,
      isTouched: false,
      closeError: true,
    };
  }
  return initialInputState;
};

const useInput = (validateValue = () => {}) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const closeErrorHandler = () => {
    dispatch({ type: 'CLOSE_ERROR_MSG' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    closeErrorHandler,
    closeError: inputState.closeError,
  };
};

export default useInput;
