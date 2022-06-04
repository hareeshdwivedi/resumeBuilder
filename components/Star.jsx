import React from "react";

function Star(props) {
  const { setRating, setHover, style } = props;
  return (
    <button className={style} onClick={setRating} onMouseEnter={setHover}>
      <span className="star">&#9733;</span>
    </button>
  );
}
export default Star;
