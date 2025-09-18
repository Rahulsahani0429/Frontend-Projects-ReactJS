

import { useState } from "react";

function Card() {
  const [elementStyle, setElementStyle] = useState({
    color: "black",
    fontSize: "16px",
    backgroundColor: "gray",
    width: "200px",
    height: "100px",
  });
  const handleColor = () => {
    setElementStyle({
      color: "pink",
      backgroundColor: "blue",
      textAlign: "center",
      width: "500px",
      height: "500px",
    });
  };
  return (
    <>
      <div style={elementStyle}>
        <img style={{width:"200px",height:"200px"}}
          src="https://media.istockphoto.com/id/1418379255/photo/net-zero-2050-carbon-neutral-and-net-zero-concept-natural-environment-a-climate-neutral-long.jpg?s=612x612&w=0&k=20&c=VEny_8m1_BQ3Y-ocqI7UNOSTwHMCzLCr_mlWwFcM5Mk="
          alt="something is messing"
        />
      </div>
      ;<button onClick={handleColor}>change color</button>;
    </>
  );
}
export default Card;
// Or with default styles:
