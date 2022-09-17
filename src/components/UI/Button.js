const Button = props => {
  return (
    <button className="px-6 py-2 mb-8 w-full text-white bg-black rounded-lg shadow-lg focus:-translate-y-0.5 transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 sm:w-9/12 md:w-10/12 lg:w-9/12">
      {props.children}
    </button>
  );
};

export default Button;
