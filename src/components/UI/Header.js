import { Fragment } from 'react';

const Header = props => {
  return (
    <Fragment>
      <h3 className="text-lg mb-1 font-bold lg:text-xl">{props.header}</h3>
      <p className="text-sm text-gray-500 mb-8">{props.paragraph}</p>
    </Fragment>
  );
};

export default Header;
