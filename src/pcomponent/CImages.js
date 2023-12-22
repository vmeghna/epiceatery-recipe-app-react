const CImages = ({ imgSrc, pt }) => {
  return (
    <div className="cimages" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default CImages;
