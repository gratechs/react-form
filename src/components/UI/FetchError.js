const FetchError = props => {
  return (
    <div className="flex items-center justify-center space-x-2 container mx-auto mb-4 p-1 text-white text-sm bg-red-600 border-2 border-red-400 rounded-lg sm:w-9/12 md:w-10/12 lg:w-9/12 lg:space-x-8 xl:space-x-12">
      <p>{props.text}</p>
    </div>
  );
};

export default FetchError;
