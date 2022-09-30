import { Link } from 'react-router-dom';

const Footer = props => {
  // console.log('rerender');
  return (
    <div className="flex justify-center space-x-1 text-xs">
      <p className="text-gray-600">{props.paragraph}</p>
      <Link to={props.to} className="font-bold">
        {props.link}
      </Link>
    </div>
  );
};

export default Footer;
