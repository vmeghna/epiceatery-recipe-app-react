import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./style/message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Message = () => {
  return (
    <>
      <div className="section message">
        <p className="message-text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          Food is symbolic of love when words are inadequate; it has the power
          to convey emotions and create lasting memories. The act of preparing
          and sharing food is an act of caring and nourishing not just the body
          but also the soul, leaving an indelible mark on those who partake.
        </p>
        <p className="message-author"> - Alan D. Wolfelt</p>
      </div>
    </>
  );
};
export default Message;
