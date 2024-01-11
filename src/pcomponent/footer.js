import "./style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">EpicEatery.com</p>
        <p className="mm">
          EpicEatery is a place here you can please your soul and tummy with
          delicious food recipes of all cuisine and our services are absolutely
          free.
        </p>
        <p>
          &copy;2023 | shri meghna
          <br />
          All Rights Reserved
        </p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <Link to="/home">
          <p>info@epiceatery.com</p>
        </Link>
        <p>coimbatore</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <Link to="/home">
          <p className="flink">Linkedin</p>
        </Link>

        <Link to="/home">
          <p className="flink">Facebook</p>
        </Link>
        <Link to="/home">
          <p className="flink">Instagram</p>
        </Link>
        <Link to="/home">
          <p className="flink">Twitter</p>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
