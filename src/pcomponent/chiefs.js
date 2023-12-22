import ChiefBox from "./ChiefBox";
import "./style/chief.css";

const Chiefs = () => {
  const chiefs = [
    {
      name: "Sanjay",
      img: "/images/chief/1.jpg",
      rCount: "20",
      cuisine: "Indian",
    },
    {
      name: "Alessandro",
      img: "/images/chief/2.jpeg",
      rCount: "10",
      cuisine: "Maxican",
    },

    {
      name: "Gabriela",
      img: "/images/chief/3.jpg",
      rCount: "12",
      cuisine: "Continental",
    },
    {
      name: "David M.",
      img: "/images/chief/4.jpg",
      rCount: "8",
      cuisine: "Chinese",
    },
    {
      name: "Francesco",
      img: "/images/chief/5.jpg",
      rCount: "5",
      cuisine: "japanese",
    },
    {
      name: "Andrea",
      img: "/images/chief/6.jpg",
      rCount: "12",
      cuisine: "Italian",
    },
  ];
  return (
    <div className="section chiefs">
      <h3 className="title">Our Top Chiefs</h3>
      <div className="chiefs-box-container">
        {chiefs.map((chief) => (
          <ChiefBox key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
};
export default Chiefs;
