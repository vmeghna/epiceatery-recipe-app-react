import { Link, Navigate } from "react-router-dom";
import "./style/heroSection.css";
import CImages from "./CImages";
import { useUser } from "../Context/Usercontext";
const HeroSection = () => {
  const { email, setEmail } = useUser();
  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.png",
    "/images/gallery/9.jpeg",
  ];
  return (
    <>
      <div className="section hero">
        <div className="col space">
          <h1 className="title">What Are We About</h1>
          <p className="description">
            Hungry for new culinary delights? Look no further! EpicEatery offers an
            abundant selection of delightful recipes from around the globe, and
            it's all on the house!
          </p>
          <button className="btn">
            <Link to="/recipes">Explore Now</Link>
            {/* {email ? <Navigate to="/recipes" /> : <Navigate to="/login" />} */}
          </button>
        </div>
        <div className="col gallery">
          {images.map((src, index) => (
            <CImages key={index} imgSrc={src} pt={"85%"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
