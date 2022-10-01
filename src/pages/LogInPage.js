import LogInForm from '../components/Auth/LogInForm';

const LogInPage = props => {
  return (
    <LogInForm
      error={props.error}
      onCloseError={props.onCloseError}
      onCompareFormValue={props.onCompareFormValue}
    />
  );
};

export default LogInPage;
