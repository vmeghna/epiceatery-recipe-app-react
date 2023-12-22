import "./style/footer.css";
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
        <p>info@epiceatery.com</p>
        <p>coimbatore</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p className="flink">Linkedin</p>
        <p className="flink">Facebook</p>
        <p className="flink">Instagram</p>
        <p className="flink">Twitter</p>
      </div>
    </div>
  );
};
export default Footer;
