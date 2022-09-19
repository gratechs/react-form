import authImage from '../../assets/bernard-hermant.jpg';

const Image = () => {
  return (
    <div className="hidden w-1/2 md:block">
      <img
        src={authImage}
        alt="Pavel Anoshin"
        className="w-full h-full rounded-r"
      />
    </div>
  );
};

export default Image;
