import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChiefBox = ({ chief }) => {
  return (
    <div className="chief-box">
      <img src={chief.img} alt="" />
      <div className="cheif-info">
        <h3 className="chief-name">{chief.name}</h3>
        <p className="chief-recipe-count">
          Recipes:<b>{chief.rCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine <b>{chief.cuisine}</b>
        </p>
        <p className="chief-icon">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};
export default ChiefBox;
